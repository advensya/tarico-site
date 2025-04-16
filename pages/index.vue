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
  </v-app>
</template>

<style lang="scss">
.pg-home--section-one {
  // background: linear-gradient(
  //   165deg,
  //   rgba(var(--v-theme-secondary), 0.3) 0%,
  //   rgba(var(--v-theme-secondary), 0) 100%
  // );
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
  font-size: clamp(2rem, 8.2352941176vw, 3.8rem);
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
