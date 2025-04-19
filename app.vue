<script lang="ts" setup>
const hideOffer = ref(false);
</script>

<template>
  <v-toolbar v-if="!hideOffer" color="primary" height="unset">
    <!-- style="background: linear-gradient(-135deg, #fab2ff 10%, #1904e5 100%)" -->

    <!-- <div class="w-100">
      <div
        style="position: absolute; top: 0; right: 0"
        class="pa-2 d-flex justify-end"
      >
        <v-btn
          @click="hideOffer = true"
          color="light"
          variant="text"
          class="ml-auto"
          size="24"
          icon
        >
          <i class="fi fi-rr-cross-small"></i>
        </v-btn>
      </div>
      <v-container class="py-5">
        <div class="d-flex flex-wrap align-center ga-5 justify-sm-space-around">
          <div style="line-height: 1" class="mr-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            nobis
          </div>

          <v-btn color="orange" variant="flat" rounded>
            Profiter de l'offre
            <template #append>
              <i class="fi fi-rr-arrow-small-right"></i>
            </template>
          </v-btn>
        </div>
      </v-container>
    </div> -->
  </v-toolbar>
  <nuxt-page />
</template>
