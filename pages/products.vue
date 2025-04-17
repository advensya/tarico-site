<script lang="ts" setup>
defineI18nRoute({
  paths: {
    en: "/products",
    fr: "/solutions",
  },
});
</script>

<template>
  <v-app>
    <ui-header />

    <ui-footer />
  </v-app>
</template>
