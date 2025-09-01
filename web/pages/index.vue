<template>
  <ui-hero-two class="pg-index-hero" />

  <v-container class="py-16">
    <div class="mb-16 text-center">
      <h2 class="text-hh mx-auto">{{ $t("pages.index.products.title") }}</h2>

      <p class="mt-5 mx-auto" style="max-width: 662px">
        {{ $t("pages.index.products.text") }}
      </p>
    </div>

    <v-row justify="start">
      <v-col
        v-for="code in ['hr', 'id', 'hiring', 'form']"
        :key="code"
        cols="12"
        v-bind="code === 'hr' ? {} : { sm: '6', md: '4' }"
      >
        <div
          class="rounded-lg h-100 border"
          style="
            background: rgb(var(--v-theme-primary), 0.04);
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            overflow: hidden;
          "
        >
          <div v-if="code === 'hr'">
            <div class="pa-5">
              <ui-svg name="logo-v2" size="36" class="text-primary" />
              <h3 class="mt-5 text-h6" v-html="Products[code].name"></h3>
              <p class="mt-2" v-html="$t(`products.${code}.intro`)"></p>

              <nuxt-link
                :to="$localePath(Products[code].to)"
                variant="text"
                class="mt-5 text-primary d-block"
              >
                En savoir plus
              </nuxt-link>
            </div>

            <div
              class="border border-xl rounded-t-xl border-surface border-opacity-100"
              style="
                width: 90%;
                display: block;
                margin: auto;
                margin-top: 20px;
                box-shadow:
                  rgba(0, 0, 0, 0.25) 0px 14px 28px,
                  rgba(0, 0, 0, 0.22) 0px 10px 10px;
                border-bottom: 0 !important;
                overflow: hidden;
              "
            >
              <img src="/assets/tarico-hr-capture-01.png" width="100%" />
            </div>
          </div>

          <div v-else class="pa-5">
            <ui-svg name="logo-v2" size="36" class="text-primary" />

            <h3 class="mt-5 text-h6" v-html="Products[code].name"></h3>
            <p class="mt-2" v-html="$t(`products.${code}.intro`)"></p>

            <nuxt-link
              :to="$localePath(Products[code].to)"
              variant="text"
              class="mt-5 text-primary d-block"
            >
              En savoir plus
            </nuxt-link>
          </div>
        </div>
      </v-col>
    </v-row>

    <div class="mt-10 d-flex justify-center">
      <v-btn
        size="x-large"
        color="primary"
        variant="flat"
        rounded="lg"
        :to="$localePath({ name: 'products' })"
        :block="$vuetify.display.smAndDown"
      >
        <template #prepend>
          <i class="fi fi-rr-apps-add"></i>
        </template>
        {{ $t("pages.index.products.seeAll") }}
      </v-btn>
    </div>
  </v-container>
</template>

<style lang="scss">
.pg-index-hero {
  min-height: 662px;
}

.text-hh {
  font-size: 3.2rem;
  line-height: 1;
  font-weight: bold;
  max-width: 662px;

  @media (max-width: 812px) {
    font-size: 3rem;
  }

  @media (max-width: 662px) {
    font-size: 2rem;
  }
}
</style>
