<script lang="ts" setup>
defineProps({
  title: { type: String, required: true },
});
</script>

<template>
  <div class="ui-content-hero--cover">
    <slot name="cover" />

    <v-container>
      <h1 v-if="!$slots.cover" class="ui-content-hero--title">
        {{ title }}
      </h1>
    </v-container>
  </div>

  <h1 v-if="$slots.cover" class="ui-content-hero--title">
    {{ title }}
  </h1>

  <div class="mb-16"></div>
</template>

<style lang="scss">
.ui-content-hero--cover {
  width: 100%;
  max-width: unset;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    inset: 0;
    top: -80px;
    background: linear-gradient(
      to bottom right,
      rgba(var(--v-theme-primary), 0.3) 0%,
      rgba(var(--v-theme-primary), 0) 100%
    );
  }
}

.ui-content-hero--title {
  font-size: clamp(2rem, 8.2352941176vw, 4.8rem) !important;
  line-height: 1.1;
  margin-bottom: 50px !important;
}
</style>
