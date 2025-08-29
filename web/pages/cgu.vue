<script lang="ts" setup>
defineI18nRoute({
  paths: {
    en: "/conditions-of-use",
    fr: "/conditions-utilisation",
  },
});

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("others")
    .where("id", "=", "others/others/cgu.fr.md")
    .first();
});
</script>

<template>
  <v-app>
    <template v-if="page">
      <div class="d-flex justify-center pt-16" style="margin-top: 80px">
        <ui-svg name="legal-paper" size="84" />
      </div>
      <ContentRenderer :value="page" class="ui-content pt-16">
        <slot />
      </ContentRenderer>
    </template>
  </v-app>
</template>
