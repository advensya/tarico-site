<script lang="ts" setup>
const i18n = useI18n();
// useSeoMeta({ title: i18n.t("pages.articles.description") });

const { data: pages } = await useAsyncData(Math.random().toString(), () => {
  return queryCollection("blog").order("date", "ASC").limit(5).all();
});
</script>

<template>
  <v-container class="py-16">
    <v-row>
      <template v-for="(page, p) in pages" :key="p">
        <v-col cols="12" sm="6" md="4">
          <v-card
            height="100%"
            class="mx-auto pa-0"
            rounded="lg"
            variant="flat"
          >
            <div
              style="
                min-height: 250px;
                height: 100%;
                background: linear-gradient(
                  to bottom right,
                  rgba(var(--v-theme-secondary), 0.3) 0%,
                  rgba(var(--v-theme-primary), 0) 100%
                );
                display: flex;
                flex-direction: column;
                gap: 20px;
              "
              class="pa-6"
            >
              <h2
                style="
                  font-size: 2.2rem;
                  line-height: 1.1;
                  display: -webkit-box;
                  -webkit-line-clamp: 4;
                  line-clamp: 4;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  text-overflow: ellipsis;
                "
              >
                {{ page.title }}
              </h2>

              <p
                v-if="page.description"
                style="
                  line-height: 1.1;
                  display: -webkit-box;
                  -webkit-line-clamp: 5;
                  line-clamp: 5;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  text-overflow: ellipsis;
                "
              >
                {{ page.description }}
              </p>

              <div class="mt-auto">
                <v-btn
                  :to="
                    $localePath({
                      name: 'blog-slug',
                      params: {
                        slug: page.meta.slug as any,
                      },
                    })
                  "
                  color="dark"
                  variant="flat"
                  text="Lire l'article"
                  rounded
                ></v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>
