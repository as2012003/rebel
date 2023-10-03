<template>
  <v-container>
    <!-- Back Button -->
    <v-row class="mb-5">
      <v-col>
        <v-btn color="primary" @click="goBack">Natrag</v-btn>
      </v-col>
    </v-row>
    <v-row v-if="loading">Učitavanje...</v-row>
    <v-row v-else-if="beerDetails">

      <v-col :cols="3"></v-col>

      <v-col :cols="3">
        <v-img :src="beerDetails.image_url" :alt="beerDetails.name" height="20vh" class="my-5"
          v-if="beerDetails.image_url"></v-img>
        <v-img src="@/assets/image_placeholder.png" :alt="beerDetails.name" height="20vh" class="my-5" v-else></v-img>
      </v-col>

      <v-col :cols="3">
        <v-list dense>
          <v-list-item v-if="beerDetails.abv">
            <v-list-item-content>
              <v-list-item-title>ABV: {{ beerDetails.abv }}%</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="beerDetails.ibu">
            <v-list-item-content>
              <v-list-item-title>IBU: {{ beerDetails.ibu }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="beerDetails.ebc">
            <v-list-item-content>
              <v-list-item-title>EBC: {{ beerDetails.ebc }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="beerDetails.ph">
            <v-list-item-content>
              <v-list-item-title>pH: {{ beerDetails.ph }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col :cols="3"></v-col>
    </v-row>

    <v-row v-if="beerDetails">
      <v-col>
        <v-card>
          <v-card-title>{{ beerDetails.name }}</v-card-title>
          <v-card-subtitle>{{ beerDetails.tagline }}</v-card-subtitle>
          <v-card-text>{{ beerDetails.description }}</v-card-text>

          <v-card-text v-if="beerDetails.ingredients">
            <strong>Ingredients:</strong>
            <v-chip-group>
              <v-chip v-for="(ingredient, index) in beerDetails.ingredients.malt" :key="index">
                {{ ingredient.name }}
              </v-chip>

            </v-chip-group>
          </v-card-text>
          <v-card-text v-if="beerDetails.food_pairing">
            <strong>Food Pairing:</strong> {{ beerDetails.food_pairing.join(', ') }}
          </v-card-text>
          <v-card-text v-if="beerDetails.brewers_tips">
            <strong>Brewers Tips:</strong> {{ beerDetails.brewers_tips }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Error Alert -->
    <v-row v-else>
      <v-col>
        <v-alert type="error">Greška pri učitavanju detalja o pivu!</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>
  
    
<script setup>
import { useBeersStore } from '@/store/beersStore.js';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const { fetchBeerDetails } = useBeersStore();
const { beerDetails, loading } = storeToRefs(useBeersStore());
const route = useRoute();
const router = useRouter();

const goBack = () => {
  router.go(-1);
};

onMounted(() => {
  fetchBeerDetails(route.params.id);
});
</script>
  