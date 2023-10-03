<template>
  <v-dialog max-width="600px" v-model="isAddNewModalOpen">
    <v-card>
      <v-card-title>
        <span class="headline">Dodaj novo pivo</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field v-model="beer.name" :rules="nameRules" label="Ime" required></v-text-field>
          <v-text-field v-model="beer.tagline" label="Slogan" required></v-text-field>
          <v-text-field v-model="beer.first_brewed" label="Prvi put skuhano" required></v-text-field>
          <v-textarea v-model="beer.description" label="Opis" required></v-textarea>
          <v-text-field v-model="beer.abv" label="ABV" type="number" required></v-text-field>
          <v-text-field v-model="beer.ibu" label="IBU" type="number" required></v-text-field>
          <v-file-input v-model="beer.image" label="Učitaj sliku"></v-file-input>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeModal">Zatvori</v-btn>
        <v-btn color="green darken-1" text @click="addBeer">Dodaj</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/app';
import Swal from 'sweetalert2';

const { isAddNewModalOpen } = storeToRefs(useAppStore());
const valid = ref(false);
const beer = ref({
  name: '',
  tagline: '',
  first_brewed: '',
  description: '',
  abv: '',
  ibu: '',
  image: null,
});

const nameRules = [
  v => !!v || 'Ime je obavezno',
];

const closeModal = () => {
  isAddNewModalOpen.value = false;
  clearForm();
};

const addBeer = () => {
  if (valid.value) {
    if (beer.value.image) {
      console.log('Slika je učitana');
    }

    Swal.fire({
      icon: 'success',
      title: 'Uspješno!',
      text: 'Novo pivo je dodano.',
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
    });
    closeModal();
  }
};

const clearForm = () => {
  beer.value = {
    name: '',
    tagline: '',
    first_brewed: '',
    description: '',
    abv: '',
    ibu: '',
    image: null,
  };
};
</script>
