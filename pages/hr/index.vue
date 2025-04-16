<template>
  <v-app>
    <ui-header>
      <template #brand>
        <nuxt-link
          v-if="!$slots.brand"
          class="d-flex align-center text-black overflow-hidden pa-1"
          :to="{ name: 'hr' }"
          style="
            width: max-content;
            display: flex;
            align-items: center;
            gap: 5px;
          "
        >
          <div
            class="bg- text-primary"
            style="
              width: 32px;
              height: 32px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 0.12em;
            "
          >
            <ui-svg name="logo" style="width: 100%" />
          </div>

          <div style="font-size: 26px">TARICO</div>
          <div style="font-weight: bold; font-size: 26px">HR</div>
        </nuxt-link>
      </template>

      <template #cta>
        <v-btn
          v-if="!$slots.cta"
          variant="flat"
          size="large"
          color="orange"
          rounded
        >
          <template #prepend>
            <i class="fi fi-rr-daily-calendar"></i>
          </template>
          Demander un démo
        </v-btn>
      </template>
    </ui-header>

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
