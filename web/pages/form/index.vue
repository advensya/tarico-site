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
    btn: { text: "start", to: "https://form.tarico.space" },
    description:
      "Idéal pour les petites équipes ou projets ponctuels. L'essentiel pour créer, publier et suivre vos formulaires <b class='text-primary'>sans frais et sans engagement</b>.",

    features: [
      "1 admin",
      "500 soumissions/mois",
      "1GB de stockage",
      "Branding de base",
      "Modèles de formulaires standards",
      "Templates disponibles",
      "Statistiques basiques",
      "Support instantané",
      "Mises à jour incluses",
    ],
  },
  DECLIC: {
    title: "Déclic",
    price: 1100,
    ideal: true,
    btn: { text: "start", to: "https://form.tarico.space" },
    description:
      "La solution idéale pour débuter et gagner du temps sur vos processus. Simplifiez la gestion de vos formulaires sans effort.",
    features: [
      "2 admin",
      "10 000 soumissions/mois",
      "5GB de stockage",
      "Branding de base",
      "Modèles de formulaires standards",
      "Templates disponibles",
      "Statistiques basiques",
      "Support instantané",
      "Mises à jour incluses",
    ],
  },
  PREMIUM: {
    title: "Premium",
    price: 1500,
    ideal: false,
    btn: { text: "start", to: "https://form.tarico.space" },
    description:
      "L’offre avancée pour optimiser votre activité. Accédez à des fonctionnalités étendues pour un gain de temps et une gestion améliorée.",
    features: [
      "15 admin",
      "Soumissions illimitées",
      "100GB de stockage",
      "Branding personnalisé",
      "Modèles de formulaires avancés",
      "Templates premium disponibles",
      "Statistiques détaillées avec analyses",
      "Support instantané avec accès prioritaire",
      "Mises à jour incluses",
      "Notification après chaque soumission",
    ],
  },
  ENTERPRISE: {
    title: "Entreprise",
    price: "$sale",
    ideal: false,
    btn: {
      text: "contactSales",
      to: localePath({ name: "contact", query: { for: "tarico-form:demo" } }),
    },
    description:
      "La solution complète pour les entreprises ambitieuses. Accédez à des services illimités et à un support dédié pour maximiser votre efficacité.",
    features: [
      "Formulaires illimités",
      "Soumissions illimitées",
      "Intégrations personnalisées",
      "Automatisation avancée",
      "Templates disponibles",
      "Sécurité renforcée",
      "Support instantané",
      "Flux de travail personnalisés",
      "Formation dédiée pour l'équipe",
      "Support personnalisé et gestion de projet",
      "Ressources pour optimiser l'utilisation",
      "Design de formulaires sur mesure",
      "Personnalisation de l'apparence des formulaires",
      "Conseil stratégique",
      "Audits de sécurité",
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

    <v-container style="position: relative; width: calc(100% - 60px)">
      <v-row style="position: relative">
        <v-col cols="12" md="6">
          <div class="text-">
            <v-chip
              color="secondary"
              variant="flat"
              size="small"
              rounded="xl"
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
        </v-col>
        <v-col cols="12" md="6">
          <div class="mt-4 text-md-right">
            <v-btn
              href="https://form.tarico.space"
              color="primary"
              size="large"
              variant="flat"
            >
              {{ $t("pages.form.createForm") }}

              <template #prepend>
                <i class="fi fi-sr-plus"></i>
              </template>
            </v-btn>
            <div style="line-height: 1" class="mt-2">
              <!-- <div class="mt-1 text-h6">
                {{ $t("pages.form.realyFree") }}
              </div> -->
              <div class="mt-">
                {{ $t("pages.form.noIdNeed") }}
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <v-container class="mb-16">
    <v-row>
      <v-col
        cols="12"
        md="4"
        sm="6"
        lg="3"
        v-for="(functionality, f) in functionalitys.items"
        :key="f"
      >
        <div
          class="pa-5 position-relative bg-yellow h-100"
          style="
            background: rgb(255, 232, 0);
            background: linear-gradient(
              193deg,
              rgba(255, 232, 0, 1) 0%,
              rgba(255, 138, 34, 1) 100%
            );
          "
        >
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
    </v-row>
  </v-container>

  <div class="mb-16">
    <div style="" class="pt-10 pb-10">
      <p
        class="mx-auto mt-5"
        style="max-width: 400px; width: 90%; text-align: center"
      >
        {{ $t("pages.form.tiers.text") }}
      </p>
    </div>

    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
          sm="6"
          v-for="(tier, t) in tiers"
          :key="t"
          class="pa-2"
        >
          <div
            class="pa-3"
            style="display: flex; align-items: flex-start; gap: 15px"
          >
            <div>
              <ui-svg :name="`tiers/${t}`" size="42" class="notfill" />
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
      </v-row>
    </v-container>
  </div>

  <div class="pg-form-home--price">
    <div class="text-h2 text-center font-weight-bold mb-5">Plans & pricing</div>

    <div class="d-flex justify-center flex-column align-center mb-5">
      <v-switch v-model="yearly" color="success" hide-details inset>
        <template #label> Annuel </template>
      </v-switch>

      <div>
        <v-chip color="success"
          >{{ $t("pages.form.plan.safe.tosafe") }} 20 %</v-chip
        >
        {{ $t("pages.form.plan.safe.sub") }}
      </div>
    </div>

    <div class="d-flex align-center">
      <v-tabs
        v-if="$vuetify.display.smAndDown"
        v-model="currentPlan"
        align-tabs="center"
        class="bg-success mx-auto w-100"
      >
        <v-tab v-for="(plan, p) in plans" :key="p" :value="plan.title">
          {{ plan.title }}
        </v-tab>
      </v-tabs>
      <div></div>
    </div>

    <div
      class="d-flex justify-center ga-3 mx-auto"
      :style="{ maxWidth: $vuetify.display.smAndDown ? '100%' : '90%' }"
    >
      <div
        v-for="(plan, p) in plans"
        v-show="$vuetify.display.mdAndUp || currentPlan === plan.title"
        :key="p"
        style="width: 300px"
        class="pa-7 rounded-lg price"
        :class="{
          ideal: plan.ideal,
          'w-100 rounded-0': $vuetify.display.smAndDown,
        }"
      >
        <h2>{{ plan.title }}</h2>

        <div
          v-if="typeof plan.price === 'number'"
          class="d-flex ga-1 align-center my-5"
        >
          <div class="text-h4">
            {{ plan.price * (yearly ? 0.8 : 1) }}
          </div>
          <div style="line-height: 1; font-size: 12px">
            XOF<br />
            par mois et par formulaire
          </div>
        </div>

        <p class="mb-3" v-html="plan.description"></p>

        <v-btn
          :color="plan.ideal ? 'primary' : 'dark'"
          variant="flat"
          size="x-large"
          class="my-10"
          :href="plan.btn.to"
          block
        >
          <div style="white-space: normal; font-size: 14px">
            {{ $t(`pages.form.plan.btn.${plan.btn.text}`) }}
          </div>
        </v-btn>

        <div class="mt-5"></div>
        <div>
          <div
            v-for="(option, o) in plan.features"
            :key="o"
            class="d-flex align-center ga-3 mb-2"
          >
            <i class="fi fi-sr-shield-trust text-primary"></i>
            {{ option }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="pg-form-home--foot">
    <div class="pg-form-home--foot__back"></div>

    <v-container style="position: relative; width: calc(100% - 60px)">
      <v-row style="position: relative">
        <v-col cols="12">
          <div class="text-center">
            <ui-svg name="logo" size="54" class="text-primary" />
          </div>
          <h2
            class="text-center mx-auto mt-2"
            style="
              font-size: 48px;
              max-width: 552px;
              line-height: 1;
              font-weight: normal;
            "
          >
            {{ $t("pages.form.home.foot.title") }}
          </h2>

          <div class="mt-10 text-center">
            <v-btn
              href="https://form.tarico.space"
              color="dark"
              size="x-large"
              variant="flat"
            >
              {{ $t("pages.form.createForm") }}

              <template #prepend>
                <i class="fi fi-sr-plus"></i>
              </template>
            </v-btn>
            <div class="text-center mt-1">
              {{ $t("pages.form.noIdNeed") }}
            </div>
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
  color: rgb(0, 0, 0);

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
      opacity: 0.02;
    }

    &::after {
      position: absolute;
      content: "";
      z-index: 1;
      inset: 0;
      background: linear-gradient(
        to bottom,
        rgba(var(--v-theme-background), 0.1) 0%,
        rgba(var(--v-theme-background), 0.1) 80%,
        rgba(var(--v-theme-background), 1) 100%
      );
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

.pg-form-home--price {
  .price {
    position: relative;

    &::before {
      position: absolute;
      content: "";
      inset: 0;
      background: linear-gradient(
        to bottom,
        rgba(var(--v-theme-primary), 0.1) 0%,
        rgba(var(--v-theme-background), 0) 80%,
        rgba(var(--v-theme-background), 0) 100%
      );
    }

    > * {
      position: relative;
    }

    &.ideal {
      &::before {
        background: linear-gradient(
          to bottom,
          rgba(255, 153, 0, 0.678) 0%,
          rgba(var(--v-theme-background), 0) 80%,
          rgba(var(--v-theme-background), 0) 100%
        );
      }
    }
  }
}

.pg-form-home--foot {
  padding-top: 250px;
  padding-bottom: 100px;
  position: relative;
  // padding-top: 80px;
  display: flex;
  align-items: center;
  color: rgb(0, 0, 0);
  background-color: rgba(var(--v-theme-background), 1);

  .pg-form-home--foot__back {
    overflow: hidden;
    position: absolute;
    inset: 0;
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
      opacity: 0.01;
      display: none;
    }

    &::after {
      position: absolute;
      content: "";
      z-index: 1;
      inset: 0;
      background: linear-gradient(
        to top,
        rgba(var(--v-theme-primary), 0.1) 0%,
        rgba(var(--v-theme-primary), 0.1) 50%,
        rgba(var(--v-theme-background), 1) 100%
      );
    }

    svg {
      display: block;
      // position: absolute;
      inset: 0;
      opacity: 0.05;
    }
  }

  .pg-form-home__title {
    font-size: 5rem;
    line-height: 1;

    @media (max-width: 1100px) {
      font-size: 4rem;
    }

    @media (max-width: 812px) {
      font-size: 3rem;
    }

    @media (max-width: 662px) {
      font-size: 2rem;
    }
  }
}
</style>
