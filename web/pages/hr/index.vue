<template>
  <div style="min-height: 100dvh; padding-top: 80px">
    <v-container>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quia culpa
      similique! Optio pariatur dolores, amet accusantium repudiandae expedita
      excepturi velit architecto nihil assumenda neque cumque, iste praesentium
      nobis. Maxime?
    </v-container>
  </div>

  <ui-frame role="region" aria-labelledby="benefits-title">
    <template #prepend>
      <div class="pa-5 position-relative">
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
          {{ $t(`pages.index.benefits.title`) }}
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
          {{ $t(`pages.index.benefits.list.${i - 1}.title`) }}
        </h3>

        <p class="mt-2" style="text-wrap: pretty; hyphens: auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          ipsum enim, fuga illo cumque odit est, dolore sed quisquam voluptate
          nobis ab nisi soluta accusamus dolorum sunt, nihil rem ut.
        </p>
      </div>
    </v-col>
  </ui-frame>
</template>
