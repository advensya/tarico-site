<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  const path = `blog/blog/${route.params.slug}.md`;
  return queryCollection("blog").where("id", "=", path).first();
});

useSeoMeta({ title: page.value?.seo?.title ?? page.value?.title });
</script>

<template>
  <template v-if="page">
    <ContentRenderer :value="page" class="ui-content">
      <slot />
    </ContentRenderer>
  </template>
</template>
