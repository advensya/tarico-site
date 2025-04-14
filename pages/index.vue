<template>
  <v-app>
    <ui-header />

    <div class="text-center pg-home--section-one" style="">
      <v-container>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <div style="font-size: 18px" class="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          necessitatibus minima blanditiis labore dolores velit accusantium
          nulla dignissimos ratione reprehenderit ullam quia consequuntur
          pariatur sunt ducimus, voluptas officiis nihil. Ea.
        </div>
      </v-container>
    </div>
  </v-app>
</template>

<style lang="scss">
.pg-home--section-one {
  //   background: linear-gradient(
  //     165deg,
  //     rgba(var(--v-theme-secondary), 0.3) 0%,
  //     rgba(var(--v-theme-secondary), 0) 100%
  //   );
  min-height: calc(100lvh);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
