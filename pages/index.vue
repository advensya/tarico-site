<script lang="ts" setup>
import cProducts from "~/components/index/products.vue";
</script>

<template>
  <v-app>
    <ui-header />

    <div
      style="
        position: absolute;
        top: 0;
        width: 100%;
        height: 100lvh;
        overflow: hidden;
      "
    >
      <ui-svg
        name="outer"
        class="position-absolute"
        style="
          top: 0;
          left: 50%;
          width: 100%;
          min-width: 80rem;
          height: 100lvh;
          transform: translate(-50%, 0) rotate(0) skewX(0) skewY(0) scaleX(1)
            scaleY(1);
        "
      />
    </div>

    <div class="pg-home--hero">
      <div class="pg-home--hero__back"></div>

      <v-container style="position: relative; width: calc(100% - 60px)">
        <v-row style="position: relative">
          <v-col cols="12" sm="6">
            <h1 class="pg-home__title font-weight-bold">
              {{ $t("pages.index.sections.one.title") }}
            </h1>
            <div style="font-size: 18px" class="mt-3">
              {{ $t("pages.index.sections.one.text") }}
            </div>
          </v-col>

          <v-col cols="12" sm="6">
            <img
              src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F13sMkHShda4XuIUmrXs1MY%2F46d34058d6976908d9dc0896c5b3c407%2Fpaper-airplane.png&w=640&q=75"
              style="max-width: 90%"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>

    <c-products />

    <div
      class="pg-home--section-three mb-16"
      style="position: relative; padding-top: 150px"
    >
      <div
        style="
          position: relative;
          height: 310px;
          background: linear-gradient(
            90deg,
            rgba(var(--v-theme-primary), 0.5) 0%,
            rgba(0, 212, 255, 0.26858665829613093) 100%
          );
        "
        class="rounded-xl"
      >
        <img src="/images/u_001.png" />
        <v-container
          v-if="$vuetify.display.mdAndUp"
          class="h-100 d-flex align-center position-relative"
        >
          <div>
            <div style="width: 90%; max-width: 442px; font-size: 18px">
              <div
                style="
                  display: -webkit-box;
                  -webkit-line-clamp: 4; /* Limite le texte à 5 lignes */
                  line-clamp: 4; /* Limite le texte à 5 lignes */
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  text-overflow: ellipsis;
                "
              >
                {{ $t("pages.index.sections.three.text") }}
              </div>
            </div>
            <v-btn
              color="black"
              variant="flat"
              size="x-large"
              class="mt-5"
              style="border-radius: 0.6em"
              :to="
                $localePath({
                  name: 'blog-slug',
                  params: {
                    slug: 'comment-tarico-révolutionne-l-expérience-utilisateur',
                  },
                })
              "
              rounded
            >
              <template #append>
                <i class="fi fi-rr-arrow-small-right"></i>
              </template>
              {{ $t("pages.index.sections.three.cta") }}
            </v-btn>
          </div>
        </v-container>
      </div>
      <v-container v-if="$vuetify.display.smAndDown">
        <div>
          <p style="font-size: 18px">
            {{ $t("pages.index.sections.three.text") }}
          </p>
          <v-btn
            color="black"
            variant="flat"
            size="x-large"
            class="mt-5"
            style="border-radius: 0.6em"
            rounded
            :to="
              $localePath({
                name: 'blog-slug',
                params: {
                  slug: 'comment-tarico-révolutionne-l-expérience-utilisateur',
                },
              })
            "
          >
            <template #append>
              <i class="fi fi-rr-arrow-small-right"></i>
            </template>
            {{ $t("pages.index.sections.three.cta") }}
          </v-btn>
        </div>
      </v-container>
    </div>

    <section class="py-16 pg-home--section-two">
      <v-container fluid>
        <div style="width: 90%" class="mx-auto">
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <div
                class="d-flex flex-column pa-10 h-100 rounded-lg"
                style="
                  background-color: rgba(var(--v-theme-on-background), 0.05);
                "
              >
                <div
                  class="d-flex align-center justify-center rounded-lg"
                  style="width: 64px; height: 64px"
                >
                  <ui-svg name="other/041" size="64" class="text-primary" />
                </div>
                <div class="font-weight-bold my-3 text-h4">
                  {{ $t("pages.index.sections.two.items.rethink.title") }}
                </div>

                <p class="mt-3 mt-auto" style="font-size: 18px">
                  {{ $t("pages.index.sections.two.items.rethink.text") }}
                </p>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <div
                class="d-flex flex-column pa-10 h-100 rounded-lg"
                style="
                  background-color: rgba(var(--v-theme-on-background), 0.05);
                "
              >
                <div
                  class="d-flex align-center justify-center rounded-lg"
                  style="width: 64px; height: 64px"
                >
                  <ui-svg name="rocket" size="64" class="text-primary" />
                </div>
                <div class="font-weight-bold my-3 text-h4">
                  {{ $t("pages.index.sections.two.items.innovate.title") }}
                </div>

                <p class="mt-3 mt-auto" style="font-size: 18px">
                  {{ $t("pages.index.sections.two.items.innovate.text") }}
                </p>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="4">
              <div
                class="d-flex flex-column pa-10 h-100 rounded-lg"
                style="
                  background-color: rgba(var(--v-theme-on-background), 0.05);
                "
              >
                <div
                  class="d-flex align-center justify-center rounded-lg"
                  style="width: 64px; height: 64px"
                >
                  <!-- <ui-svg name="other/022" size="32" class="text-white" /> -->
                  <!-- <ui-svg name="other/033" size="64" class="text-primary" /> -->
                  <ui-svg name="heart" size="64" class="text-primary" />
                </div>
                <div class="font-weight-bold my-3 text-h4">
                  {{ $t("pages.index.sections.two.items.reconcile.title") }}
                </div>

                <p class="mt-3 mt-auto" style="font-size: 18px">
                  {{ $t("pages.index.sections.two.items.reconcile.text") }}
                </p>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </section>
    <ui-footer />
  </v-app>
