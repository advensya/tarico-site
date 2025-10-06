<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Swiper as SwiperClass } from "swiper";
import { Pagination, Keyboard, Navigation, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const _swiper = ref<SwiperClass>();
const container = ref<HTMLDivElement>();
const isActive = ref<boolean>(false);
const current = ref(0);
</script>

<template>
  <div
    ref="container"
    class="scroll-container mt-16"
    :class="{ 'snap-scroll': isActive }"
  >
    <v-container>
      <v-row>
        <v-col v-for="i in 2" :key="i" cols="12" sm="6" class="snap-section">
          <div
            class="rounded-xl overflow-hidden"
            style="
              border: 2px solid rgba(var(--v-theme-secondary), 0.2);
              background-color: rgba(var(--v-theme-secondary), 0.2);
              position: relative;
            "
          >
            <div
              style="
                overflow: hidden;
                background-color: rgba(var(--v-theme-secondary), 0.2);
                display: none;
              "
              class="pb-3 pl-5"
            >
              <div style="height: 100px"></div>
              <transition
                appear
                enter-active-class="animate__animated animate__fadeInDown"
              >
                <div>
                  <v-text-field
                    variant="solo"
                    bg-color="background"
                    rounded="xl"
                    class="ml-10 border rounded-xl"
                    value="Maternité"
                    readonly
                    flat
                    hide-details
                  >
                    <template #prepend-inner>
                      <i
                        class="fi fi-sr-heart mx-2"
                        style="font-size: 22px"
                      ></i>
                    </template>
                  </v-text-field>
                </div>
              </transition>

              <div style="position: relative">
                <transition
                  appear
                  enter-active-class="animate__animated animate__fadeInDown"
                >
                  <div>
                    <v-text-field
                      variant="solo"
                      bg-color="background"
                      rounded="xl"
                      class="mt-2 border rounded-xl elevation-3"
                      value="12 juin 2025"
                      readonly
                      hide-details
                      flat
                    >
                      <template #prepend-inner>
                        <i
                          class="fi fi-rr-daily-calendar mx-2"
                          style="font-size: 22px"
                        ></i>
                      </template>
                    </v-text-field>
                  </div>
                </transition>

                <div
                  style="
                    position: absolute;
                    bottom: -100px;
                    right: -70px;
                    z-index: 1;
                  "
                >
                  <transition
                    appear
                    enter-active-class="animate__animated animate__backInRight"
                  >
                    <div>
                      <v-date-picker
                        elevation="3"
                        color="primary"
                        bg-color="background"
                        class="border"
                        rounded="lg"
                        :model-value="new Date()"
                        hide-header
                      ></v-date-picker>
                    </div>
                  </transition>
                </div>
              </div>

              <div style="height: 100px">
                <v-btn
                  variant="flat"
                  color="primary"
                  size="large"
                  class="mt-2 ml-10"
                  rounded
                >
                  <template #prepend>
                    <i class="fi fi-sr-add"></i>
                  </template>
                  congé
                </v-btn>
              </div>
            </div>

            <img
              :src="
                i === 1
                  ? 'https://www.notion.com/_next/image?url=%2Ffront-static%2Fmeta%2Fstartups_background.png&w=256&q=75'
                  : 'https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F5RcoNncfzeuqS7V5qqelRJ%2F81e4b42053f8937bbbdb4842f0fcdc72%2Fdocs-hero.png&w=1200&q=75'
              "
              alt=""
              style="max-width: 70%; display: block"
              class="mx-auto my-16"
            />

            <v-btn
              style="position: absolute; top: 10px; right: 10px"
              class="mx-auto"
              color="dark"
              variant="tonal"
              size="x-small"
              icon
            >
              <i class="fi fi-rr-arrow-right"></i>
            </v-btn>

            <div class="pa-5">
              <v-container>
                <h2 style="font-size: 32px; line-height: 1">
                  TARICO pour les ressource humaine
                </h2>

                <p class="mt-5" style="font-size: 28px; line-height: 1.1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  dolores perspiciatis, at vero voluptatem sunt mollitia!
                  Aspernatur aliquid nulla excepturi commodi
                </p>

                <p class="mt-8">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                  ad, ipsa provident, cupiditate saepe magni accusamus natus
                  sapiente voluptatem, aspernatur sunt molestiae neque
                  blanditiis pariatur. Quos illo architecto impedit cum. Lorem
                  ipsum dolor, sit amet consectetur adipisicing elit. At ad,
                  ipsa provident, cupiditate saepe magni accusamus natus
                </p>

                <p v-if="i === 2">
                  sapiente voluptatem, aspernatur sunt molestiae neque
                  blanditiis pariatur. Quos illo architecto impedit cum. Lorem
                  ipsum dolor, sit amet consectetur adipisicing elit. At ad,
                  ipsa provident, cupiditate saepe magni accusamus natus
                  sapiente voluptatem, aspernatur sunt molestiae neque
                  blanditiis pariatur. Quos illo architecto impedit cum.
                </p>
              </v-container>
            </div>

            <!-- <v-btn
              style="position: absolute; bottom: 30px; right: 30px"
              size="x-large"
              color="dark"
              variant="flat"
              rounded
              >En savoir plus
              <template #append>
                <i class="fi fi-rr-arrow-right"></i>
              </template>
            </v-btn> -->
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.snap-section {
  scroll-snap-align: start;
}
</style>
