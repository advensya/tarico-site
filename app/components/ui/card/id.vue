<template>
  <v-container class="w-100">
    <v-row class="bg">
      <v-col cols="12" sm="6">
        <div class="pa-5">
          <h3
            id="products-main-title"
            class="text-h6"
            style="text-wrap: balance"
            v-html="`${Products.id.name}`"
          ></h3>

          {{ $t("products.id.cards.one.title") }}

          <p
            id="prod-intro-id"
            class="mt-2"
            style="text-wrap: pretty; hyphens: auto"
            v-html="$t(`products.id.cards.one.description`)"
          ></p>

          <div
            class="d-flex align-center ga-2 flex-wrap mt-5 mb-5"
            role="group"
            :aria-label="$t('products.id.cta')"
            :aria-describedby="'prod-intro-id'"
          >
            <v-btn
              color="primary"
              rounded="0"
              class="border"
              :to="$localePath(Products.id.to)"
              :aria-label="$t('products.id.cta')"
            >
              {{ $t("products.id.cta") }}
            </v-btn>
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <div class="pa-5">
          <h4 class="text-h6 mb-3">
            {{ $t("products.id.cards.one.subtitle") }}
          </h4>
          <div
            v-for="feature in ['01', '02', '03']"
            :key="feature"
            class="d-flex align-center ga-2"
          >
            <i class="fi fi-ss-check-circle"></i>
            <span v-html="$t(`products.id.features.${feature}.title`)"></span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