</template>

<style lang="scss">
.pg-home--hero {
  height: 100dvh;
  position: relative;
  // padding-top: 80px;
  display: flex;
  align-items: center;
  color: rgb(0, 0, 0);

  .pg-home--hero__back {
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    top: -80px;
    width: 100%;
    height: calc(100% + 80px);
    z-index: 0;

    background: linear-gradient(
      to bottom right,
      rgba(var(--v-theme-secondary), 0.1) 0%,
      rgba(var(--v-theme-secondary), 0) 100%
    );

    &::before {
      content: "";
      background-image: url("/images/grid.svg");
      position: absolute;
      inset: 0;
      background-position: center;
      background-size: cover;
      opacity: 0.02;
    }

    &::after {
      position: absolute;
      content: "";
      z-index: 1;
      inset: 0;
      background: linear-gradient(
        to bottom,
        rgba(var(--v-theme-background), 0.1) 0%,
        rgba(var(--v-theme-background), 0.1) 80%,
        rgba(var(--v-theme-background), 1) 100%
      );
    }

    svg {
      display: block;
      // position: absolute;
      inset: 0;
      opacity: 0.05;
    }
  }

  .pg-home__title {
    font-size: 6rem;
    line-height: 1;

    @media (max-width: 662px) {
      font-size: 4rem;
    }
  }
}

.pg-home--section-one {
  // min-height: calc(100lvh);
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
    // background: linear-gradient(
    //   165deg,
    //   rgba(var(--v-theme-secondary), 0.3) 0%,
    //   rgba(var(--v-theme-secondary), 0) 100%
    // );
    background: linear-gradient(
      to bottom right,
      rgba(var(--v-theme-secondary), 0.3) 0%,
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
    // background: linear-gradient(
    //   90deg,
    //   rgba(var(--v-theme-primary)),
    //   rgba(var(--v-theme-secondary))
    // );
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    // background-clip: text;
  }
}

.pg-home--section-three {
  width: 90%;
  margin: auto;

  img {
    height: calc(100% + 150px);
    max-width: calc(100% - 50px);
    position: absolute;
    bottom: 0;
    right: 150px;
    object-fit: contain;
    object-position: bottom center;

    @media (max-width: 992px) {
      right: 50%;
      transform: translateX(50%);
    }
  }
}
</style>
