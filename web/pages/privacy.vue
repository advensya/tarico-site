<script lang="ts" setup>
defineI18nRoute({
  paths: {
    en: "/privacy-policy",
    fr: "/politique-de-confidentialite",
  },
});

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("others")
    .where("id", "=", "others/others/privacy.fr.md")
    .first();
});
</script>

<template>
  <v-app>
    <template v-if="page">
      <div class="d-flex justify-center pt-16" style="margin-top: 80px">
        <ui-svg name="privacy" size="84" />
      </div>
      <ContentRenderer :value="page" class="ui-content pt-16" />
    </template>
  </v-app>
</template>
