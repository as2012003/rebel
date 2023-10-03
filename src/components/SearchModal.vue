<template>
    <v-dialog v-model="isSearchModalOpen" max-width="600px">
        <v-card>
            <v-card-title>
                <span class="headline">Pretraživanje piva</span>
            </v-card-title>
            <v-card-text>
                <v-text-field flat hide-details class="mx-4 my-2" label="Pretraži" prepend-icon="mdi-magnify"
                    v-model="query" @input="search"></v-text-field>
                <v-progress-linear v-if="loadingSearch" indeterminate color="blue"></v-progress-linear>
                <v-list v-if="searchResults" class="mx-10">

                    <v-list-item v-for="beer in searchResults" :key="beer.id" link @click="openBeer(beer.id)">
                        <v-list-item-content>
                            <v-row>
                                <v-col cols="4">
                                    <v-img :src="beer.image_url" :alt="beer.name" height="15vh"
                                        v-if="beer.image_url"></v-img>
                                    <v-img src="@/assets/image_placeholder.png" :alt="beer.name" height="15vh"
                                        v-else></v-img>
                                </v-col>
                                <v-col cols="8" class="d-flex flex-column justify-center">
                                    <v-list-item-title>{{ beer.name }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ beer.tagline }}</v-list-item-subtitle>
                                </v-col>
                            </v-row>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <!-- no results -->
                <v-alert v-if="!loadingSearch && searchResults.length === 0 && query.length > 2" type="warning" dismissible
                    class="mx-4">
                    Nema rezultata
                </v-alert>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeSearchModal">Zatvori</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
  
<script setup>
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/app';
import { useBeersStore } from '@/store/beersStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const { isSearchModalOpen } = storeToRefs(useAppStore());
const { searchResults, loadingSearch } = storeToRefs(useBeersStore());
const { searchBeers } = useBeersStore();
const query = ref('');

const closeSearchModal = () => {
    isSearchModalOpen.value = false;
    clearQueryAndResults();
};

const search = () => {
    if (query.value.length > 1) {
        searchBeers(query.value);
    }
};

const clearQueryAndResults = () => {
    query.value = '';
    searchResults.value = [];
};

const openBeer = (id) => {
    closeSearchModal();
    router.push({ name: 'BeerDetails', params: { id } });
};
</script>
  