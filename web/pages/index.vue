<script lang="ts" setup>
const readMoreAboutTarico = ref(false);
</script>

<template>
  <ui-hero-two class="pg-index-hero" />

  <v-container class="my-0">
    <v-row class="pa-5" justify="start">
      <v-col cols="12" sm="8" order="1">
        <h2
          class="text-h4"
          style="line-height: 1; line-height: 1; font-weight: bold"
          v-html="$t('pages.index.about.title')"
        ></h2>
      </v-col>

      <v-col cols="12" order="2">
        <p style="max-width: 882px" v-html="$t('pages.index.about.text')"></p>
      </v-col>
    </v-row>
  </v-container>

  <ui-frame class="my-0">
    <template #prepend>
      <h2
        class="text-h4 pa-5"
        style="line-height: 1; line-height: 1; font-weight: bold"
        v-html="$t('pages.index.values.title')"
      ></h2>
    </template>
    <v-col v-for="i in 3" :key="i" cols="12" sm="6" md="4" class="frame">
      <h3
        class="text-h5 pa-5"
        style="background-color: rgba(var(--v-theme-surface), 0.3)"
        v-html="$t(`values.${i - 1}.title`)"
      ></h3>
      <div class="pa-5">
        <p class="mt-3" v-html="$t(`values.${i - 1}.text`)"></p>
      </div>
    </v-col>
  </ui-frame>

  <v-container class="mt-16">
    <v-row class="pa-5">
      <v-col cols="12" sm="4" order="0" order-sm="2">
        <div class="d-flex">
          <ui-svg name="engine" size="148" class="ml-sm-auto mr-5" />
        </div>
      </v-col>

      <v-col cols="12" sm="8" order="1">
        <h2
          style="
            line-height: 1;
            font-size: clamp(2rem, 3.2352941176vw, 4rem);
            line-height: 1;
            font-weight: bold;
          "
          v-html="$t('pages.index.products.title')"
        ></h2>
      </v-col>

      <v-col cols="12" order="2">
        <p
          class="mt-5"
          style="max-width: 882px"
          v-html="$t('pages.index.products.text')"
        ></p>

        <template v-if="readMoreAboutTarico">
          <div class="mt-10">
            <div class="d-flex flex-column ga-3">
              <!-- <ui-svg name="growth" size="48" /> -->
              <h3 class="text-h4 font-weight-bold" style="line-height: 1">
                Une suite logicielle pour <br />
                l’efficacité et la croissance
              </h3>
            </div>

            <p class="mt-5">
              Chaque solution Tarico est issue d'une écoute attentive des
              réalités du terrain, permettant de concevoir des outils
              opérationnels. Tarico offre une transformation digitale adaptée au
              contexte africain, en fournissant des outils conçus pour anticiper
              les besoins et soutenir une croissance durable.
            </p>
          </div>

          <div class="mt-10">
            <div class="d-flex flex-column ga-3">
              <!-- <ui-svg name="company-people" size="48" /> -->
              <h3 class="text-h4 font-weight-bold" style="line-height: 1">
                Flexibilité et adaptation <br />
                aux besoins uniques
              </h3>
            </div>

            <p class="mt-5">
              Les logiciels Tarico sont conçus pour s’adapter et évoluer avec
              vos outils existants. Cette flexibilité, associée à une volonté de
              simplifier, soutient la croissance des entreprises partenaires.
              <br />
              Tarico ne se limite pas à la vente de logiciels, mais établit des
              partenariats technologiques durables, avec un interlocuteur dédié
              et une équipe à l'écoute.
            </p>
          </div>

          <div class="mt-10">
            <div class="d-flex flex-column ga-3">
              <!-- <ui-svg name="helping-hang" size="48" /> -->
              <h3 class="text-h4 font-weight-bold" style="line-height: 1">
                Accompagnement client : <br />
                un facteur clé de succès
              </h3>
            </div>

            <h3
              class="text-h4 font-weight-bold"
              style="line-height: 1; max-width: 442px"
            ></h3>

            <p class="mt-5">
              Un support réactif et attentif est au cœur de Tarico. Une équipe
              compétente accompagne chaque client à chaque étape, garantissant
              des solutions concrètes et adaptées aux défis rencontrés.
            </p>
          </div>
        </template>

        <v-btn
          v-else
          color="dark"
          variant="text"
          class="border mt-3"
          size="small"
          @click="readMoreAboutTarico = true"
        >
          {{ $t("pages.index.products.readMore") }}

          <template #append>
            <i class="fi fi-rr-angle-small-down"></i>
          </template>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

  <ui-frame class="mt-0">
    <!-- <template #prepend>
      <div class="mb-5 text-center px-5">
        <h2 class="text-hh mx-auto" style="font-weight: normal">
          {{ $t("pages.index.products.title") }}
        </h2>

        <p class="mt-5 mx-auto" style="max-width: 762px">
          {{ $t("pages.index.products.text") }}
        </p>
      </div>
    </template> -->

    <v-col cols="12" class="frame">
      <v-row>
        <v-col cols="12" md="6">
          <div class="pa-5">
            <h3 class="text-h6" v-html="Products.hr.name"></h3>
            <p class="mt-2" v-html="$t(`products.hr.intro`)"></p>

            <p class="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              tempora ipsum facilis consequuntur minus omnis magni, nobis
              quaerat magnam ut, molestias, atque aut et accusamus enim nihil
              incidunt nemo architecto.
            </p>

            <div class="d-flex align-center ga-2 flex-wrap mt-5">
              <v-btn
                color="background"
                rounded="0"
                class="border"
                :block="$vuetify.display.smAndDown"
              >
                {{ $t("hero.one.cta") }}
              </v-btn>
              <v-btn
                color="primary"
                rounded="0"
                :block="$vuetify.display.smAndDown"
              >
                Demander un démo
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6"></v-col>
      </v-row>
    </v-col>
    <v-col
      cols="12"
      sm="6"
      md="3"
      v-for="code in ['id', 'onboarding', 'form', 'heavy']"
      :key="code"
      class="frame"
    >
      <div class="pa-5">
        <h3 class="text-h6" v-html="Products[code].name"></h3>
        <p class="mt-2" v-html="$t(`products.${code}.intro`)"></p>

        <nuxt-link
          :to="$localePath(Products[code].to)"
          variant="text"
          class="mt-5 text-primary d-block"
        >
          En savoir plus
        </nuxt-link>
      </div>
    </v-col>

    <template #append>
      <div class="pa-5 d-flex">
        <v-btn
          color="background"
          variant="flat"
          class="border"
          rounded="0"
          :to="$localePath({ name: 'products' })"
          :block="$vuetify.display.smAndDown"
        >
          <template #prepend>
            <i class="fi fi-rr-apps-add"></i>
          </template>
          {{ $t("pages.index.products.seeAll") }}
        </v-btn>
      </div>
    </template>
  </ui-frame>

  <ui-frame>
    <template #prepend>
      <div class="pa-5 position-relative">
        <ui-svg name="lamp-2" size="54" />
        <h2
          style="
            max-width: 662px;
            line-height: 1;
            font-size: clamp(2rem, 8.2352941176vw, 4rem);
            line-height: 1;
            font-weight: bold;
          "
          class="mt-2"
        >
          {{ $t(`pages.index.benefits.title`) }}
        </h2>
      </div>
    </template>
    <v-col v-for="i in 4" :key="i" cols="12" sm="6" class="frame">
      <div class="pa-5">
        <h3>
          {{ $t(`pages.index.benefits.list.${i - 1}.title`) }}
        </h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          ipsum enim, fuga illo cumque odit est, dolore sed quisquam voluptate
          nobis ab nisi soluta accusamus dolorum sunt, nihil rem ut.
        </p>
      </div>
    </v-col>
  </ui-frame>

  <v-container style="z-index: 1; position: relative" class="pb-16">
    <div class="d-flex justify-center align-center flex-column">
      <div class="d-flex align-center ga-2 flex-wrap mt-10">
        <v-btn
          color="background"
          rounded="0"
          class="border"
          :block="$vuetify.display.smAndDown"
          :to="$localePath({ name: 'contact' })"
        >
          {{ $t("words.contactUs") }}
        </v-btn>
        <v-btn
          color="background"
          rounded="0"
          class="border"
          :block="$vuetify.display.smAndDown"
        >
          {{ $t("words.assDemo") }}
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss">
.pg-index-hero {
  min-height: 662px;
}

.text-hh {
  font-size: 3.2rem;
  line-height: 1;
  max-width: 662px;

  @media (max-width: 812px) {
    font-size: 3rem;
  }

  @media (max-width: 662px) {
    font-size: 2rem;
  }
}
</style>
