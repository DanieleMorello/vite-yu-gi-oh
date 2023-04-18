<script>
import { store } from '../store';
export default {
  name: 'AppCounter',
  props: {
    card: Object
  },
  data() {
    return {
      store
    }
  }
}
</script>
<template>
  <div class="alert bg-dark text-white mt-1 rounded-0" role="alert">
    <p>Found {{ store.cards.length }} cards</p>
  </div>
</template>
<style lang="scss"></style>