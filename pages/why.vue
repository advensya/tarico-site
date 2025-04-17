<script lang="ts" setup>
import Masonry from "masonry-layout";

defineI18nRoute({
  paths: {
    en: "/why-tarico",
    fr: "/pourquoi-tarico",
  },
});

const grid = ref<HTMLDivElement>();
const msnry = ref<Masonry>();
let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  if (!grid.value) return;

  msnry.value = new Masonry(grid.value, {
    itemSelector: ".grid-item",
    columnWidth: ".grid-item",
    // gutter: 10,
    horizontalOrder: true,

    // percentPosition: true,
  });

  resizeObserver = new ResizeObserver(() => {
    updateGridLayout();
  });

  resizeObserver.observe(document.querySelector("#__nuxt")!);
});

const updateGridLayout = () => {
  if (msnry.value?.layout) msnry.value.layout();
};

onUnmounted(() => {
  resizeObserver?.disconnect();
});
</script>

<template>
  <v-app class="pg-why">
    <ui-header>
      <template #cta></template>
    </ui-header>

    <v-container style="padding-top: 150px">
      <div ref="grid" class="grid">
        <div class="grid-item">
          <div>
            <div class="marker">01</div>
            <h2
              style="
                max-width: 662px;
                line-height: 1;
                font-size: clamp(2rem, 8.2352941176vw, 4rem);
                line-height: 1;
                font-weight: bold;
              "
            >
              Des solutions logicielles vraiment utiles
            </h2>

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
        </div>

        <div class="grid-item">
          <div>
            <div class="marker">02</div>
            <h2
              style="
                max-width: 662px;
                line-height: 1;
                font-size: clamp(2rem, 8.2352941176vw, 4rem);
                line-height: 1;
                font-weight: bold;
              "
            >
              Une suite logicielle pensée pour l’efficacité
            </h2>

            <p class="mt-5">
              Chez Tarico, chaque logiciel est né d’un besoin identifié sur le
              terrain. Nous avons écouté nos utilisateurs, compris leurs
              blocages, et développé des outils qui répondent avec précision à
              leurs enjeux. Notre suite logicielle est le fruit d’une vision
              pratique, conçue pour être rapidement opérationnelle et réellement
              utile au quotidien.
            </p>

            <ul class="my-5">
              <li>
                <b class="text-primary">Tarico Formulaire</b> : notre outil
                historique, repensé pour rendre la collecte de données plus
                rapide, plus agréable et surtout plus intelligente.
              </li>
              <li>
                <b class="text-primary">Tarico HR</b> : une plateforme de
                gestion des ressources humaines moderne qui simplifie vos
                processus RH tout en mettant l’humain au centre.
              </li>

              <li>
                <b class="text-primary">Tarico Heavy</b>: transférez vos
                fichiers lourds en toute sécurité et sans limite, avec une
                fluidité impressionnante.
              </li>
              <li>
                <b class="text-primary">Tarico Onboarding</b> : optimisez vos
                recrutements et intégrez vos nouveaux talents avec une
                expérience soignée et professionnelle.
              </li>
            </ul>

            <v-btn
              color="dark"
              variant="tonal"
              :to="$localePath({ name: 'products' })"
              rounded
            >
              <template #prepend>
                <i class="fi fi-br-grid"></i>
              </template>
              Voir tous nos services
            </v-btn>
          </div>
        </div>

        <div class="grid-item">
          <div>
            <div class="marker">03</div>
            <h2
              style="
                max-width: 662px;
                line-height: 1;
                font-size: clamp(2rem, 8.2352941176vw, 3rem);
                line-height: 1;
                font-weight: bold;
              "
            >
              Parce que nous comprenons que chaque entreprise est unique
            </h2>

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
        </div>

        <div class="grid-item">
          <div>
            <div class="marker">04</div>
            <h2
              style="
                max-width: 662px;
                line-height: 1;
                font-size: clamp(2rem, 8.2352941176vw, 3rem);
                line-height: 1;
                font-weight: bold;
              "
            >
              Un accompagnement qui fait toute la différence
            </h2>

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
        </div>
      </div>

      <v-row tag="ol" class="pg-why--sections">
        <v-col cols="12" md="6" tag="li" class="pg-why--section">
          <div class="marker">01</div>
          <h2
            style="
              max-width: 662px;
              line-height: 1;
              font-size: clamp(2rem, 8.2352941176vw, 4rem);
              line-height: 1;
              font-weight: bold;
            "
          >
            Pourquoi avons-nous créé Tarico ?
          </h2>

          <p class="mt-5">
            Tout est parti d’un constat simple : les outils numériques censés
            simplifier la vie des entreprises sont souvent complexes, rigides,
            et déconnectés de leurs besoins réels. Chez Tarico, nous avons voulu
            changer la donne. Nous avons créé une entreprise à taille humaine,
            avec une vision claire : proposer des logiciels utiles, faciles à
            prendre en main, et centrés sur l'utilisateur.
          </p>
          <p class="mt-5">
            Notre première mission fut de réinventer le formulaire en ligne — un
            outil quotidien, mais trop souvent sous-estimé. Forts de ce succès,
            nous avons élargi notre champ d’action pour répondre à d’autres
            besoins cruciaux de l’entreprise moderne, toujours avec la même
            philosophie :
            <b>Repenser</b>, <b>innover</b>, <b>rapprocher</b>.
          </p>
        </v-col>
        <v-col cols="12" md="6" tag="li" class="pg-why--section">
          <div class="marker">01</div>
          <h2
            style="
              max-width: 662px;
              line-height: 1;
              font-size: clamp(2rem, 8.2352941176vw, 4rem);
              line-height: 1;
              font-weight: bold;
            "
          >
            Pourquoi avons-nous créé Tarico ?
          </h2>

          <p class="mt-5">
            Tout est parti d’un constat simple : les outils numériques censés
            simplifier la vie des entreprises sont souvent complexes, rigides,
            et déconnectés de leurs besoins réels. Chez Tarico, nous avons voulu
            changer la donne. Nous avons créé une entreprise à taille humaine,
            avec une vision claire : proposer des logiciels utiles, faciles à
            prendre en main, et centrés sur l'utilisateur.
          </p>
          <p class="mt-5">
            Notre première mission fut de réinventer le formulaire en ligne — un
            outil quotidien, mais trop souvent sous-estimé. Forts de ce succès,
            nous avons élargi notre champ d’action pour répondre à d’autres
            besoins cruciaux de l’entreprise moderne, toujours avec la même
            philosophie :
            <b>Repenser</b>, <b>innover</b>, <b>rapprocher</b>.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <ui-footer />
  </v-app>
</template>

<style lang="scss">
.pg-why {
  .grid {
    width: 100%;
    // max-width: 1024px;
    margin: auto;
    container-type: inline-size;

    .grid-item {
      width: calc(100% / 2);
      margin-bottom: 100px;

      > div {
        position: relative;
        width: calc(100% - 80px);
        margin: auto;
        background-color: rgba(var(--v-theme-background));

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(var(--v-theme-background), 0.05);
          border-radius: inherit;
          z-index: 1;
        }

        > * {
          position: relative;
          z-index: 2;
        }
      }

      @container (width > 900px) {
        &:nth-child(2) {
          margin-top: 150px; /* Décalage vertical */
        }
      }

      @container (width <= 900px) {
        width: 100%;
      }

      .marker {
        font-size: 140px;
        font-weight: 900;
        position: absolute;
        top: -100px;
        left: -50px;
        opacity: 0.2;
      }
    }
  }

  .pg-why--sections {
    list-style: none;
    padding-left: 0;
    display: none;

    .pg-why--section {
      position: relative;

      .marker {
        font-size: 140px;
        font-weight: 900;
        position: absolute;
        top: -100px;
        left: -50px;
        opacity: 0.2;
      }
    }
  }
}
</style>
