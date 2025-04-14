<script lang="ts" setup></script>

<template>
  <v-app-bar
    class="ui-header"
    style="
      border-color: rgba(var(--v-theme-on-background), 0.06) !important;
      height: 64px;
    "
    :elevation="0"
    color="transparent"
  >
    <div class="mr-5"></div>
    <nuxt-link
      class="d-flex align-center text-black overflow-hidden pa-1"
      :to="{ name: 'index' }"
      style="width: max-content; display: flex; align-items: center; gap: 5px"
    >
      <div
        class="bg- text-primary"
        style="
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.12em;
        "
      >
        <ui-svg name="logo" style="width: 100%" />
      </div>

      <div style="font-weight: bold; font-size: 26px">tarico</div>
    </nuxt-link>

    <div class="mx-auto d-flex align-center ga-2">
      <v-btn color="dark" variant="text" size="small">
        produits
        <template #append>
          <i class="fi fi-rr-angle-small-down"></i>
        </template>
      </v-btn>
      <v-btn variant="text" size="small">Blog</v-btn>
      <v-btn variant="text" size="small">Docs</v-btn>
    </div>

    <v-btn variant="flat" size="large" color="dark" rounded>
      <template #prepend><i class="fi fi-rr-comment"></i></template>
      Contactez-nous
    </v-btn>

    <div class="mr-5"></div>
  </v-app-bar>
</template>

<style lang="scss">
.ui-header {
  height: 64px;

  .v-toolbar__content {
    height: 100% !important;
    background-color: rgba(var(--v-theme-background), 0.0001);
    backdrop-filter: blur(0.9rem);
  }
}
</style>
