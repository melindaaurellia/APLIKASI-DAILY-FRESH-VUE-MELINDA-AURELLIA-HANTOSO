<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createdrinks"
      >Add Drink</router-link
    >


<Carddrinks :drinks="drinks"/>

  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import Carddrinks from "@/components/Carddrinks.vue";
import { onMounted, ref } from "vue";

export default {
  name: "Home",
  components: {
    Slider,
    Carddrinks,
  },

  setup() {
    let drinks = ref([]);

    onMounted(() => {
      axios
        .get('http://127.0.0.1:8000/api/drinks')
        .then((Response) => {
          drinks.value = Response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
    })

    function drinkDelete(id){
      axios
        .delete(`http://127.0.0.1:8000/api/drinks/${id}`)
        .then(() => {
          let z = this.drinks.map((drinks) => drinks.id).index(id);
          this.drinks.splice(z, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return {
      drinks,
      drinkDelete,
    };
  },
};
</script>
