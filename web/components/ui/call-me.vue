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
        label: $i18n.t("callMe.fields.name"),
      },
      key: "name",
      validators: { required: true },
    },
    {
      interface: {
        type: "text",
        label: $i18n.t("callMe.fields.contact"),
      },
      key: "contact",
      validators: { required: true },
    },
    {
      interface: {
        type: "longtext",
        label: $i18n.t("callMe.fields.message"),
      },
      key: "message",
    },
  ],
  interfaces: {},
};
const openCal = ref<HTMLButtonElement>();
const messages = ref<Array<{ text: string; color: string }>>([]);
const submiting = ref(false);
const isDialogOpen = defineModel({ default: false });

async function submit(value: { values: Record<string, any> }) {
  submiting.value = false;

  const content = [`procuct: ${props.product}`];

  for (const key of Object.keys(value.values)) {
    const i = options.schemaOptions!.findIndex((s) => s.key === key);
    const row = `${options.schemaOptions![i].interface!.label}: ${value.values[key]}`;
    content.push(row);
  }

  try {
    const { data: res } = await useFetch("/api/call-me", {
      method: "POST",
      body: { content: content.join("\n") },
    });

    if (res.value?.success) {
      $trackEvent("call-me", value.values);
      isDialogOpen.value = false;
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
        {{ $t("callMe.title") }}
      </v-btn>

      <slot name="activator" :props />
    </template>

    <v-card>
      <div class="rounded-xl pa-5 pa-md-10 bg-background">
        <v-container>
          <div class="mb-5">
            {{ $t("callMe.text") }}
          </div>

          <form-model :options="options" @submit="submit">
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
                  {{ $t("callMe.submit") }}
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
