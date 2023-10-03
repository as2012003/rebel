<template>
  <v-card class="pa-4">
    <v-row>
      <v-col cols="4">
      </v-col>
      <v-col cols="4">
        <v-img :src="beer.image_url" :alt="beer.name" height="20vh" class="my-5" v-if="beer.image_url"></v-img>
        <v-img src="@/assets/image_placeholder.png" :alt="beer.name" height="20vh" class="my-5" v-else></v-img>
      </v-col>
      <v-col cols="3" offset="1">
        <v-tooltip>
          <template v-slot:activator="{ props }">
            <div class="d-flex align-center mb-2" v-bind="props">
              <v-icon left small color="primary">mdi-percent</v-icon>
              <span>{{ beer.abv }}</span>
            </div>
          </template>
          <span>Alkohol po volumenu (ABV)</span>
        </v-tooltip>
        <v-tooltip>
          <template v-slot:activator="{ props }">
            <div class="d-flex align-center mb-2" v-bind="props">
              <v-icon left small color="primary">mdi-alpha-i-box</v-icon>
              <span>{{ beer.ibu }}</span>
            </div>
          </template>
          <span>International Bitterness Units (IBU)</span>
        </v-tooltip>
        <v-tooltip>
          <template v-slot:activator="{ props }">
            <div class="d-flex align-center" v-bind="props">
              <v-icon left small color="primary">mdi-ph</v-icon>
              <span>{{ beer.ph }}</span>
            </div>
          </template>
          <span>pH</span>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-card-title>{{ beer.name }}</v-card-title>
    <v-card-subtitle>{{ beer.tagline }}</v-card-subtitle>
  </v-card>
</template>
  
<script>
export default {
  props: {
    beer: {
      type: Object,
      required: true,
    },
  },
}
</script>
  