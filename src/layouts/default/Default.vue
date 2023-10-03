<template>
  <v-app>
    <default-navigation-drawer />
    <default-bar />

    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import DefaultNavigationDrawer from './AppNavigationDrawer.vue'
</script>
