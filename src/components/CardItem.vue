<script>
import { store } from '../store'
export default {
  name: 'CardItem',
  props: {
    card: Object
  }, data() {
    return {
      store
    }
  }
}
</script>


<template>
  <div class="col">

    <div class="card my_card h-100">

      <div class="card-header text-center">
        <img class="img-fluid" :src="card.card_images[0].image_url" :alt="card.name">
      </div>
      <div class="card-body text-uppercase">
        <h5>{{ card.name }}</h5>
        <div class="archetype  text-dark text-center">{{ card.archetype }}</div>
        <!-- /.archetype-->
      </div>
    </div>
    <!-- /.card -->
  </div>
  <!-- /.col -->
</template>

<style lang="scss" scoped>
.my_card {
  background-color: #d48f38;
  color: white;
}
</style>