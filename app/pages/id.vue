<script lang="ts" setup>
const { t, tm } = useI18n();
useSeoMeta({
  title: t("pages.id.index.meta.title"),
  description: t("pages.hidr.index.meta.description"),
});
</script>

<template>
  <div class="pg-id-index--hero">
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
              class="title font-weight-bold mt-16"
              v-html="$t('pages.id.index.hero.title')"
            ></h1>
            <p style="font-size: 18px; max-width: 90%" class="mt-3 pa-0">
              {{ $t("pages.id.index.hero.text") }}
            </p>

            <v-btn
              color="primary"
              variant="flat"
              class="mt-3"
              :to="$localePath({ name: 'contact' })"
            >
              {{ $t("words.contactUs") }}
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-container>
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
          {{ $t(`pages.id.index.why.title`) }}
        </h2>
      </div>
    </template>

    <v-col
      v-for="i in 4"
      :key="i"
      :aria-labelledby="`id-why-${i}`"
      cols="6"
      sm="6"
      md="3"
      class="frame"
      role="region"
    >
      <h3
        :id="`id-why-${i}`"
        class="pa-5 d-flex align-center h-100"
        style="
          text-wrap: balance;
          line-height: 1.1;
          background-color: rgba(var(--v-theme-surface), 0.4);
          font-weight: normal;
          text-wrap: pretty;
          hyphens: auto;
        "
      >
        {{ $t(`pages.id.index.why.items.${i - 1}.title`) }}
      </h3>
    </v-col>

    <template #append>
      <div class="pa-5">
        <h2
          id="about-title"
          class="text-h4 font-weight-bold my-3"
          style="line-height: 1; text-wrap: balance"
          v-html="$t('pages.id.index.operation.title')"
        ></h2>

        <div v-for="i in 4" :key="i">
          {{ i }}. {{ $t(`pages.id.index.operation.steps.${i - 1}`) }}
        </div>
      </div>
    </template>
  </ui-frame>

  <ui-frame
    role="region"
    class="mt-0"
    style="--ui-frame-border-color: rgba(var(--v-border-color), 1)"
  >
    <v-col
      v-for="i in 3"
      :key="i"
      cols="12"
      md="4"
      class="frame bg-secondary"
      role="region"
    >
      <h3
        class="pa-5 text-center w-100 border-b"
        style="
          text-wrap: balance;
          line-height: 1.1;
          font-weight: normal;
          text-wrap: pretty;
          hyphens: auto;
          text-align: center;
          border-bottom-style: dashed !important;
          background-color: rgba(var(--v-theme-surface), 0.05);
        "
      >
        {{ $t(`pages.id.index.guarantees.items.${i - 1}.title`) }}
      </h3>

      <p
        class="pa-5 text-center pb-5"
        v-html="$t(`pages.id.index.guarantees.items.${i - 1}.text`)"
      ></p>
    </v-col>

    <template #append>
      <div class="pa-5">
        <div v-for="i in 3" :key="i" class="d-flex align-center ga-2">
          <i class="fi fi-ss-check-circle"></i>
          {{ $t(`pages.id.index.is.items.${i - 1}`) }}
        </div>
      </div>
    </template>
  </ui-frame>

  <div class="pt-16"></div>
</template>

<style lang="scss" scoped>
.pg-id-index--hero {
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

  .title {
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
</style>
