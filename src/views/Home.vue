<template>
  <div class="home">
    <template>
  <v-data-table
    :headers="headers"
    :items="anuncios"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>
  </div>
</template>

<script>
import { db } from '../controller/firestore';

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
   data () {
      return {
        anuncios: [],
        headers: [
          { text: 'Titulo', value: "titulo" },
          { text: 'precio', value: "precio" },
          { text: 'Sistema Operativo', value: "so" },
          { text: 'descripcion', value: "descripcion" },
        ],
      
      }
    },
  firestore: {
    anuncios: db.collection('anuncios'),
  },
    
}
</script>
