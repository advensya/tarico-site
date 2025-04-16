<script lang="ts" setup>
const items = ref([
  { code: "home", title: "Home", to: { name: "index" } },
  { code: "products", title: "products", to: { name: "hr" } },
  { code: "whytarico", title: "Why Tarico ?" },
  { code: "blog", title: "Blog" },
  { code: "enterprise", title: "Enterprise" },
]);
</script>

<template>
  <v-toolbar
    height="64"
    flat
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
      v-if="!$slots.brand"
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

      <div style="font-weight: bold; font-size: 26px">TARICO</div>
    </nuxt-link>
    <slot name="brand" />

    <v-spacer />

    <div v-if="$vuetify.display.mdAndUp" class="d-flex align-center ga-2">
      <template v-for="(item, i) in items" :key="i">
        <template v-if="item.code === 'products'">
          <ui-header-product>
            <template #activator="{ props }">
              <v-btn v-bind="props" color="dark" variant="text" size="small">
                produits
                <template #append>
                  <i class="fi fi-rr-angle-small-down"></i>
                </template>
              </v-btn>
            </template>
          </ui-header-product>
        </template>
        <template v-else>
          <v-btn
            v-if="item.code !== 'home' || $route.name !== 'index'"
            color="dark"
            variant="text"
            size="small"
            :to="item.to"
            rounded
          >
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
        :to="{ name: 'contact' }"
        rounded
      >
        <template #prepend><i class="fi fi-rr-comment"></i></template>
        Contactez-nous
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
                  v-if="item.code !== 'home' || $route.name !== 'index'"
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
  backdrop-filter: blur(0.9rem);
  z-index: 100;
}
</style>
