<template>
  <v-navigation-drawer v-model="isNavigationDrawerOpen" app>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-overline">Filteri</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-caption">ABV</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="mx-1">
        <v-range-slider class="my-7" v-model="abvValue" :max="19" :min="0" thumb-label="always"></v-range-slider>
      </v-list-item>
      <v-list-item>
        <v-row>
          <v-col>
            <v-btn @click="applyFilters()">Primjeni</v-btn>
          </v-col>
          <v-col>
            <v-icon class="mt-2" @click="resetFilters()">mdi-refresh</v-icon>
          </v-col>
        </v-row>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-overline">Akcije</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link class="text-caption" @click="toggleAddNewModal">
        Dodaj novo pivo
      </v-list-item>

      <v-list-item link to="/o-projektu">
        <v-list-item-content>
          <v-list-item-title class="text-overline">O projetku</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>

  <AddBeerModal />
</template>
  
<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/app';
import { useBeersStore } from '@/store/beersStore';
import AddBeerModal from '@/components/AddBeerModal.vue';

const { isNavigationDrawerOpen } = storeToRefs(useAppStore());
const { abvGt, abvLt } = storeToRefs(useBeersStore());
const { fetchBeers } = useBeersStore();
const { toggleAddNewModal } = useAppStore();

const abvValue = ref([abvGt.value, abvLt.value]);

const applyFilters = () => {
  abvGt.value = abvValue.value[0];
  abvLt.value = abvValue.value[1];
  fetchBeers();
};

const resetFilters = () => {
  abvGt.value = 0;
  abvLt.value = 19;
  abvValue.value = [0, 19];
  fetchBeers();
};
</script>
