<script lang="ts" setup>
import type { Options } from "@tarico/form";

const props = defineProps({ product: { type: String } });

const { $i18n } = useNuxtApp();
const { $trackEvent } = useNuxtApp();

const options: Options = {
  title: "Modifier",
  schemaOptions: [
    {
      interface: {
        type: "text",
        label: $i18n.t("words.firstName"),
      },
      key: "firstName",
      validators: { required: true },
    },
    {
      interface: {
        type: "text",
        label: $i18n.t("words.lastName"),
      },
      key: "lastName",
      validators: { required: true },
    },
    {
      interface: {
        type: "email",
        label: $i18n.t("words.workEmail"),
      },
      key: "email",
      validators: { required: true },
    },
    {
      interface: {
        type: "phone",
        label: $i18n.t("words.phone"),
      },
      key: "phone",
      validators: { required: true },
    },
    {
      interface: {
        type: "text",
        label: $i18n.t("words.companyName"),
      },
      key: "companyName",
      validators: { required: true },
    },
    {
      interface: {
        type: "select",
        label: $i18n.t("words.companySize"),
      },
      key: "companySize",
      validators: {
        options: {
          args: [
            {
              value: "1-20",
              title: `1-20 ${$i18n.t("words.persons")}`,
            },
            {
              value: "21-200",
              title: `21-200 ${$i18n.t("words.persons")}`,
            },
            {
              value: "200-500",
              title: `200-500 ${$i18n.t("words.persons")}`,
            },
            {
              value: "501-2000",
              title: `501-2000 ${$i18n.t("words.persons")}`,
            },
            {
              value: "+2000",
              title: `+2000 ${$i18n.t("words.persons")}`,
            },
          ],
        },
        required: true,
      },
    },
  ],
  interfaces: {},
};
const show = ref(false);
const openCal = ref<HTMLButtonElement>();
const messages = ref<Array<{ text: string; color: string }>>([]);
const submiting = ref(false);
const isDialogOpen = defineModel({ default: false });

onMounted(() => {
  useCal();
});

async function submit(value: { values: Record<string, any> }) {
  submiting.value = false;

  const content = [`procuct: ${props.product}`];

  for (const key of Object.keys(value.values)) {
    const i = options.schemaOptions!.findIndex((s) => s.key === key);
    const row = `${options.schemaOptions![i].interface!.label}: ${value.values[key]}`;
    content.push(row);
  }

  try {
    const { data: res } = await useFetch("/api/hr/book-demo", {
      method: "POST",
      body: { content: content.join("\n") },
    });

    if (res.value?.success) {
      $trackEvent("hr-book-demo", value.values);
      isDialogOpen.value = false;
      // openCal.value?.click();
    } else {
      messages.value.push({
        text: $i18n.t("pages.contact.messages.error"),
        color: "red",
      });
    }
  } catch (error) {
    messages.value.push({
      text: $i18n.t("pages.contact.messages.error"),
      color: "red",
    });
  } finally {
    submiting.value = false;
  }
}
</script>

<template>
  <v-dialog v-model="isDialogOpen" max-width="662px">
    <template #activator="{ props }">
      <v-btn
        v-if="!$slots.activator"
        v-bind="props"
        color="primary"
        rounded="0"
      >
        {{ $t("words.bookDemo") }}
      </v-btn>

      <slot name="activator" :props />
    </template>

    <v-card>
      <div class="rounded-xl pa-5 pa-md-10 bg-background">
        <v-container>
          <h5 class="text-h4 mb-5">
            {{ $t("bookDemo.label") }}
          </h5>

          <form-model v-if="show" :options="options" @submit="submit">
            <template #submit-btn>
              <div class="w-100">
                <i18n-t keypath="bookDemo.privacy" tag="p" class="text-body-2">
                  <NuxtLink :to="$localePath({ name: 'privacy' })">
                    {{ $t("privacy") }}
                  </NuxtLink>
                </i18n-t>

                <v-btn
                  color="primary"
                  class="mt-5"
                  type="submit"
                  :loading="submiting"
                >
                  {{ $t("bookDemo.submit") }}
                </v-btn>
              </div>
            </template>
          </form-model>
        </v-container>

        <button
          ref="openCal"
          data-cal-link="tarico/30min"
          data-cal-namespace="30min"
          data-cal-config='{"layout":"month_view"}'
          style="width: 0; height: 0; overflow: hidden"
        ></button>
        <v-snackbar-queue v-model="messages"></v-snackbar-queue>
      </div>
    </v-card>
  </v-dialog>
</template>
