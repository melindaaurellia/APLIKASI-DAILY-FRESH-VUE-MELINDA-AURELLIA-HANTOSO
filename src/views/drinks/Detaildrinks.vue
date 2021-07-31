<template>
  <div class="card text-center mt-4" v-for="drink in drinks" :key ="drink.id">
  <div class="card-header">Detail Drinks</div>
  <div class="card-body">
    <h5 class="card-title">{{drink.nama}}</h5>
    <p class="card-text">{{drink.image}}</p>
    <p class="card-text">{{drink.size}}</p>
     <p class="card-text">{{drink.harga}}</p>
    <p class="card-text">{{drink.groups.name}}</p>
  </div>
  <div class="card-footer">
   <router-link
              class="btn btn-success"
              :to="{ name: 'Editdrinks', params: { id: drink.id } }"
              >Edit</router-link
            >
            <button
              @click.prevent="drinkDelete(drink.id)"
              class="btn btn-danger"
            >
              Delete
            </button>
  </div>
</div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() { 
    
    let drink =ref([]);
    const router = useRouter();
    const route = useRoute();
    onMounted(() => {
      axios
        .get(` http://127.0.0.1:8000/api/drinks/${route.params.id}`)
        .then((Response) => {
          console.log(Response.data.data.nama);
          drink.value = Response.data.data;
         
        })
        .catch((error) => {
          console.log(error.Response.data);
        });
    });
   function drinkDelete(id){
      axios
        .delete(`http://127.0.0.1:8000/api/drinks/${id}`)
        .then(() => {
          router.go(-1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
    return {
      drink,
      router,
      drinkDelete,
      route,
    };
  },
};
</script>

<style>
</style>