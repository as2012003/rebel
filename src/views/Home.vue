<template>
  <v-container>
    <v-row v-if="loading">Učitavanje...</v-row>
    <v-row v-else>
      <v-col v-for="beer in beers" :key="beer.id" cols="12" sm="6" md="3">
        <BeerCard :beer="beer" @click="() => $router.push({ name: 'BeerDetails', params: { id: beer.id } })" />
      </v-col>
    </v-row>
    <v-row v-if="!loading" class="mt-5 justify-center">
      <v-col cols="12" md="6" lg="4">
        <v-pagination v-model="currentPage" :length="21" class="text-center"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useBeersStore } from '@/store/beersStore.js';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import BeerCard from '@/components/BeerCard.vue';

const { fetchBeers } = useBeersStore();
const { beers, loading, currentPage } = storeToRefs(useBeersStore());

fetchBeers();

// watch current page and fetch beers
watch(currentPage, () => {
  fetchBeers();
});

</script>
