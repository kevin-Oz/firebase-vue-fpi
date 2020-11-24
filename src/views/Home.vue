<template>
  <div class="home">
    <template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  props: ["items"],
  components: {
    HelloWorld
  },
   data () {
      return {
        headers: [
          { text: 'Titulo', value: "titulo" },
          { text: 'precio', value: "precio" },
          { text: 'Sistema Operativo', value: "so" },
          { text: 'descripcion', value: "descripcion" },
        ],
      
      }
    },
    
}
</script>
