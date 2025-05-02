<script lang="ts" setup>
import { VForm } from "vuetify/components";

defineI18nRoute({
  paths: {
    en: "/contact-us",
    fr: "/nous-contacter",
  },
});

const i18n = useI18n();
const route = useRoute();

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const form = ref<VForm>();
const data = ref({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
});
const messages = ref<Array<{ text: string; color: string }>>([]);

async function submit() {
  if (!form.value?.isValid) return;

  const content =
    `firstName: ${data.value.firstName}` +
    `\nlastName: ${data.value.lastName}` +
    `\nemail: ${data.value.email}` +
    `\nfor: ${route.query.for}` +
    `\nmessage: ${data.value.message}`;

  try {
    const { data: res } = await useFetch("/api/contact", {
      method: "POST",
      body: { content },
    });

    if (res.value?.success) {
      messages.value.push({
        text: i18n.t("pages.contact.messages.success"),
        color: "success",
      });
    } else {
      messages.value.push({
        text: i18n.t("pages.contact.messages.error"),
        color: "red",
      });
    }
  } catch (error) {
    messages.value.push({
      text: i18n.t("pages.contact.messages.error"),
      color: "red",
    });
  }
}
</script>

<template>
  <v-app>
    <ui-header>
      <template #cta></template>
    </ui-header>

    <v-container class="py-16">
      <v-form ref="form" @submit.prevent="submit">
        <h1 class="text-h3 font-weight-bold mb-5">
          {{ $t("pages.contact.title") }}
        </h1>

        <v-text-field
          :label="$t('pages.contact.form.firstName')"
          :rules="[(v) => !!v || $t('pages.contact.form.errors.required')]"
          variant="outlined"
          v-model="data.firstName"
          rounded
          required
        ></v-text-field>
        <v-text-field
          :label="$t('pages.contact.form.lastName')"
          :rules="[(v) => !!v || $t('pages.contact.form.errors.required')]"
          variant="outlined"
          v-model="data.lastName"
          rounded
          required
        ></v-text-field>
        <v-text-field
          :label="$t('pages.contact.form.email')"
          :rules="[
            (v) =>
              !v
                ? $t('pages.contact.form.errors.required')
                : !emailRegex.test(v)
                ? $t('pages.contact.form.errors.invalidEmail')
                : true,
          ]"
          variant="outlined"
          type="email"
          v-model="data.email"
          rounded
          required
        ></v-text-field>

        <v-textarea
          :label="$t('pages.contact.form.message')"
          :rules="[(v) => !!v || $t('pages.contact.form.errors.required')]"
          variant="outlined"
          v-model="data.message"
          rounded
          required
        ></v-textarea>

        <v-btn color="primary" size="large" type="submit" rounded>
          <template #append>
            <i class="fi fi-rr-paper-plane"></i>
          </template>
          {{ $t("pages.contact.form.submit") }}
        </v-btn>
      </v-form>
    </v-container>

    <v-snackbar-queue v-model="messages"></v-snackbar-queue>

    <ui-footer />
  </v-app>
</template>
