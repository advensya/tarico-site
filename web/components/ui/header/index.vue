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
  <div class="ui-header" style="position: absolute; top: 0; width: 100%">
    <ui-frame class="my-0 py-0">
      <v-col class="frame border-t-0">
        <div class="d-flex align-center h-100">
          <nuxt-link
            class="d-flex align-center text-dark overflow-hidden pa-1 mx-3"
            :to="$localePath({ name: 'index' })"
            style="
              width: max-content;
              display: flex;
              align-items: center;
              gap: 5px;
            "
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

            <div v-if="!$vuetify.display.xs" style="font-size: 26px">
              Tarico
            </div>
          </nuxt-link>

          <v-spacer />
          <!-- <nuxt-link
                v-if="$vuetify.display.smAndUp"
                :to="$localePath({ name: 'company' })"
                class="pa-3 text-no-wrap d-block text-dark"
              >
                A propose de nous
              </nuxt-link> -->

          <v-btn
            variant="flat"
            color="primary"
            class="mr-3 ml-auto"
            rounded="0"
            :active="false"
            :to="$localePath({ name: 'hr' })"
          >
            {{ $t("hero.one.cta") }}

            <template #append>
              <i class="fi fi-rr-angle-small-right"></i>
            </template>
          </v-btn>
        </div>
      </v-col>
    </ui-frame>
  </div>
</template>

<style lang="scss">
.ui-header {
  position: fixed !important;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(0.9rem);
  background-color: rgba(var(--v-theme-background), 0.2);

  &.isScrolled {
    .v-toolbar__content {
      backdrop-filter: blur(0.9rem);
      border-bottom: 3px solid rgba(var(--v-theme-on-background), 0.02);
    }
  }
}
</style>
