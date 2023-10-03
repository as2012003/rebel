import { defineStore } from 'pinia';
import httpClient from '../common/httpClient';
import { ref } from 'vue';

export const useBeersStore = defineStore('beers', () => {
  const beers = ref([]);
  const beerDetails = ref(null);
  const loading = ref(false);
  const currentPage = ref(1);
  const perPage = ref(16);
  const abvGt = ref(0);
  const abvLt = ref(19);
  const searchResults = ref([]);
  const loadingSearch = ref(false);

  async function fetchBeers(page = currentPage.value, itemsPerPage = perPage.value) {
    try {
      loading.value = true;
      const response = await httpClient.request({
        method: 'GET',
        url: '/beers',
        params: {
          page,
          per_page: itemsPerPage,
          abv_gt: abvGt.value,
          abv_lt: abvLt.value,
        },
      });
      beers.value = response.data;
      currentPage.value = page;
    } catch (error) {
      console.error('Error fetching beers:', error);
    } finally {
      loading.value = false;
    }
  }

  async function fetchBeerDetails(id) {
    try {
      loading.value = true;
      const response = await httpClient.request({
        method: 'GET',
        url: `/beers/${id}`,
      });
      beerDetails.value = response.data[0];
    } catch (error) {
      console.error(`Error fetching details for beer with id ${id}:`, error);
    } finally {
      loading.value = false;
    }
  }

  async function searchBeers(beerName) {
    try {
      loadingSearch.value = true;
      const response = await httpClient.request({
        method: 'GET',
        url: '/beers',
        params: {
          beer_name: beerName.replace(' ', '_'),
        },
      });
      searchResults.value = response.data;
    } catch (error) {
      console.error('Error searching beers:', error);
    } finally {
      loadingSearch.value = false;
    }
  }

  return {
    beers,
    beerDetails,
    loading,
    currentPage,
    perPage,
    fetchBeers,
    fetchBeerDetails,
    abvGt,
    abvLt,
    searchResults,
    searchBeers,
    loadingSearch,
  };
});
