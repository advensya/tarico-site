<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Swiper as SwiperClass } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const localePath = useLocalePath();

const products = ref([
  { name: "Tarico <b>FORM</b>", props: { to: localePath({ name: "form" }) } },
  { name: "Tarico <b>ID</b>", props: { to: localePath({ name: "id" }) } },
  {
    name: "Tarico <b>Hiring",
    props: { to: localePath({ name: "hr-hiring" }) },
  },
  { name: "Tarico <b>HR</b>", props: { to: localePath({ name: "hr" }) } },
]);
</script>

<template>
  <section class="tarico-hero-two">
    <div class="back"></div>

    <div class="mb-auto"></div>

    <v-container :fluid="$vuetify.display.xs">
      <v-row>
        <v-col cols="12" md="8">
          <div style="position: relative" class="px-5">
            <h1 class="title" v-html="$t('hero.one.title')"></h1>
            <!-- <p class="mt-5" v-html="$t('hero.one.text')"></p> -->

            <div class="d-flex align-center ga-2 flex-wrap mt-5">
              <v-btn
                size="large"
                color="background"
                rounded="0"
                class="border"
                :to="$localePath({ name: 'products' })"
                :block="$vuetify.display.smAndDown"
              >
                {{ $t("hero.one.all") }}
              </v-btn>
              <v-btn
                size="large"
                color="primary"
                rounded="0"
                :to="$localePath({ name: 'hr' })"
                :block="$vuetify.display.smAndDown"
              >
                {{ $t("hero.one.cta") }}
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="4"></v-col>
      </v-row>
    </v-container>

    <div class="mt-auto"></div>

    <div class="bottom w-100">
      <ui-frame class="mt-0">
        <template v-if="$vuetify.display.smAndDown">
          <v-col class="frame">
            <swiper
              :spaceBetween="0"
              :slidesPerView="'auto'"
              :grabCursor="true"
              :autoplay="{
                delay: 1000,
                pauseOnMouseEnter: true,
              }"
              :allow-touch-move="false"
              :pagination="false"
              :navigation="false"
              :loop="true"
              :center-insufficient-slides="true"
              :modules="[Autoplay, Navigation, Pagination]"
              class="w-100"
              style="height: 60px"
            >
              <swiper-slide
                v-for="(product, p) in products"
                :key="p"
                style="width: max-content"
              >
                <div class="h-100 d-flex align-center px-3">
                  <div
                    class="d-flex align-center ga-2"
                    v-html="product.name"
                  ></div>
                </div>
              </swiper-slide>
            </swiper>
          </v-col>
        </template>
        <template v-else>
          <v-col
            v-for="code in ['hr', 'id', 'onboarding', 'form', 'heavy']"
            :key="code"
            class="frame"
          >
            <nuxt-link
              :to="$localePath(Products[code].to)"
              v-html="Products[code].name"
              class="pa-3 text-center d-block text-dark"
            ></nuxt-link>
          </v-col>
        </template>
      </ui-frame>
    </div>
  </section>
</template>

<style lang="scss">
.tarico-hero-two {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .back {
    overflow: hidden;
    position: absolute;
    inset: 0;
    z-index: 0;

    background: rgb(var(--v-theme-dark), 0.04);
    -webkit-mask: url("/images/grid.svg") center/cover no-repeat;
    mask: url("/images/grid.svg") center/cover no-repeat;

    &::before {
      display: none;
      content: "";
      background-image: url("/images/grid.svg");
      position: absolute;
      inset: 0;
      background-position: center;
      background-size: cover;
      opacity: 0.04;
      filter: sepia(100%) saturate(500%) hue-rotate(180deg);
    }
  }

  .title {
    font-size: 3.2rem;
    line-height: 1;
    font-weight: bold;

    @media (max-width: 812px) {
      font-size: 3rem;
    }

    @media (max-width: 662px) {
      font-size: 2rem;
    }
  }

  .bottom {
    position: relative;
    box-shadow:
      rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;

    --v-border-opacity: 0.05;
    // color: rgb(var(--v-theme-on-primary));

    &::before {
      position: absolute;
      content: "";
      inset: 0;
      background-color: rgba(var(--v-theme-background), 1);
      z-index: 0;
    }
  }
}
</style>
