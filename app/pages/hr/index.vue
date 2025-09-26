<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

useSeoMeta({
  title: t("pages.hr.index.meta.title"),
  description: t("pages.hr.index.meta.description"),
});

const features = computed(() => {
  type FeatureItem = {
    title: string;
    list: string[];
  };

  return tm("pages.hr.index.features.items") as FeatureItem[];
});

onMounted(() => {
  addEventListener("scroll", onScroll);
  onScroll();
});

const spaceBetweenCapture = ref(0);

function onScroll() {
  spaceBetweenCapture.value = -50 + window.scrollY / 2;
  if (spaceBetweenCapture.value > 20) spaceBetweenCapture.value = 20;
}

onDeactivated(destroy);
onBeforeUnmount(destroy);
function destroy() {
  removeEventListener("scroll", onScroll);
}
</script>

<template>
  <div class="pg-hr-index--hero">
    <div class="back"></div>

    <svg
      viewBox="0 0 1280 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style="
        position: absolute;
        bottom: 0;
        width: 100lvw;
        left: 50%;
        transform: translateX(-50%);
        z-index: 0;
        pointer-events: none;
      "
    >
      <rect
        width="1280"
        height="384"
        fill="url(#paint0_radial_4211_5930)"
      ></rect>
      <defs>
        <radialGradient
          id="paint0_radial_4211_5930"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(640 384) rotate(-90) scale(275.5 918.333)"
        >
          <stop
            stop-color="rgba(var(--v-theme-on-background))"
            stop-opacity=".07"
          ></stop>
          <stop offset="1" stop-opacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>

    <v-container style="position: relative">
      <div class="pa-5">
        <v-row style="position: relative" justify="start">
          <v-col cols="12" md="8">
            <h1
              class="pg-form-home__title font-weight-bold mt-16"
              v-html="$t('pages.hr.index.hero.title')"
            ></h1>
            <p style="font-size: 18px; max-width: 90%" class="mt-3 pa-0">
              {{ $t("pages.hr.index.hero.subtitle") }}
            </p>

            <ui-book-demo product="hr">
              <template #activator="{ props }">
                <v-btn
                  v-bind="props"
                  color="primary"
                  variant="flat"
                  class="mt-3"
                >
                  {{ $t("pages.form.createForm") }}
                </v-btn>
              </template>
            </ui-book-demo>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <div class="u">
      <div class="d-flex">
        <div class="u-side" style="z-index: 1">
          <img
            src="https://incident.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheropanels-app-noborder.7b2cf3f2.png&w=640&q=75"
            style="height: 80dvh"
          />
        </div>

        <div class="u-side" :style="{ marginLeft: `${spaceBetweenCapture}px` }">
          <img
            src="https://incident.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheropanels-dashboard.7d19aefb.png&w=1920&q=75"
            style="height: 80dvh"
          />
        </div>
      </div>
    </div>
  </div>

  <ui-frame role="region">
    <template #prepend>
      <div class="pa-5 position-relative">
        <h2
          id="benefits-title"
          class="font-weight-bold"
          style="
            max-width: 662px;
            line-height: 1;
            font-size: clamp(2rem, 3.2352941176vw, 4rem);
            text-wrap: balance;
          "
        >
          {{ $t(`pages.hr.index.features.title`) }}
        </h2>
      </div>
    </template>

    <v-col
      v-for="(feature, i) in features"
      :key="i"
      :aria-labelledby="`hr-feature-${i}`"
      cols="6"
      sm="6"
      md="3"
      class="frame"
      role="region"
    >
      <div>
        <h3
          :id="`hr-featuure-${i}`"
          class="pa-5 d-flex align-center"
          style="
            text-wrap: balance;
            line-height: 1.1;
            height: 64px;
            background-color: rgba(var(--v-theme-surface), 0.4);
            font-weight: normal;
          "
        >
          {{ $t(`pages.hr.index.features.items.${i}.title`) }}
        </h3>

        <div class="mt-2 pa-5" style="text-wrap: pretty; hyphens: auto">
          <div v-for="(line, l) in feature.list" :key="l" class="d-flex ga-2">
            <i
              class="fi fi-ss-check-circle text-body-2"
              style="margin-top: 7px"
            ></i>
            {{ $t(`pages.hr.index.features.items.${i}.list.${l}`) }}
          </div>
        </div>
      </div>
    </v-col>

    <v-col cols="12" class="frame">
      <div class="text-center pa-5 bg-secondary">
        <p class="text-h6">
          {{ $t("pages.hr.index.features.savedTimes") }}
        </p>
      </div>
    </v-col>
  </ui-frame>

  <ui-frame role="region">
    <template #prepend>
      <div class="pa-5">
        <ui-svg name="hr/employee" size="64" />
        <h2
          id="about-title"
          class="text-h4 font-weight-bold my-4"
          style="line-height: 1; text-wrap: balance"
          v-html="$t('pages.hr.index.process.title')"
        ></h2>
        <p
          style="max-width: 882px; text-wrap: pretty; hyphens: auto"
          v-html="$t('pages.hr.index.process.text')"
        ></p>
      </div>
    </template>

    <v-col
      v-for="i in 5"
      :key="i"
      :aria-labelledby="`hr-feature-${i}`"
      cols="6"
      sm="6"
      class="frame"
      role="region"
    >
      <div>
        <h3
          :id="`hr-featuure-${i}`"
          class="pa-5 d-flex align-center"
          style="
            text-wrap: balance;
            line-height: 1.1;
            height: 64px;
            background-color: rgba(var(--v-theme-surface), 0.4);
            font-weight: normal;
          "
        >
          {{ $t(`pages.hr.index.process.items.${i - 1}.title`) }}
        </h3>

        <div class="mt-2 pa-5" style="text-wrap: pretty; hyphens: auto">
          {{ $t(`pages.hr.index.process.items.${i - 1}.text`) }}
        </div>
      </div>
    </v-col>
  </ui-frame>

  <ui-frame role="region" aria-labelledby="benefits-title">
    <template #prepend>
      <div
        class="pa-5 position-relative d-flex align-center justify-center ga-2"
      >
        <ui-svg name="lamp-2" size="54" aria-hidden="true" />
        <h2
          id="benefits-title"
          class="mt-2 font-weight-bold"
          style="
            max-width: 662px;
            line-height: 1;
            font-size: clamp(2rem, 8.2352941176vw, 4rem);
            text-wrap: balance;
          "
        >
          {{ $t(`pages.hr.index.benefits.title`) }}
        </h2>
      </div>
    </template>

    <v-col
      v-for="i in 4"
      :key="i"
      cols="12"
      sm="6"
      class="frame"
      role="region"
      :aria-labelledby="`benefit-title-${i}`"
    >
      <div class="pa-5">
        <h3
          :id="`benefit-title-${i}`"
          class="text-h6 font-weight-bold"
          style="text-wrap: balance"
        >
          {{ $t(`pages.hr.index.benefits.list.${i - 1}.title`) }}
        </h3>

        <p class="mt-2" style="text-wrap: pretty; hyphens: auto">
          {{ $t(`pages.hr.index.benefits.list.${i - 1}.text`) }}
        </p>
      </div>
    </v-col>
  </ui-frame>

  <section class="pg-hr-index--foot py-16">
    <div
      style="
        max-width: 772px;
        position: relative;
        backdrop-filter: blur(1.8rem);
        background-color: rgba(var(--v-theme-background), 0.05);
      "
    >
      <div class="pa-10">
        <div class="d-flex justify-center mb-3">
          <i class="fi fi-sr-quote-right text-h3 opacity-30"></i>
        </div>
        <div class="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nobis
          facere autem earum culpa excepturi vero, minima dolorum itaque
          molestiae accusamus! Non delectus aut vel quis neque quos earum at?
        </div>

        <div class="d-flex align-center justify-center ga-3 mt-5">
          <img
            src="https://i.pinimg.com/736x/eb/ac/4d/ebac4dee2b6fdb727609e5856cac049f.jpg"
            style="
              width: 48px;
              height: 48px;
              object-fit: cover;
              object-position: center;
              border-radius: 16em;
              display: block;
            "
          />
          <div style="line-height: 1">
            <div>Cheikhna DIALLO</div>
            <div class="text-h6">DG Scorpion</div>
          </div>
        </div>
      </div>

      <div class="border-t pa-5 position-relative w-100 d-flex justify-center">
        <ui-book-demo product="hr">
          <template #activator="{ props }">
            <v-btn v-bind="props" color="primary" variant="flat" class="mt-3">
              {{ $t("pages.form.createForm") }}
            </v-btn>
          </template>
        </ui-book-demo>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.pg-hr-index--hero {
  min-height: 552px;
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-direction: column;

  .back {
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    top: -80px;
    width: 100%;
    height: calc(100% + 80px);
    z-index: 0;

    background: rgb(var(--v-theme-on-background), 0.07);
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

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top right,
        rgba(var(--v-theme-background), 1) 40%,
        rgba(var(--v-theme-secondary), 0) 100%
      );
    }
  }

  .pg-form-home__title {
    font-size: 3.2rem;
    line-height: 1;

    @media (max-width: 812px) {
      font-size: 3rem;
    }

    @media (max-width: 662px) {
      font-size: 2rem;
    }
  }

  .u {
    position: relative;
    margin-top: 150px;
  }
}

.pg-hr-index--foot {
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
