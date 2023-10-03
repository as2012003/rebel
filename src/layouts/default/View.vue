<template>
  <v-main>
    <router-view />
    <SearchModal />
  </v-main>
</template>

<script setup>
import SearchModal from '@/components/SearchModal.vue';
</script>
