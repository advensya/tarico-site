<script lang="ts" setup>
const localePath = useLocalePath();
const i18n = useI18n();
const isScrolled = ref(false);

const items = ref([
  {
    code: "home",
    title: i18n.t("components.header.items.home"),
    to: localePath({ name: "index" }),
  },
  {
    code: "products",
    title: i18n.t("components.header.items.products"),
    to: localePath({ name: "products" }),
  },
  { code: "whytarico", title: i18n.t("components.header.items.whytarico") },
  { code: "blog", title: i18n.t("components.header.items.blog") },
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
      class="d-flex align-center text-black overflow-hidden pa-1"
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
        <ui-svg name="logo" style="width: 100%" />
      </div>

      <div style="font-weight: bold; font-size: 26px">TARICO</div>
    </nuxt-link>
    <slot name="brand" />

    <v-spacer />

    <div v-if="$vuetify.display.mdAndUp" class="d-flex align-center ga-2">
      <template v-for="(item, i) in items" :key="i">
        <template v-if="item.code === 'products'">
          <ui-header-product>
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                color="dark"
                variant="text"
                size="small"
                :to="item.to"
                rounded
              >
                {{ item.title }}
                <template #append>
                  <i class="fi fi-rr-angle-small-down"></i>
                </template>
              </v-btn>
            </template>
          </ui-header-product>
        </template>
        <template v-else-if="item.code === 'home'">
          <v-btn
            v-if="$localePath({ name: 'index' }) !== $route.path"
            color="dark"
            variant="text"
            size="small"
            :to="item.to"
            rounded
          >
            <template #prepend>
              <i class="fi fi-sr-house-blank"></i>
            </template>
            {{ item.title }}
          </v-btn>
        </template>
        <template v-else>
          <v-btn color="dark" variant="text" size="small" :to="item.to" rounded>
            {{ item.title }}
          </v-btn>
        </template>
      </template>
    </div>

    <v-spacer />

    <div v-if="$vuetify.display.name !== 'xs'" class="d-none d-sm-block">
      <slot name="cta" />
      <v-btn
        v-if="!$slots.cta"
        variant="flat"
        size="large"
        color="dark"
        :to="$localePath({ name: 'contact' })"
        rounded
      >
        <template #prepend><i class="fi fi-rr-comment"></i></template>
        {{ $t("components.header.cta") }}
      </v-btn>
    </div>

    <template v-if="$vuetify.display.smAndDown">
      <v-menu :close-on-content-click="false" offset="5" location="bottom end">
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            color="dark"
            variant="text"
            size="small"
            class="ml-2"
            icon
          >
            <i class="fi fi-rr-menu-burger" style="font-size: 18px"></i>
          </v-btn>
        </template>

        <template #default="{ isActive }">
          <v-card
            color="background"
            width="320"
            max-width="100%"
            rounded="lg"
            class="border"
            style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          >
            <v-list bg-color="background" class="pa-0">
              <!-- <ui-header-product @close="isActive.value = false">
                <template #activator="{ props }">
                  <v-list-item v-bind="props">
                    <template #prepend>
                      <div style="width: 30px">
                        <i class="fi fi-br-grid"></i>
                      </div>
                    </template>
                    <template #title> Produits </template>
                    <template #append>
                      <i class="fi fi-rr-angle-small-right text-primary"></i>
                    </template>
                  </v-list-item>
                </template>
              </ui-header-product> -->

              <template v-for="(item, i) in items" :key="i">
                <v-list-item
                  v-if="
                    item.code !== 'home' ||
                    $localePath({ name: 'index' }) !== $route.path
                  "
                  :to="item.to"
                  @click="isActive.value = false"
                >
                  <template #title>
                    {{ item.title }}
                  </template>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </template>
      </v-menu>
    </template>

    <div class="mr-5"></div>
  </v-toolbar>
</template>

<style lang="scss">
.ui-header {
  position: sticky !important;
  top: 0;
  z-index: 100;

  .v-toolbar__content {
    backdrop-filter: blur(0.9rem);
  }

  &.isScrolled {
    .v-toolbar__content {
      border-bottom: 3px solid rgba(var(--v-theme-on-background), 0.02);
    }
  }
}
</style>
