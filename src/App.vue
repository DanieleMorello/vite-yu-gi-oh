<script>
import { store } from './store.js';
export default {
  data() {
    return {
      store
    }
  },
  mounted() {
    store.fetchCards(store.apiUrl)
  },
}
</script>

<template></template>

<style lang="scss"></style>