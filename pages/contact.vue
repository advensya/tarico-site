<script lang="ts" setup>
defineI18nRoute({
  paths: {
    en: "/contact-us",
    fr: "/nous-contacter",
  },
});
</script>

<template>
  <v-app>
    <ui-header>
      <template #cta></template>
    </ui-header>

    <ui-footer />
  </v-app>
</template>
