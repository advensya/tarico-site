<script lang="ts" setup>
defineI18nRoute({
  paths: {
    en: "/career",
    fr: "/carriere",
  },
});

const i18n = useI18n();
useSeoMeta({ title: i18n.t("pages.career.title") });

const whyWorkWithUs = {
  title: "Beaucoup de raisons d’aimer travailler avec nous",
  valuables: [
    {
      icon: "other/030",
      title: "Nous sommes optimistes",
      text: "Nous croyons que tout est possible et que nous pouvons faire des choses incroyables. Nous croyons que nous avons un avenir passionnant devant nous. Nous apprécions ce voyage que nous faisons ensemble et nous recherchons le plaisir dans ce que nous faisons. Nous assumons toujours de bonnes intentions, et nous apprécions profondément la gentillesse et l’empathie.",
    },
    {
      icon: "other/029",
      title: "Nous sommes confiants, mais humbles",
      text: "Nous croyons en nous-mêmes et aimons vraiment apprendre en tant qu’individus et en tant qu’équipe. Nous sommes curieux de nature et nous posons beaucoup de questions – nous ne supposons jamais que nous avons toutes les réponses. Nous donnons et recevons des commentaires ouvertement et honnêtement. Nous adoptons un état d’esprit de croissance et nous cherchons constamment des moyens d’être meilleurs.",
    },
    {
      icon: "other/032",
      title: "Nous sommes obsédés par le succès de nos clients",
      text: "Nous aimons résoudre les problèmes les plus importants, les plus urgents et les plus précieux de nos clients. Nous mesurons et sommes obsédés par l’obtention de résultats significatifs et de valeur pour nos clients et par l’amélioration continue de nos capacités pour le faire encore plus à l’avenir.",
    },
    {
      icon: "other/035",
      title: "Nous pensons grand et commençons petit",
      text: "Nous aimons nous attaquer aux gros problèmes, et nous aimons les décomposer en morceaux solubles. Notre ambition nous pousse à aller au-delà de ce que l’on pense possible. Nous commençons par le problème à résoudre dans tout ce que nous faisons. Nous investissons dans la construction à long terme et nous apprenons en expérimentant à court terme.",
    },
    {
      icon: "other/033",
      title: "Nous allons plus loin ensemble",
      text: "Nous travaillons comme une seule équipe, nous gagnons comme une seule équipe. Nous avons placé la barre très haut pour nous-mêmes et pour les autres. Nous nous respectons les uns les autres et nous recherchons différents points de vue pour trouver la meilleure voie à suivre. Nous veillons les uns sur les autres, nous nous élevons les uns les autres et nous veillons à ce qu’il y ait des opportunités équitables pour que tous réussissent.",
    },

    {
      icon: "other/031",
      title: "Pour nous, chaque jour compte",
      text: "Nous commençons chaque journée avec un objectif clair, une intention d’avoir un impact. Nous n’attendons pas le bon moment, nous le créons. Nous nous battons pour nous débloquer, nous poussons pour faire des progrès et nous travaillons dur avec un sentiment d’urgence et de concentration.",
    },
  ],
};
</script>

