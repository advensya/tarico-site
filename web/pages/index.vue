<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Swiper as SwiperClass } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const _swiper = ref<SwiperClass>();
const i18n = useI18n();

useHead({
  templateParams: {
    siteDescription: i18n.t("pages.hr.index.hero.title"),
    siteName: "Tarico HR",
  },
});

function gotoBookDemo() {
  const e = document.querySelector("#book-demo");
  if (e) e.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <v-app class="pg-hr-index">
    <div style="position: relative">
      <div class="pg-hr-index--hero__back"></div>

      <section class="pg-hr-index--hero">
        <v-container class="pb-16 pt-5 pt-md-16 mb-16">
          <div class="mb-16 position-relative d-flex mr-5">
            <nuxt-link
              class="d-flex align-end text-dark overflow-hidden"
              :to="$localePath({ name: 'index' })"
              style="
                width: max-content;
                display: flex;
                align-items: center;
                gap: 5px;
                font-size: 28px;
                line-height: 1;
              "
            >
              <ui-svg name="logo-v2" width="64" class="text-primary mr-2" />

              <div class="text-h5 d-flex ga-2">
                <span>TARICO</span>
                <b>HR</b>
              </div>
            </nuxt-link>

            <v-spacer />

            <!-- <ui-locale /> -->
          </div>

          <v-row>
            <v-col cols="12" md="6">
              <div style="position: relative" class="mt-0 mt-md-16">
                <div class="mx-auto overflow-hidden flex-column text-h4">
                  <swiper
                    :modules="[Autoplay, Navigation, Pagination]"
                    :auto-height="true"
                    :direction="'vertical'"
                    :loop="true"
                    :autoplay="{
                      delay: 1000,
                      disableOnInteraction: false,
                    }"
                    :allow-touch-move="false"
                    :pagination="false"
                    :navigation="false"
                    style="height: 70px"
                  >
                    <swiper-slide v-for="i in 9" :key="i">
                      <div style="width: max-content">
                        <!-- :class="[`bg-${module.color}`]" -->
                        <div
                          class="px-2 d-flex align-center ga-2 bg-background"
                          style="line-height: 1; height: 50px"
                          :styles="{
                            backgroundColor: $t(
                              `pages.hr.index.services.features[${i - 1}].bg`
                            ),
                            color: $t(
                              `pages.hr.index.services.features[${i - 1}].color`
                            ),
                          }"
                        >
                          <!-- <img
                            style="width: 32px"
                            :src="
                              $t(
                                `pages.hr.index.services.features[${i - 1}].icon`
                              )
                            "
                          /> -->
                          <div>
                            {{
                              $t(
                                `pages.hr.index.services.features[${i - 1}].title`
                              )
                            }}
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                </div>

                <h1 class="pg-hr-index__title" style="max-width: 442px">
                  {{ $t("pages.hr.index.hero.title") }}
                </h1>

                <p
                  v-if="$vuetify.display.mdAndUp"
                  class="mt-10"
                  v-html="$t('pages.hr.index.hero.description')"
                ></p>
              </div>
            </v-col>
            <v-col cols="12" md="6" id="book-demo">
              <ui-hr-book-demo class="ml-0 ml-md-5" />

              <p
                v-if="$vuetify.display.smAndDown"
                class="mt-10"
                v-html="$t('pages.hr.index.hero.description')"
              ></p>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section class="ph-hr-index--advantage position-relative py-16">
        <v-container>
          <h2
            class="text-h4 text-center pg-hr-index__title mx-auto"
            style="max-width: 662px"
            v-html="$t('pages.hr.index.advantage.title')"
          ></h2>
          <p class="text-center mt-5">
            {{ $t("pages.hr.index.advantage.description") }}
          </p>
          <v-row class="mt-16">
            <v-col v-for="i in 3" :key="i" cols="12" sm="6" md="4">
              <div
                style="
                  background-color: rgba(var(--v-theme-primary), 0.05);
                  min-height: 502px;
                  display: flex;
                  flex-direction: column;
                "
                class="pa-10 rounded-xl h-100"
              >
                <img
                  :src="$t(`pages.hr.index.advantage.items[${i - 1}].icon`)"
                  style="max-height: 200px; max-width: 200px"
                  class="mx-auto d-block my-10 mb-16"
                />

                <div class="mt-auto">
                  <h2 class="text-h6 font-weight-bold">
                    {{ $t(`pages.hr.index.advantage.items[${i - 1}].title`) }}
                  </h2>

                  <p class="mt-5">
                    {{ $t(`pages.hr.index.advantage.items[${i - 1}].text`) }}
                  </p>
                </div>

                <div>
                  <v-btn
                    color="dark"
                    variant="flat"
                    size="large"
                    class="mt-5"
                    rounded
                    @click="gotoBookDemo"
                  >
                    {{ $t("bookDemo.title") }}
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </div>

    <v-app theme="dark">
      <section class="py-16 mt-10">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <img
                :src="'/images/10951883.png'"
                style="max-height: 200px; max-width: 200px"
              />
              <h2 class="pg-hr-index__title mt-5">
                {{ $t("pages.hr.index.funcs.title") }}
              </h2>

              <v-btn
                color="dark"
                size="large"
                class="my-16"
                variant="flat"
                rounded
                @click="gotoBookDemo"
              >
                {{ $t("bookDemo.title") }}
              </v-btn>
            </v-col>

            <v-col cols="12" md="8">
              <v-row>
                <v-col v-for="i in 4" :key="i" cols="12" sm="6">
                  <div class="rounded pa-5 h-100" style="">
                    <div class="d-flex align-center ga-2">
                      <i
                        :class="
                          $t(`pages.hr.index.funcs.features.${i - 1}.icon`)
                        "
                        style="font-size: 24px"
                      ></i>
                      <b style="font-size: 18px">
                        {{ $t(`pages.hr.index.funcs.features.${i - 1}.code`) }}
                      </b>
                    </div>
                    <h3 class="mt-2 font-weight-bold text-h5">
                      {{ $t(`pages.hr.index.funcs.features.${i - 1}.title`) }}
                    </h3>
                    <p class="mt-3 text-body-2">
                      {{ $t(`pages.hr.index.funcs.features.${i - 1}.text`) }}
                    </p>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section class="pb-16">
        <v-container class="border-t">
          <div class="pb-16"></div>
          <v-row>
            <v-col v-for="i in 3" :key="i" cols="12" sm="4">
              <div class="rounded pa-5 h-100 text-center" style="">
                <!-- <ui-svg :name="benefits[i].icon" size="64" /> -->
                <img
                  :src="$t(`pages.hr.index.benefits.items.${i - 1}.icon`)"
                  style="max-width: 180px"
                />
                <h3 class="mt-2 font-weight-bold pg-hr-index__title mt-5">
                  {{ $t(`pages.hr.index.benefits.items.${i - 1}.title`) }}
                </h3>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-app>

    <section class="py-16">
      <v-container>
        <h2
          class="text-h4 text-center pg-hr-index__title mx-auto mb-16"
          style="max-width: 442px"
        >
          {{ $t("pages.hr.index.services.title") }}
        </h2>
        <v-row>
          <v-col v-for="i in 9" :key="i" cols="12" sm="6" md="4">
            <div class="rounded- overflow-hidden">
              <div
                class="w-100 d-flex align-center justify-center rounded-lg"
                style="
                  background-color: rgba(var(--v-theme-primary), 0.05);
                  height: 220px;
                "
              >
                <img
                  :src="$t(`pages.hr.index.services.features[${i - 1}].icon`)"
                />
              </div>
              <div class="rounded px-7 py-5">
                <div class="font-weight-bold text-h5">
                  {{ $t(`pages.hr.index.services.features[${i - 1}].title`) }}
                </div>
                <p class="mt-3 text-body-2">
                  {{ $t(`pages.hr.index.services.features[${i - 1}].text`) }}
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="pt-16 border-">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-container>
              <img
                src="https://cdn-icons-png.flaticon.com/128/5517/5517030.png"
                class="d-flex mx-auto mb-10"
              />
              <h2
                class="text-center pg-hr-index__title mx-auto"
                style="max-width: 662px"
              >
                {{ $t(`pages.hr.index.contract.title`) }}
              </h2>
              <p class="text-center mt-2">
                {{ $t(`pages.hr.index.contract.text`) }}
              </p>
            </v-container>
          </v-col>

          <v-col cols="12">
            <v-row>
              <v-col v-for="d in 3" :key="d" cols="12" sm="4">
                <div class="pa-5">
                  <h3 class="text-h5 text-center mb-5 mx-5 font-weight-bold">
                    {{ $t(`pages.hr.index.contract.features[${d - 1}].title`) }}
                  </h3>

                  <img
                    :src="$t(`pages.hr.index.contract.features[${d - 1}].u`)"
                    class="d-block w-100"
                  />

                  <p class="text-center mb-5 mt-2">
                    {{ $t(`pages.hr.index.contract.features[${d - 1}].text`) }}
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="py-16">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" order-md="">
            <div
              class="d-flex flex-column align-md-end text-left text-md-right"
            >
              <h2
                class="pg-hr-index__title mt-0 mt-md-16 mt-0 pt-md-16"
                style="max-width: 442px"
              >
                {{ $t("pages.hr.index.contact.title") }}
              </h2>

              <p class="mt-5">
                {{ $t("pages.hr.index.contact.text") }}
              </p>

              <div>
                <v-btn
                  color="dark"
                  variant="flat"
                  size="large"
                  class="mt-5"
                  rounded
                  @click="gotoBookDemo"
                >
                  {{ $t("bookDemo.title") }}
                </v-btn>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <img
              :src="'/images/support.png'"
              srco="https://website-media.deel.com/media_plp_support_930ff95d22.jpg"
              class="mx-auto d-block"
              style="
                max-width: 100%;
                max-height: 80dvh;
                height: 600px;
                margin: auto;
              "
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="py-16 bg-grey-lighten-5 border-b">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <h2 class="text-h4 mb-3 font-weight-bold" style="max-width: 400px">
              {{ $t("pages.hr.index.access.title") }}
            </h2>
            <div v-for="i in 3" :key="i" class="mt-5">
              <div class="d-flex ga-3 align-center">
                <div>
                  <div class="d-flex justify-center" style="width: 50px">
                    <span
                      class="rounded-pill bg-teal-lighten-3"
                      style="
                        width: 30px;
                        height: 30px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      "
                    >
                      {{ $t(`pages.hr.index.access.steps[${i - 1}].num`) }}
                    </span>
                  </div>
                </div>

                <div class="font-weight-bold py-3">
                  {{ $t(`pages.hr.index.access.steps[${i - 1}].title`) }}
                </div>
              </div>

              <div class="d-flex ga-3 mt-2">
                <div>
                  <div class="d-flex justify-center h-100" style="width: 50px">
                    <div class="border h-100"></div>
                  </div>
                </div>

                <div>
                  {{ $t(`pages.hr.index.access.steps[${i - 1}].text`) }}
                </div>
              </div>
            </div>

            <div class="d-flex">
              <div class="mx-8"></div>
              <v-btn
                color="dark"
                variant="flat"
                size="large"
                class="mt-5"
                rounded
                @click="gotoBookDemo"
              >
                {{ $t("bookDemo.title") }}
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <ui-footer />
  </v-app>
</template>

<style lang="scss">
.pg-hr-index {
  .v-container {
    max-width: 1450px;
  }

  .pg-hr-index__title {
    font-size: 2.2rem;
    line-height: 1;
    font-weight: bold;

    @media (max-width: 662px) {
      font-size: 2rem;
    }
  }
}
.pg-hr-index--hero__back {
  overflow: hidden;
  position: absolute;
  left: 0;
  top: -80px;
  width: 100%;
  height: calc(100% + 80px);
  z-index: 0;

  background: linear-gradient(
    to bottom right,
    rgba(var(--v-theme-primary), 0.2) 0%,
    rgba(var(--v-theme-secondary), 0) 100%
  );
}

.pg-hr-index--hero {
  position: relative;
  min-height: 100dvh;
}

.pg-hr-index--description {
  min-height: 100lvh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* The image used */

  &::before {
    position: absolute;
    content: "";
    inset: 0;

    /* Create the parallax scrolling effect */
    background-image: url("/images/people.png");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
