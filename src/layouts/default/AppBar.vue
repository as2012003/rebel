<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="toggleNavigationDrawer" />
    <router-link to="/" class="title">
      <v-toolbar-title>Rebel</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-text-field flat hide-details class="mx-4 my-2" label="Pretraži" prepend-icon="mdi-magnify" @focus="openSearchModal"></v-text-field>
  </v-app-bar>
</template>

<script setup>
import { useAppStore } from '@/store/app';

const { toggleNavigationDrawer, openSearchModal } = useAppStore();

</script>

<style scoped>
.title {
  text-decoration: none !important;
  color: #000 !important;
}
</style>
