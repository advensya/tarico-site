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
    <ui-header />
    <div class="text- pg-products--cover" style="">
      <v-container style="max-width: 992px">
        <h1 class="pg-home__title font-weight-bold">
          {{ $t("pages.products.cover.title") }}
        </h1>

        <div style="font-size: 18px" class="mt-3">
          {{ $t("pages.products.cover.text") }}
        </div>
      </v-container>
    </div>

    <v-container class="py-16">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          v-for="(product, p) in Products"
          :key="p"
          class="mb-10"
        >
          <div class="d-flex align-end ga-2 mb-5">
            <img
              :src="product.logo"
              :alt="product.title"
              width="24"
              height="24"
            />
            <div v-html="product.title"></div>
          </div>
          <div v-html="product.description.fr"></div>

          <template v-if="product.to">
            <v-btn
              :to="$localePath(product.to)"
              variant="tonal"
              color="primary"
              class="mt-5"
              rounded
            >
              En savoir plus
              <template #append>
                <i class="fi fi-rr-arrow-small-right"></i>
              </template>
            </v-btn>
          </template>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <div class="d-flex justify-center mb-16">
        <v-btn
          color="dark"
          variant="flat"
          size="x-large"
          class="mt-5"
          rounded="pill"
          style="border-radius: 0.6em"
          href="mailto:commercial@tarico.io"
        >
          <template #prepend>
            <i class="fi fi-rr-marketplace"></i>
          </template>
          {{ $t("pages.products.cta") }}
        </v-btn>
      </div>
    </v-container>

    <ui-footer />
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
