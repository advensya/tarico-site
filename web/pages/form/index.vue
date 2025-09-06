<script lang="ts" setup>
// import HomeCategory from "~/components/home-category.vue";
const i18n = useI18n();

useHead({
  templateParams: {
    siteDescription: i18n.t("form.site.description"),
    siteName: "Tarico FORM",
  },
});

const localePath = useLocalePath();

// const functionalitys = i18n.tm<any>("functionalitys") as any;
const currentPlan = ref("Déclic");
const functionalitys = {
  title: "Une palette d'offres et de d'outils chez Tarico",
  description:
    "A travers un seul outil qui centralise les process, Tarico vous permet d'acceder à tout ceci:",
  items: [
    {
      icon: "fi fi-sr-website-design text-h4",
      title: "Formulaire personnalisable",
      description:
        "Créez des formulaires sur mesure qui répondent à vos exigences spécifiques, garantissant flexibilité et efficacité dans la gestion de vos projets ou tâches.",
    },
    {
      icon: "fi fi-sr-users-alt text-h4",
      title: "Accès multi-utilisateurs",
      description:
        "Favorisez la collaboration avec un accès multi-utilisateurs sécurisé, en contrôlant les permissions et droits d'accès de chaque membre de l’équipe.",
    },
    {
      soon: false,
      icon: "fi fi-sr-data-model text-h4",
      title: "Intégration des Logiciels Tiers",
      description:
        "Connectez facilement vos outils existants tels que la comptabilité, les ressources humaines ou les CRM, afin de centraliser les flux de travail et les données.",
    },
    {
      icon: "fi fi-sr-analytics text-h4",
      title: "Tableau de Bord Analytique",
      description:
        "Suivez vos performances en temps réel grâce à des tableaux de bord interactifs, offrant une vue claire pour prendre des décisions basées sur des données fiables.",
    },
  ],
};

const yearly = ref(true);

const plans = ref({
  FREE: {
    title: "Free",
    price: 0,
    ideal: false,
    features: ["16", "17", "18", "19", "20", "05", "21", "07", "22"],
  },
  DECLIC: {
    title: "Déclic",
    price: 1100,
    ideal: true,
    features: ["23", "24", "25", "19", "20", "05", "21", "07", "22"],
  },
  PREMIUM: {
    title: "Premium",
    price: 1500,
    ideal: false,
    features: ["26", "02", "27", "28", "29", "30", "31", "32", "22", "33"],
  },
  ENTERPRISE: {
    title: "Entreprise",
    price: "$sale",
    ideal: false,
    features: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
    ],
  },
});

const tiers = {
  webhook: {
    title: "Webhooks",
    text: "Envoyez les événements de nouvelles soumissions vers des points de terminaison HTTP",
  },
  "google-drive": {
    title: "Google Drive",
    text: "Ajoutez les soumissions à une feuille Google",
  },
  airtable: {
    title: "Airtable",
    text: "Ajoutez les soumissions directement dans Airtable",
  },
  notion: {
    title: "Notion",
    text: "Enregistrez les soumissions dans Notion",
  },
  "google-sheets": {
    title: "Google Sheets",
    text: "Enregistrez les soumissions directement dans Google Sheets",
  },
  slack: {
    title: "Slack",
    text: "Recevez une notification Slack pour chaque nouvelle soumission",
  },
};
</script>

