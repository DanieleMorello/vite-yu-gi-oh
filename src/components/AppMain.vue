<script>
import AppSelect from "./AppSelect.vue";
import AppCounter from "./AppCounter.vue";
import CardsList from "./CardsList.vue";
export default {
  name: 'AppMain',
  components: {
    AppSelect,
    AppCounter,
    CardsList
  }
}
</script>

<template>
  <main class="py-1">
    <AppSelect></AppSelect>
    <div class="my_container">

      <div class="col">
        <AppCounter></AppCounter>
        <CardsList></CardsList>
      </div>
    </div>

  </main>
</template>

<style lang="scss">
main {
  background-color: #d48f38;

  .my_container {
    width: 80%;
    margin: 0 auto;
    background-color: white;
  }
}
</style>