<template>
  <v-app theme="dark">
    <ui-header>
      <template #cta>
        <v-btn
          variant="flat"
          size="large"
          color="primary"
          :to="$localePath({ name: 'contact' })"
          rounded
        >
          <template #prepend>
            <i class="fi fi-br-comment" style="font-size: 18px"></i>
          </template>
          Contactez-nous
        </v-btn>
      </template>
    </ui-header>

    <div class="header position-relative">
      <div
        style="
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            0deg,
            rgba(var(--v-theme-background), 1) 0%,
            rgba(var(--v-theme-background), 0) 100%
          );
        "
      ></div>

      <v-container class="position-relative">
        <h1
          style="
            font-size: clamp(2rem, 8.2352941176vw, 4.8rem);
            line-height: 1.1;
            font-weight: bold;
          "
          v-html="$t('pages.career.header.title')"
        ></h1>

        <div class="d-flex align-center flex-wrap ga-2 mt-10">
          <v-btn
            href="https://www.linkedin.com/company/codiasn/jobs"
            target="_blank"
            color="primary"
            size="large"
            rounded
          >
            <template #prepend>
              <ui-svg name="linkedin" size="20" />
            </template>
            {{ $t("pages.career.header.SeeOurOffers") }}
          </v-btn>
          <!-- <v-btn
            href="https://tarico.io/input/34077f93-cc20-4175-9eb4-763477b293c6"
            color="primary"
            size="large"
            rounded
          >
            <template #prepend>
              <i class="fi fi-br-heart"></i>
            </template>
            {{ $t("pages.career.header.spontaneousApplication") }}
          </v-btn> -->
        </div>
      </v-container>
    </div>

    <section
      class="py-16"
      style="
        /* background: linear-gradient(
              0deg,
              #fbdb94 0%,
              rgba(0, 212, 255, 0) 100%
            ); */
      "
    >
      <v-container>
        <h2
          style="max-width: 572px"
          class="text-h5 font-weight-bold text-sm-h3 text-center mx-auto"
        >
          {{ $t("pages.career.whyWorkWithUs.title") }}
        </h2>

        <div class="mt-16">
          <v-row>
            <template v-for="(valuable, t) in whyWorkWithUs.valuables" :key="t">
              <v-col cols="12" sm="6">
                <div class="mt-5 mr-10">
                  <ui-svg :name="valuable.icon" size="48" class="icon" />
                  <div class="text-h4">{{ valuable.title }}</div>
                  <p class="text-body-2">{{ valuable.text }}</p>
                </div>
              </v-col>
            </template>
          </v-row>
        </div>
      </v-container>
    </section>

    <section class="py-16">
      <v-container>
        <ui-svg
          name="other/042"
          size="86"
          class="text-primary mx-auto d-block"
        />
        <div class="text-center mt-10">
          <p>
            {{ $t("pages.career.object.text") }}
          </p>

          <div class="mx-auto w-100 w-sm-75 mt-5">
            <p class="text-sm-h4 font-weight-bold">
              {{ $t("pages.career.object.subtext") }}
            </p>
            <div class="d-flex align-center justify-center flex-wrap ga-2 mt-5">
              <v-btn
                href="https://www.linkedin.com/company/codiasn/jobs"
                target="_blank"
                color="primary"
                size="large"
                rounded
              >
                <template #prepend>
                  <ui-svg name="linkedin" size="20" />
                </template>
                {{ $t("pages.career.header.SeeOurOffers") }}
              </v-btn>
              <!-- <v-btn
                href="https://www.tarico.io/input/ab3376ba-7799-4f89-90ed-062c993c0b19"
                color="primary"
                size="large"
                rounded
              >
                <template #prepend>
                  <i class="fi fi-br-heart"></i>
                </template>
                {{ $t("pages.career.header.spontaneousApplication") }}
              </v-btn> -->
            </div>
          </div>
        </div>
      </v-container>
    </section>

    <!-- <ui-team title="Apprenez à connaître votre (future) équipe" /> -->

    <ui-footer />
  </v-app>
</template>

<style lang="scss" scoped>
.header {
  margin: auto;
  margin-bottom: 50px;
  height: 70lvh;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    inset: 0;
    top: -80px;
    background-image: url(/images/u_003.jpg);
    background-size: cover;
    background-position: center;
  }

  .container {
    width: 80%;
    max-width: 772px;
    margin: auto;

    .desc {
      font-size: 48px;
      line-height: 1.25;
      position: relative;
      margin: auto;

      span {
        background-color: rgb(0, 0, 0);
        color: rgb(255, 255, 255);
      }
    }
  }

  .more-btn {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 36px;
    text-decoration: none;
    color: #000;
    transition: all 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;

    &:hover {
      bottom: 15px;
    }
  }

  @media (max-width: 570px) {
    .container {
      max-width: 280px;

      .desc {
        font-size: 28px;
      }
    }
  }
}
</style>
