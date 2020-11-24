<template>
    <div>
        <template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="pink darken-4"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Nuevo Anuncio
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Registra tu Anuncio</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="MARCA/MODELO*"
                  required
                  v-model="anuncio.titulo"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="PRECIO"
                  hint="precio en dólares"
                  type="number"
                  v-model="anuncio.precio"
                ></v-text-field>
              </v-col>
                <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['IOS', 'ANDROID', 'WINDOWS']"
                  label="SISTEMA OPERATIVO*"
                  required
                  v-model="anuncio.so"

                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="DESCRIPCION"
                  v-model="anuncio.descripcion"

                ></v-text-field>
              </v-col>
            
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="postAnuncio"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
    </div>
</template>

<script>
import { db }   from '../controller/firestore';

    export default {
    data: () => ({
      //  dbConnect,
      dialog: false,
      anuncio: {
          titulo: '',
          precio: 0,
          so: '',
          descripcion: ''
      }
    }),

    methods:{
        postAnuncio(){
            db.collection('anuncios').add(this.anuncio).then(doc => {
            this.dialog = false;
            });
        }

    },
    created(){
       
    },
    };
</script>

<style lang="scss" scoped>

</style>