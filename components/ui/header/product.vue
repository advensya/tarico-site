<script lang="ts" setup>
const emit = defineEmits<{ (e: "close"): void }>();
const localePath = useLocalePath();

const currentProduct = ref(0);
</script>

<template>
  <v-menu
    offset="5"
    location="bottom center"
    :close-on-content-click="false"
    :open-on-click="false"
    open-on-hover
  >
    <template #activator="{ props }">
      <slot name="activator" :props="props" />
    </template>

    <template #default="{ isActive }">
      <v-card
        color="background"
        max-width="882"
        rounded="lg"
        class="border"
        style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      >
        <div class="ui-header--product d-flex">
          <div class="ui-header--product__nav">
            <div style="width: 332px">
              <v-list class="pa-0" bg-color="transparent">
                <template v-for="(product, p) in Products.slice(0, 5)" :key="p">
                  <v-list-item
                    :to="product.to ? localePath(product.to) : undefined"
                    @click="
                      isActive.value = false;
                      emit('close');
                    "
                    @mouseenter="currentProduct = p"
                  >
                    <template #prepend>
                      <img
                        :src="product.logo"
                        :alt="product.title"
                        style="width: 32px"
                      />
                    </template>
                    <template #title>
                      <div class="ml-2" v-html="product.title"></div>
                    </template>
                    <template #append>
                      <i
                        v-if="currentProduct === p"
                        class="fi fi-rr-angle-small-right text-primary d-md-block d-none"
                      ></i>
                    </template>
                  </v-list-item>
                </template>
              </v-list>

              <div class="pa-5 mt-auto">
                <v-btn
                  color="dark"
                  variant="tonal"
                  :to="$localePath({ name: 'products' })"
                  rounded
                >
                  {{ $t("components.header.products.items.allProducts") }}
                  <template #prepend>
                    <i class="fi fi-br-grid"></i>
                  </template>
                </v-btn>
              </div>
            </div>
          </div>
          <div class="ui-header--product__body d-none d-md-block">
            <v-container>
              <div class="d-flex ga-2">
                <img
                  :src="Products[currentProduct].logo"
                  :alt="Products[currentProduct].title"
                  style="width: 42px"
                />

                <div class="ml-auto"></div>
              </div>

              <div
                class="mt-5"
                v-html="Products[currentProduct].description.fr"
              ></div>
            </v-container>
          </div>
        </div>
      </v-card>
    </template>
  </v-menu>
</template>

<style lang="scss">
.ui-header--product {
  .ui-header--product__nav {
    > div {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    @media (min-width: 960px) {
      background-color: rgba(var(--v-theme-on-background), 0.04);
    }
  }
}
</style>
