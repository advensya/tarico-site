<script lang="ts" setup>
defineI18nRoute({
  paths: {
    en: "/blog",
    fr: "/articles",
  },
});
</script>

<template>
  <v-app>
    <ui-header> </ui-header>

    <nuxt-page />

    <ui-footer />
  </v-app>
</template>
