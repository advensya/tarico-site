<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  const path = `blog/blog/${route.params.slug}.md`;
  return queryCollection("blog").where("id", "=", path).first();
});

useHead({
  title: page.value?.seo?.title ?? page.value?.title,
  meta: [
    {
      name: "description",
      content: page.value?.seo?.description ?? page.value?.description,
    },
  ],
});
</script>

<template>
  <template v-if="page">
    <ContentRenderer :value="page" class="ui-content">
      <slot />
    </ContentRenderer>
  </template>
</template>
