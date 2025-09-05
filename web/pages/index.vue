<script lang="ts" setup>
const readMoreAboutTarico = ref(false);
</script>

<template>
  <ui-hero-two class="pg-index-hero" />

  <v-container class="mt-0">
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
            font-size: clamp(2rem, 8.2352941176vw, 4rem);
            line-height: 1;
            font-weight: bold;
          "
          v-html="$t('pages.index.about.title')"
        ></h2>
      </v-col>

      <v-col cols="12" order="2">
        <p
          class="mt-5"
          style="max-width: 882px"
          v-html="$t('pages.index.about.text')"
        ></p>

        <template v-if="readMoreAboutTarico">
          <div class="mt-10">
            <div class="d-flex ga-3">
              <ui-svg name="lamp-2" size="48" />
              <h3 class="text-h4 font-weight-bold" style="line-height: 1">
                Des solutions logicielles <br />
                vraiment utiles
              </h3>
            </div>

            <p class="mt-5">
              Tout est parti d’un constat simple : les outils numériques censés
              simplifier la vie des entreprises sont souvent complexes, rigides,
              et déconnectés de leurs besoins réels. Chez Tarico, nous avons
              voulu changer la donne. Nous avons créé une entreprise à taille
              humaine, avec une vision claire : proposer des logiciels utiles,
              faciles à prendre en main, et centrés sur l'utilisateur.
            </p>
            <p class="mt-5">
              Notre première mission fut de réinventer le formulaire en ligne —
              un outil quotidien, mais trop souvent sous-estimé. Forts de ce
              succès, nous avons élargi notre champ d’action pour répondre à
              d’autres besoins cruciaux de l’entreprise moderne, toujours avec
              la même philosophie :
              <b>Repenser</b>, <b>innover</b>, <b>rapprocher</b>.
            </p>
          </div>

          <div class="mt-10">
            <div class="d-flex ga-3">
              <i class="fi fi-sr-building-user text-h4 mt-1"></i>
              <h3 class="text-h4 font-weight-bold" style="line-height: 1">
                Parce que nous comprenons que <br />
                chaque entreprise est unique
              </h3>
            </div>

            <p class="mt-5">
              Nos solutions sont conçues pour s’adapter, évoluer et se connecter
              à vos outils existants. Notre force, c’est la flexibilité, notre
              moteur, c’est l’ambition de vous simplifier la vie.
            </p>
            <p class="mt-5">
              Nous ne vendons pas des logiciels. Nous bâtissons des partenariats
              technologiques. Avec Tarico, vous avez un interlocuteur réactif,
              une équipe qui écoute et qui évolue avec vous.
            </p>
          </div>

          <div class="mt-10">
            <div class="d-flex ga-3">
              <ui-svg name="other/028" size="48" />
              <h3 class="text-h4 font-weight-bold" style="line-height: 1">
                Un accompagnement qui <br />
                fait toute la différence
              </h3>
            </div>

            <h3
              class="text-h4 font-weight-bold"
              style="line-height: 1; max-width: 442px"
            ></h3>

            <p class="mt-5">
              Nous plaçons l’accompagnement client au cœur de notre démarche.
              Notre
              <strong
                >support est ultra-réactif, disponible et réellement à l’écoute
                de vos besoins</strong
              >. Vous n’êtes jamais seuls : une équipe humaine, compétente et
              impliquée vous accompagne à chaque étape. Nous répondons vite,
              nous comprenons vos enjeux, et nous trouvons des solutions
              concrètes.
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
          {{ $t("pages.index.about.readMore") }}

          <template #append>
            <i class="fi fi-rr-angle-small-down"></i>
          </template>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

  <ui-frame>
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
        <ui-svg name="growth" size="54" />
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
      <!-- <ui-svg name="logo-v2" size="192" class="text-surface" /> -->

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
