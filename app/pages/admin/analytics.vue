<script setup lang="ts">
const from = ref(
  new Date(Date.now() - 7 * 24 * 3600 * 1000).toISOString().slice(0, 10)
);
const to = ref(new Date().toISOString().slice(0, 10));
const { data, refresh, pending } = useFetch("/api/track/analytics", {
  query: { from, to },
});

const tab = ref("visit");
</script>

<template>
  <v-container>
    <div class="d-flex ga-2 justify-end align-center mb-5">
      <input class="border rounded px-2 py-1" type="date" v-model="from" />
      <input class="border rounded px-2 py-1" type="date" v-model="to" />
      <v-btn color="dark" variant="flat" @click="refresh()"> Actualiser </v-btn>
    </div>

    <v-tabs v-model="tab">
      <v-tab value="visit">Visites</v-tab>
      <v-tab value="events">Évènements</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="visit">
        <v-table>
          <thead>
            <tr>
              <th class="text-left">
                Pages ({{ data?.totals.pageViews ?? 0 }})
              </th>
              <th class="text-left">Nombre de visites</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="row in data?.byPath" :key="row.path">
              <td>{{ row.path }}</td>
              <td>{{ row.count }}</td>
            </tr>

            <tr v-if="!data?.byPath.length">
              <td class="text-center py-16" colspan="16">Aucune visite</td>
            </tr>
          </tbody>
        </v-table>
      </v-tabs-window-item>

      <v-tabs-window-item value="events">
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Évènements</th>
              <th class="text-left">Nombre</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="row in data?.events" :key="row.name">
              <td>{{ row.name }}</td>
              <td>{{ row.count }}</td>
            </tr>

            <tr v-if="!data?.events.length">
              <td class="text-center py-16" colspan="16">Aucun évènement</td>
            </tr>
          </tbody>
        </v-table>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-container>
</template>
