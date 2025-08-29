<script lang="ts" setup>
import { VForm } from "vuetify/components";
import type { Options } from "@tarico/form";

defineI18nRoute({
  paths: {
    en: "/contact-us",
    fr: "/nous-contacter",
  },
});

const { $i18n } = useNuxtApp();
const i18n = useI18n();
const submiting = ref(false);
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
      validators: {},
    },
    {
      interface: { type: "spacing", size: 20 },
      key: "145856",
    },
    {
      interface: {
        type: "text",
        label: $i18n.t("words.companyName"),
      },
      key: "companyName",
      validators: {},
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
      },
    },
    {
      interface: { type: "spacing", size: 20 },
      key: "145856",
    },
    {
      key: "message",
      interface: {
        type: "longtext",
        label: $i18n.t("pages.contact.form.message"),
      },
      validators: { required: true },
    },
  ],
  interfaces: {},
};

const messages = ref<Array<{ text: string; color: string }>>([]);

async function submit(value: { values: Record<string, any> }) {
  submiting.value = false;

  const content = [];

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
      $trackEvent("contact", value.values);

      messages.value.push({
        text: i18n.t("pages.contact.messages.success"),
        color: "success",
      });
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
  <v-app>
    <v-container class="py-16" style="margin-top: 80px">
      <v-row>
        <v-col cols="12" sm="10" md="8">
          <h1 class="text-h3 font-weight-bold mb-5">
            {{ $t("pages.contact.title") }}
          </h1>

          <form-model :options="options" @submit="submit">
            <template #submit-btn>
              <div class="w-100">
                <i18n-t
                  keypath="bookDemo.privacy"
                  tag="p"
                  class="text-body-2 my-4"
                  style="max-width: 350px"
                >
                  <NuxtLink :to="$localePath({ name: 'privacy' })">
                    {{ $t("privacy") }}
                  </NuxtLink>
                </i18n-t>

                <div>
                  <v-btn
                    size="x-large"
                    color="primary"
                    class="mt-5"
                    type="submit"
                    :loading="submiting"
                    rounded
                  >
                    <template #append>
                      <i class="fi fi-sr-paper-plane"></i>
                    </template>
                    {{ $t("pages.contact.form.submit") }}
                  </v-btn>
                </div>
              </div>
            </template>
          </form-model>
        </v-col>
      </v-row>
    </v-container>

    <v-snackbar-queue v-model="messages"></v-snackbar-queue>
  </v-app>
</template>
