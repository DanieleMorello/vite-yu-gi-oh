<script>
import CardItem from './CardItem.vue'
import { store } from '../store';
export default {
  name: 'CardsList',
  components: {
    CardItem,

  },
  data() {
    return {
      store
    }
  }

};
</script>

<template>
  <div class="container">

    <div class="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-3">

      <CardItem :card="card" v-for="card in store.cards" v-if="!store.loading" />
      <!-- CardItem -->

      <div class="col-12" v-else>

        <div class="loader">
          Loading..
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>
</template>

<style lang="scss" scoped>
// .found {
//   span {
//     background-color: black;
//     color: white;
//   }
// }
</style>