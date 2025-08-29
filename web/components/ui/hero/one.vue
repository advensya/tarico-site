<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Swiper as SwiperClass } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
</script>

<template>
  <section class="tarico-hero-one">
    <div class="back">
      <img src="/images/grid.svg" />
    </div>

    <div class="mb-auto"></div>

    <v-container :fluid="$vuetify.display.xs">
      <v-row>
        <v-col cols="12" md="8">
          <div
            style="position: relative"
            :class="{ 'text-center': $vuetify.display.smAndDown }"
          >
            <h1 class="title" v-html="$t('hero.one.title')"></h1>
            <p class="mt-5" v-html="$t('hero.one.text')"></p>

            <div class="d-flex align-center ga-2 flex-wrap mt-5">
              <v-btn
                size="large"
                color="dark"
                variant="tonal"
                :to="$localePath({ name: 'products' })"
                :block="$vuetify.display.smAndDown"
              >
                {{ $t("hero.one.all") }}
              </v-btn>
              <v-btn
                size="large"
                color="primary"
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

    <div class="bottom w-100 border-b">
      <swiper
        :spaceBetween="30"
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
        <swiper-slide style="width: max-content">
          <div class="h-100 d-flex align-center">
            <v-btn color="dark" variant="text" class="ga-2">
              Tarico <b>FORM</b>
            </v-btn>
          </div>
        </swiper-slide>

        <swiper-slide style="width: max-content">
          <div class="h-100 d-flex align-center">
            <v-btn color="dark" variant="text" class="ga-2">
              Tarico <b>ID</b>
            </v-btn>
          </div>
        </swiper-slide>

        <swiper-slide style="width: max-content">
          <div class="h-100 d-flex align-center">
            <v-btn color="dark" variant="text" class="ga-2">
              Tarico <b>Hiring</b>
            </v-btn>
          </div>
        </swiper-slide>

        <swiper-slide style="width: max-content">
          <div class="h-100 d-flex align-center">
            <v-btn color="dark" variant="text"> Tarico <b>HR</b> </v-btn>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
.tarico-hero-one {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .back {
    overflow: hidden;
    position: absolute;
    inset: 0;
    z-index: 0;

    background: rgb(var(--v-theme-primary), 0.04);
    -webkit-mask: url("/images/grid.svg") center/cover no-repeat;
    mask: url("/images/grid.svg") center/cover no-repeat;

    img {
      position: absolute;
      inset: 0;
      object-position: center;
      object-fit: cover;
      display: none;
    }
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

    &::after {
      content: "";
      inset: 0;
      position: absolute;
      background: linear-gradient(
        to left,
        rgba(var(--v-theme-background), 0) 0%,
        rgba(var(--v-theme-background), 1) 100%
      );
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

    &::before {
      position: absolute;
      content: "";
      inset: 0;
      background-color: rgba(var(--v-theme-background), 1);
      z-index: 0;
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 0;
      background-color: rgba(var(--v-theme-secondary), 0.15);
    }
  }
}
</style>
