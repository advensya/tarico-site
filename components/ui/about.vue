<script lang="ts" setup>
const { $i18n } = useNuxtApp();
const direction = ref([
  {
    name: "La direction",
    persons: [
      {
        code: "domutala",
        photo: "/images/mamadou-dia.png",
        contacts: {
          github: "https://www.github.com/domutala/",
          linkedin: "https://www.linkedin.com/in/domutala/",
        },
      },
      {
        code: "speedy",
        photo: "/images/saliou-diop.png",
        contacts: { linkedin: "https://www.linkedin.com/in/saliou-diop/" },
      },
      {
        code: "saer",
        photo: "/images/serigne-saer-dia.png",
        contacts: {
          linkedin: "https://www.linkedin.com/in/saer-dia-13a02a16a/",
        },
      },
    ],
  },
]);

const values = ["innovate", "quality", "conformity"];
</script>

<template>
  <div>
    <section>
      <v-container>
        <h2 class="text-h3 text-center mb-10">
          <img
            src="https://cdn-icons-png.flaticon.com/256/8143/8143776.png"
            style="width: 88px; text-align: center"
          />
          <br />
          <span class="">
            {{ $t("components.about.values.title") }}
          </span>
        </h2>
        <v-row>
          <v-col
            v-for="(value, v) in values"
            cols="12"
            :sm="v === values.length - 1 ? 12 : 6"
            md="4"
          >
            <div class="bg-grey-darken-4 rounded pa-5 h-100 d-flex flex-column">
              <h3 class="mb-7 text-h4 font-weight-bold">
                {{ $t(`components.about.values.items.${value}.title`) }}
              </h3>
              <p class="mt-auto" style="font-size: 18px">
                {{ $t(`components.about.values.items.${value}.text`) }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section v-for="(team, t) in direction" :key="t" class="section-3">
      <h1 class="desc">
        <span>{{ team.name }}</span>
      </h1>
      <div class="container" style="max-width: 992px">
        <div v-for="(person, p) in team.persons" :key="p" class="one">
          <img
            :src="person.photo"
            :alt="$t(`components.about.staff.persons.${person.code}.name`)"
          />
          <div class="contact ga-2 d-flex align-center">
            <nuxt-link
              v-for="(contact, c) in person.contacts"
              :key="c"
              class="text-dark"
              :href="contact"
              target="_blank"
            >
              <ui-svg :name="c" width="22" height="22" class="text-orange" />
            </nuxt-link>
          </div>
          <div class="text-h6 px-2" style="line-height: 1">
            {{ $t(`components.about.staff.persons.${person.code}.name`) }}
          </div>
          <p class="px-2" style="font-size: 16px">
            {{ $t(`components.about.staff.persons.${person.code}.text`) }}
          </p>
        </div>
      </div>
    </section>

    <ui-team />

    <section class="section-ceo-text pt-10">
      <div class="container">
        <div class="text-center w-100 d-flex justify-center mb-5">
          <i class="fi fi-br-quote-right text-h3 text-orange"></i>
        </div>
        <p class="text">
          {{ $t("components.about.ceo.text") }}
        </p>

        <div class="ceo mt-2">
          <div class="ceo-photo">
            <img
              src="/images/mamadou-dia.png"
              alt="Mamadou DIA - CEO of Codia"
            />
          </div>
          <div class="" style="line-height: 1">
            <div class="ceo-name">Mamadou DIA</div>
            <div class="ceo-description mt-1">
              <span>CEO Codia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.section-3 {
  margin-top: 80px;
  .desc {
    margin: auto;
    text-align: center;
    font-size: 36px;
  }
  .container {
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    width: 90%;
    max-width: 882px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    row-gap: 50px;
    column-gap: 0px;

    @media (max-width: 772px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 662px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .one {
      padding: 10px;
      transition: all 0.5s ease;
      display: block;
      text-decoration: none;
      position: relative;

      img {
        height: 160px;
        width: 100%;
        // background-color: rgb(254, 191, 255);
        // background-color: rgba(255, 219, 191, 0.386);
        background-color: rgb(var(--v-theme-on-background), 0.05);
        // background-color: rgb(156, 230, 255);
        margin-bottom: 15px;
        object-fit: contain;
        object-position: bottom center;
        border-radius: 0.6em;
      }

      .contact {
        position: absolute;
        top: 30px;
        right: 30px;
      }

      p,
      h1 {
        padding: 0;
        margin: 0;
      }

      h1 {
        font-size: 18px;
      }

      p {
        margin-top: 15px;
        font-size: 18px;
      }
    }
  }
}

.section-valuables {
  .desc {
    margin: auto;
    text-align: center;
    font-size: 36px;
  }
  .container {
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    width: 90%;
    max-width: 772px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    gap: 10px;

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 662px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .one {
      padding: 20px;
      transition: all 0.5s ease;
      text-decoration: none;
      background-color: rgb(0, 0, 0);
      color: #fff;
      display: flex;
      flex-direction: column;
      border-radius: 0.6em;

      p,
      h1 {
        padding: 0;
        margin: 0;
      }

      h1 {
        font-size: 36px;
        margin-bottom: 20px;
      }

      p {
        font-size: 18px;
        // margin-top: auto;
      }
    }
  }
}

.section-ceo-text {
  .container {
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    width: 90%;
    max-width: 662px;
    text-align: center;

    .text {
      font-size: 18px;
    }

    .ceo {
      display: flex;
      align-items: center;
      text-align: left;
      width: max-content;
      margin: auto;

      .ceo-photo {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: rgb(var(--v-theme-on-background), 0.04);
        overflow: hidden;
        align-items: flex-end;
        display: flex;
        justify-content: center;
        margin-right: 10px;

        img {
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }

      .ceo-name {
        margin: auto;
        font-size: 20px;
        max-width: 400px;
        font-weight: bold;
      }

      .ceo-description {
        font-size: 13px;
        // span {
        //   background-color: #000;
        //   color: #fff;
        // }
      }
    }
  }
}
</style>
