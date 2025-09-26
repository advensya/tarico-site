<script lang="ts" setup>
const localePath = useLocalePath();
const emit = defineEmits<{ (e: "select", value: string): void }>();

const yearly = ref(true);
const currentPlan = ref("Déclic");
const plans = ref({
  FREE: {
    title: "Free",
    price: 0,
    ideal: false,
    btn: {
      text: "bookDemo.title",
      props: { onClick: () => emit("select", "Free") },
    },
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
    ideal: false,
    btn: {
      text: "bookDemo.title",
      props: { onClick: () => emit("select", "Free") },
    },
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
    btn: {
      text: "bookDemo.title",
      props: { onClick: () => emit("select", "Free") },
    },
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
      text: "bookDemo.title",
      props: { onClick: () => emit("select", "Free") },
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
</script>

<template>
  <v-container>
    <div class="hr-plan">
      <div
        class="mx-auto"
        style="display: grid; grid-gap: 5px"
        :style="{
          'grid-template-columns': $vuetify.display.lgAndUp
            ? 'repeat(4, 1fr)'
            : $vuetify.display.smAndUp
              ? 'repeat(2, 1fr)'
              : 'repeat(1, 1fr)',
        }"
      >
        <div
          v-for="(plan, p) in plans"
          :key="p"
          :class="{ ideal: plan.ideal }"
          class="pa-7 price"
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
            block
            v-bind="plan.btn.props"
          >
            {{ $t(plan.btn.text) }}
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
  </v-container>
</template>

<style lang="scss">
.hr-plan {
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
</style>
