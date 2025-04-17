<template>
  <v-app>
    <ui-header />

    <div class="text-center pg-home--section-one" style="">
      <v-container style="max-width: 992px">
        <v-btn
          color="black"
          variant="flat"
          size="x-large"
          class="mb-5"
          rounded="pill"
          style="border-radius: 0.6em"
        >
          <template #prepend>
            <i class="fi fi-rr-comment-alt"></i>
          </template>
          call to actions
        </v-btn>
        <h1 class="pg-home__title font-weight-bold">
          {{ $t("pages.index.sections.one.title") }}
        </h1>
        <div style="font-size: 18px" class="mt-3">
          {{ $t("pages.index.sections.one.text") }}
        </div>
      </v-container>
    </div>

    <section class="pb-16 pg-home--section-two">
      <v-container fluid>
        <div style="width: 90%" class="mx-auto">
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <div
                class="b pa-10 h-100 rounded-lg"
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
                <div class="font-weight-bold mt-3 text-h4">
                  {{ $t("pages.index.sections.two.items.rethink.title") }}
                </div>

                <div class="mt-3 text-body-2">
                  {{ $t("pages.index.sections.two.items.rethink.text") }}
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <div
                class="b pa-10 h-100 rounded-lg"
                style="
                  background-color: rgba(var(--v-theme-on-background), 0.05);
                "
              >
                <div
                  class="d-flex align-center justify-center rounded-lg"
                  style="width: 64px; height: 64px"
                >
                  <i class="fi fi-sr-rocket-lunch text-h2 text-primary"></i>
                </div>
                <div class="font-weight-bold mt-3 text-h4">
                  {{ $t("pages.index.sections.two.items.innovate.title") }}
                </div>

                <div class="mt-3 text-body-2">
                  {{ $t("pages.index.sections.two.items.innovate.text") }}
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <div
                class="b pa-10 h-100 rounded-lg"
                style="
                  background-color: rgba(var(--v-theme-on-background), 0.05);
                "
              >
                <div
                  class="d-flex align-center justify-center rounded-lg"
                  style="width: 64px; height: 64px"
                >
                  <!-- <ui-svg name="other/022" size="32" class="text-white" /> -->
                  <ui-svg name="other/033" size="64" class="text-primary" />
                </div>
                <div class="font-weight-bold mt-3 text-h4">
                  {{ $t("pages.index.sections.two.items.reconcile.title") }}
                </div>

                <div class="mt-3 text-body-2">
                  {{ $t("pages.index.sections.two.items.reconcile.text") }}
                </div>
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
.pg-home--section-one {
  min-height: calc(100lvh);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

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
}

.pg-home__title {
  font-size: clamp(2rem, 8.2352941176vw, 4rem);
  line-height: 1.1;
  background: linear-gradient(
    90deg,
    rgba(var(--v-theme-primary)),
    rgba(var(--v-theme-secondary))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; /* pour Firefox */
}
</style>
