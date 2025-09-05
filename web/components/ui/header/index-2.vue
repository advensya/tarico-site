<script lang="ts" setup>
const localePath = useLocalePath();
const i18n = useI18n();
const isScrolled = ref(false);

const items = ref([
  // {
  //   code: "home",
  //   title: i18n.t("components.header.items.home"),
  //   to: localePath({ name: "index" }),
  // },
  // {
  //   code: "products",
  //   title: i18n.t("components.header.items.products"),
  //   to: localePath({ name: "products" }),
  // },

  {
    code: "hr",
    title: "HR",
    to: localePath({ name: "hr" }),
  },
  {
    code: "form",
    title: "Formulaire",
    to: localePath({ name: "form" }),
  },
  {
    code: "whytarico",
    title: i18n.t("components.header.items.whytarico"),
    to: localePath({ name: "why" }),
  },
  {
    code: "blog",
    title: i18n.t("components.header.items.blog"),
    to: localePath({ name: "blog" }),
  },
  {
    code: "company",
    title: i18n.t("components.header.items.company"),
    to: localePath({ name: "company" }),
  },
]);

onMounted(() => {
  addEventListener("scroll", onScroll);
});

function onScroll() {
  isScrolled.value = window.scrollY > 0;
}

onDeactivated(destroy);
onBeforeUnmount(destroy);
function destroy() {
  removeEventListener("scroll", onScroll);
}
</script>

<template>
  <v-toolbar
    height="80"
    flat
    class="ui-header"
    :class="{ isScrolled }"
    style="border-color: rgba(var(--v-theme-on-background), 0.06) !important"
    color="transparent"
  >
    <div class="mr-5"></div>

    <nuxt-link
      v-if="!$slots.brand"
      class="d-flex align-center text-dark overflow-hidden pa-1"
      :to="$localePath({ name: 'index' })"
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
        <ui-svg name="logo-v2" style="width: 100%" />
      </div>

      <div v-if="!$vuetify.display.xs" style="font-size: 26px">Tarico</div>
    </nuxt-link>
    <slot name="brand" />

    <v-spacer />

    <v-spacer />

    <div>
      <slot name="cta" />
      <v-btn
        v-if="!$slots.cta"
        variant="flat"
        size="large"
        color="secondary"
        :active="false"
        :to="$localePath({ name: 'hr' })"
        rounded
      >
        {{ $t("hero.one.cta") }}

        <template #append>
          <i class="fi fi-rr-angle-small-right"></i>
        </template>
      </v-btn>
    </div>

    <div class="mr-5"></div>
  </v-toolbar>
</template>

<style lang="scss">
.ui-header {
  position: fixed !important;
  top: 0;
  z-index: 100;

  &.isScrolled {
    .v-toolbar__content {
      backdrop-filter: blur(0.9rem);
      border-bottom: 3px solid rgba(var(--v-theme-on-background), 0.02);
    }
  }
}
</style>
