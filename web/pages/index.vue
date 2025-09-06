<script lang="ts" setup>
const i18n = useI18n();

useSeoMeta({
  title: i18n.t("pages.index.meta.title"),
  description: i18n.t("pages.index.meta.description"),
});

useHead({ title: null });

const readMoreAboutTarico = ref(false);
</script>

<template>
  <ui-hero-one class="pg-index-hero" />

  <v-container class="my-0" aria-labelledby="about-title">
    <v-row class="pa-5" justify="start">
      <v-col cols="12" sm="8" order="1">
        <h2
          id="about-title"
          class="text-h4 font-weight-bold mb-4"
          style="line-height: 1; text-wrap: balance"
          v-html="$t('pages.index.about.title')"
        ></h2>
      </v-col>

      <v-col cols="12" order="2">
        <p
          style="max-width: 882px; text-wrap: pretty; hyphens: auto"
          v-html="$t('pages.index.about.text')"
        ></p>
      </v-col>
    </v-row>
  </v-container>

  <ui-frame class="my-0" role="region" aria-labelledby="values-title">
    <template #prepend>
      <h2
        id="values-title"
        class="text-h4 pa-5 font-weight-bold"
        style="line-height: 1; text-wrap: balance"
        v-html="$t('pages.index.values.title')"
      ></h2>
    </template>

    <v-col v-for="i in 3" :key="i" cols="12" sm="6" md="4" class="frame">
      <h3
        class="text-h5 pa-5"
        style="
          background-color: rgba(var(--v-theme-surface), 0.3);
          text-wrap: pretty;
        "
        v-html="$t(`values.${i - 1}.title`)"
        :id="`value-title-${i}`"
      ></h3>
      <div class="pa-5">
        <p
          class="mt-3"
          style="hyphens: auto; text-wrap: pretty"
          v-html="$t(`values.${i - 1}.text`)"
          :id="`value-text-${i}`"
          :aria-labelledby="`value-title-${i}`"
        ></p>
      </div>
    </v-col>
  </ui-frame>

  <v-container class="mt-16" aria-labelledby="products-title">
    <v-row class="pa-5">
      <v-col cols="12" sm="4" order="0" order-sm="2">
        <div class="d-flex">
          <ui-svg
            name="engine"
            size="148"
            class="ml-sm-auto mr-5"
            aria-hidden="true"
          />
        </div>
      </v-col>

      <v-col cols="12" sm="8" order="1">
        <h2
          id="products-title"
          class="font-weight-bold"
          style="
            line-height: 1;
            font-size: clamp(2rem, 3.2352941176vw, 4rem);
            text-wrap: balance;
          "
          v-html="$t('pages.index.products.title')"
        ></h2>
      </v-col>

      <v-col cols="12" order="2">
        <p
          class="mt-5"
          style="max-width: 882px; text-wrap: pretty; hyphens: auto"
          v-html="$t('pages.index.products.text')"
        ></p>

        <template v-if="readMoreAboutTarico">
          <div class="mt-10">
            <div class="d-flex flex-column ga-3">
              <!-- <ui-svg name="growth" size="48" /> -->
              <h3
                class="text-h4 font-weight-bold"
                style="line-height: 1; text-wrap: balance"
              >
                Une suite logicielle pour <br />
                l’efficacité et la croissance
              </h3>
            </div>

            <p class="mt-5" style="text-wrap: pretty; hyphens: auto">
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
              <h3
                class="text-h4 font-weight-bold"
                style="line-height: 1; text-wrap: balance"
              >
                Flexibilité et adaptation <br />
                aux besoins uniques
              </h3>
            </div>

            <p class="mt-5" style="text-wrap: pretty; hyphens: auto">
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
              <h3
                class="text-h4 font-weight-bold"
                style="line-height: 1; text-wrap: balance"
              >
                Accompagnement client : <br />
                un facteur clé de succès
              </h3>
            </div>

            <h3
              class="text-h4 font-weight-bold"
              style="line-height: 1; max-width: 442px; text-wrap: balance"
            ></h3>

            <p class="mt-5" style="text-wrap: pretty; hyphens: auto">
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
          :aria-expanded="false"
          aria-controls="products-title"
          aria-label="Afficher plus d’informations sur les produits Tarico"
        >
          {{ $t("pages.index.products.readMore") }}

          <template #append>
            <i class="fi fi-rr-angle-small-down" aria-hidden="true"></i>
          </template>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

  <ui-frame class="mt-0" role="region" aria-labelledby="products-main-title">
    <v-col cols="12" class="frame">
      <v-row>
        <v-col cols="12" md="6">
          <div class="pa-5">
            <h3
              id="products-main-title"
              class="text-h6 font-weight-bold"
              style="text-wrap: balance"
              v-html="Products.hr.name"
            ></h3>

            <!-- intro RH -->
            <p
              id="prod-intro-hr"
              class="mt-2"
              style="text-wrap: pretty; hyphens: auto"
              v-html="$t(`products.hr.intro`)"
            ></p>

            <p class="mt-5" style="text-wrap: pretty; hyphens: auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              tempora ipsum facilis consequuntur minus omnis magni, nobis
              quaerat magnam ut, molestias, atque aut et accusamus enim nihil
              incidunt nemo architecto.
            </p>

            <div
              class="d-flex align-center ga-2 flex-wrap mt-5"
              role="group"
              :aria-label="$t('hero.one.cta')"
              :aria-describedby="'prod-intro-hr'"
            >
              <v-btn
                color="background"
                rounded="0"
                class="border"
                :to="$localePath(Products.hr.to)"
                :aria-label="$t('hero.one.cta')"
              >
                {{ $t("hero.one.cta") }}
              </v-btn>

              <ui-book-demo product="hr" :aria-label="$t('hero.one.cta')" />
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
      role="region"
      :aria-labelledby="`prod-title-${code}`"
    >
      <div class="pa-5">
        <h3
          class="text-h6 font-weight-bold"
          style="text-wrap: balance"
          v-html="Products[code].name"
          :id="`prod-title-${code}`"
        ></h3>

        <!-- intro cartes -->
        <p
          :id="`prod-intro-${code}`"
          class="mt-2"
          style="text-wrap: pretty; hyphens: auto"
          v-html="$t(`products.${code}.intro`)"
        ></p>

        <nuxt-link
          :to="$localePath(Products[code].to)"
          prefetch
          variant="text"
          class="mt-5 text-primary d-block"
          :title="`${Products[code].namePlain} — ${$t('words.readMore')}`"
          :aria-label="$t('words.readMore')"
          :aria-describedby="`prod-intro-${code}`"
        >
          {{ $t("words.readMore") }}
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
          :aria-label="$t('pages.index.products.seeAll')"
        >
          <template #prepend>
            <i class="fi fi-rr-apps-add" aria-hidden="true"></i>
          </template>
          {{ $t("pages.index.products.seeAll") }}
        </v-btn>
      </div>
    </template>
  </ui-frame>

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

  <v-container
    style="z-index: 1; position: relative"
    class="pb-16"
    role="region"
    :aria-label="`${$t('words.contactUs')} / ${$t('words.bookDemo')}`"
  >
    <div class="d-flex justify-center align-center flex-column">
      <div
        class="d-flex align-center ga-2 flex-wrap mt-10"
        role="group"
        :aria-label="`${$t('words.contactUs')} + ${$t('words.bookDemo')}`"
      >
        <v-btn
          color="background"
          rounded="0"
          class="border"
          :to="$localePath({ name: 'contact' })"
          prefetch
          :aria-label="$t('words.contactUs')"
          data-gtm="cta_contact"
        >
          {{ $t("words.contactUs") }}
        </v-btn>

        <ui-book-demo>
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              color="background"
              rounded="0"
              class="border"
              :aria-label="$t('words.bookDemo')"
              data-gtm="cta_book_demo"
            >
              {{ $t("words.bookDemo") }}
            </v-btn>
          </template>
        </ui-book-demo>
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