<template>
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

  <div class="pg-form-home--hero">
    <div class="pg-form-home--hero__back"></div>

    <v-container style="position: relative">
      <div class="pa-5">
        <v-row style="position: relative" justify="start">
          <v-col cols="12" md="8">
            <div class="text-">
              <v-chip
                color="secondary"
                variant="flat"
                size="small"
                rounded="0"
                class="mb-3"
              >
                {{ $t("pages.form.home.wedo") }}
              </v-chip>
            </div>
            <h1
              class="pg-form-home__title font-weight-bold"
              v-html="$t('pages.form.home.title')"
            ></h1>
            <p style="font-size: 18px; max-width: 90%" class="mt-3 pa-0">
              {{ $t("pages.form.home.subtitle") }}
            </p>

            <v-btn
              href="https://form.tarico.space"
              color="primary"
              variant="flat"
              class="mt-3"
            >
              {{ $t("pages.form.createForm") }}

              <template #prepend>
                <i class="fi fi-sr-plus"></i>
              </template>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>

  <ui-frame
    class="my-0"
    style="--ui-frame-border-color: rgba(var(--v-border-color), 1)"
  >
    <v-col
      v-for="(functionality, f) in functionalitys.items"
      :key="f"
      cols="12"
      md="4"
      sm="6"
      lg="3"
      class="frame"
    >
      <div class="pa-5 position-relative h-100 bg-secondary">
        <i :class="functionality.icon"></i>
        <div
          class="font-weight-bold mt-5 mb-3"
          style="font-size: 22px; line-height: 1"
        >
          {{ functionality.title }}
        </div>
        <div>
          {{ functionality.description }}
        </div>
      </div>
    </v-col>
  </ui-frame>

  <ui-frame>
    <template #prepend>
      <p class="pa-5" style="max-width: 440px; width: 90%">
        {{ $t("pages.form.tiers.text") }}
      </p>
    </template>
    <v-col
      cols="12"
      md="4"
      sm="6"
      v-for="(tier, t) in tiers"
      :key="t"
      class="pa-2 frame"
    >
      <div class="pa-3">
        <div>
          <ui-svg :name="`tiers/${t}`" size="36" class="notfill" />
        </div>
        <div>
          <div class="font-weight-bold">
            {{ tier.title }}
          </div>
          <p>
            {{ tier.text }}
          </p>
        </div>
      </div>
    </v-col>

    <template #append>
      <div class="pa-5">
        <v-btn
          href="https://form.tarico.space"
          color="primary"
          variant="flat"
          class="mt-3"
        >
          {{ $t("pages.form.createForm") }}

          <template #prepend>
            <i class="fi fi-sr-plus"></i>
          </template>
        </v-btn>
      </div>
    </template>
  </ui-frame>

  <ui-frame class="my-0">
    <template #prepend>
      <div class="pa-5 d-flex align-center ga-2">
        <div class="text-h3 font-weight-bold">
          {{ $t("pages.form.plan.title") }}
        </div>

        <v-spacer />

        <div
          style="
            line-height: 1.1;
            max-width: 200px;
            text-align: right;
            font-size: 90%;
          "
        >
          {{ $t("pages.form.plan.safe.tosafe") }}
        </div>
        <v-switch v-model="yearly" color="success" hide-details inset>
        </v-switch>
      </div>
    </template>

    <v-col
      v-for="(plan, p) in plans"
      :key="p"
      cols="12"
      sm="6"
      md="3"
      class="frame"
    >
      <div
        class="px-5 py-3 d-flex align-center ga-2"
        style="background-color: rgba(var(--v-theme-surface), 0.4)"
      >
        <h3 class="text-h6 lh-1">
          {{ $t(`products.form.plans.${p}.title`) }}
        </h3>
      </div>

      <div class="pa-5">
        <div
          v-if="typeof plan.price === 'number'"
          class="d-flex ga-1 align-center mb-5"
        >
          <div class="text-h4">
            {{ plan.price * (yearly ? 0.8 : 1) }}
          </div>
          <div
            style="line-height: 1; font-size: 12px"
            v-html="$t('pages.form.plan.priceFequency')"
          ></div>
        </div>

        <p class="mb-3" v-html="$t(`products.form.plans.${p}.description`)"></p>

        <v-btn
          variant="flat"
          color="dark"
          :href="p !== 'ENTERPRISE' ? 'https://form.tarico.space' : undefined"
        >
          <div style="white-space: normal; font-size: 14px">
            {{
              $t(
                `pages.form.plan.btn.${p !== "ENTERPRISE" ? "start" : "contactUs"}`
              )
            }}
          </div>
        </v-btn>

        <div class="mt-8">
          <div
            v-for="(feature, o) in plan.features"
            :key="o"
            class="d-flex align-center ga-3 mb-2"
          >
            <i class="fi fi-ss-check-circle"></i>
            {{ $t(`products.form.plans.features.${feature}`) }}
          </div>
        </div>
      </div>
    </v-col>
  </ui-frame>

  <div class="py-16">
    <v-container style="position: relative">
      <v-row style="position: relative">
        <v-col cols="12">
          <div class="text-center">
            <ui-svg name="logo-v2" size="180" class="text-surface" />
          </div>
          <h2
            class="text-center mx-auto mt-2 text-h4"
            style="max-width: 552px; line-height: 1; font-weight: normal"
            v-html="$t('pages.form.home.foot.title')"
          ></h2>

          <div class="mt-5 text-center">
            <v-btn
              href="https://form.tarico.space"
              color="primary"
              variant="flat"
            >
              {{ $t("pages.form.createForm") }}

              <template #prepend>
                <i class="fi fi-sr-plus"></i>
              </template>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.pg-form-home--hero {
  // height: calc(100dvh - 80px);
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  align-items: center;

  .pg-form-home--hero__back {
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
      opacity: 0.06;
    }

    svg {
      display: block;
      // position: absolute;
      inset: 0;
      opacity: 0.05;
    }
  }

  .pg-form-home__title {
    font-size: 3.2rem;
    line-height: 1;

    @media (max-width: 812px) {
      font-size: 3rem;
    }

    @media (max-width: 662px) {
      font-size: 2rem;
    }
  }
}
</style>
