<script lang="ts" setup>
defineI18nRoute({
  paths: {
    en: "/company",
    fr: "/entreprise",
  },
});

const i18n = useI18n();

useHead({
  templateParams: {
    siteDescription: i18n.t("pages.company.meta.description"),
    siteName: "Codia",
  },
});
</script>

<template>
  <div class="header position-relative">
    <div class="back"></div>

    <v-container class="position-relative">
      <div
        class="d-flex align-center toverflow-hidden pa-1 mb-5 mt-16"
        :to="$localePath({ name: 'index' })"
        style="width: max-content; display: flex; align-items: center; gap: 5px"
      >
        <img src="/logo/codia.png" alt="codia logo" width="42" />

        <div class="text-light ml-2" style="font-weight: bold; font-size: 26px">
          Codia
        </div>
      </div>

      <h1
        style="
          font-size: clamp(2rem, 8.2352941176vw, 4.8rem);
          line-height: 1.1;
          font-weight: bold;
        "
      >
        {{ $t("pages.company.header.title") }}
      </h1>
      <p class="mt-3" style="max-width: 700px">
        {{ $t("pages.company.header.description") }}
      </p>

      <!-- <div class="d-flex align-center flex-wrap ga-2 mt-10">
          <v-btn
            color="primary"
            size="large"
            rounded
            :to="$localePath({ name: 'contact' })"
          >
            <template #prepend>
              <ui-svg name="phone" size="20" />
            </template>
            {{ $t("pages.company.contactUs") }}
          </v-btn>
        </div> -->
    </v-container>
  </div>

  <section class="py-16" id="company">
    <v-container>
      <v-row justify="center">
        <v-col cols="10">
          <div class="">
            <p v-html="$t('pages.company.summary.text')"></p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <ui-about class="position-relative" />
</template>

<style lang="scss" scoped>
.header {
  margin: auto;
  margin-bottom: 50px;
  height: 70lvh;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  .back {
    overflow: hidden;
    position: absolute;
    inset: 0;
    z-index: 0;

    background: rgb(var(--v-theme-secondary), 0.4);
    -webkit-mask: url("/images/grid.svg") center/cover no-repeat;
    mask: url("/images/grid.svg") center/cover no-repeat;
  }

  // &.blue {
  //   background: linear-gradient(
  //     180deg,
  //     rgba(73, 99, 227, 0.298) 0%,
  //     rgba(252, 151, 69, 0) 100%
  //   );
  // }

  .container {
    width: 80%;
    max-width: 772px;
    margin: auto;
    position: relative;
    z-index: 1;

    .desc {
      font-size: 48px;
      line-height: 1.25;
      position: relative;
      margin: auto;

      span {
        background-color: rgb(0, 0, 0);
        color: rgb(255, 255, 255);
      }
    }
  }

  .more-btn {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 36px;
    text-decoration: none;
    color: #000;
    transition: all 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;

    &:hover {
      bottom: 15px;
    }
  }

  @media (max-width: 570px) {
    .container {
      max-width: 280px;

      .desc {
        font-size: 28px;
      }
    }
  }
}

#company {
  p {
    font-size: 24px;

    @media (max-width: 662px) {
      font-size: 18px;
    }
  }
}
</style>
