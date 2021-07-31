<template>
<div class="row">
  <div class="col-lg-4 mt-3" 
  v-for="(drink, index) in drinks" :key="index">
  <div class="card-header"> {{drink.nama}}
  </div>
  <div class="card">
  <div class="card-body">
    <p class="card-text">{{drink.image}}</p>
    <h5 class="card-title">{{drink.size}}</h5>
    <p class="card-text">{{drink.harga}}</p>
    <p class="card-text">{{drink.data.name}}</p>
    
  </div>
  <div class="card-footer text-muted">
           <center> <router-link
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
            </center>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["drinks"],
}
</script>

<style>

</style>