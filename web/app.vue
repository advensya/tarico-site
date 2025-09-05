<script lang="ts" setup>
const ready = ref(true);

onMounted(() => {
  ready.value = false;

  setTimeout(() => {
    ready.value = true;
  }, 500);
});
</script>

<template>
  <NuxtLayout>
    <template v-if="ready">
      <ui-header />
      <nuxt-page />
      <ui-footer />
    </template>
  </NuxtLayout>
</template>
