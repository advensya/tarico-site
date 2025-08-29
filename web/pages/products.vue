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
    <div class="text- pg-products--cover" style="">
      <v-container style="max-width: 992px"> </v-container>
    </div>
  </v-app>
</template>

<style lang="scss">
.pg-products--cover {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding-top: 70px;
  padding-bottom: 70px;

  > * {
    position: relative;
    z-index: 2;
  }

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

  &::after {
    position: absolute;
    content: "";
    z-index: 1;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(var(--v-theme-background), 1) 0%,
      rgba(var(--v-theme-primary), 0) 100%
    );
  }

  .pg-home__title {
    font-size: clamp(2rem, 8.2352941176vw, 4rem);
    line-height: 1.1;
    background: linear-gradient(
      90deg,
      rgba(var(--v-theme-dark)),
      rgba(var(--v-theme-dark))
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text; /* pour Firefox */
  }
}
</style>
