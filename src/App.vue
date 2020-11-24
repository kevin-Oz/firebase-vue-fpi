<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >ADS 
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <new-ads/>
    </v-app-bar>

    <v-main>
      <home :items= "anunciosFirestore"/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home';
import { db, anuncios } from './controller/firestore';
import NewAds from './components/NewAds.vue';

export default {
  name: 'App',

  components: {
    Home,
    NewAds
  },

  data: () => ({
    anunciosFirestore: [],

  }),

  methods: {
   
   async initList(){
     this.anunciosFirestore = await anuncios;
    }

  },
   created() {
     this.initList();
    },

};
</script>
