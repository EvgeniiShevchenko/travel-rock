<template>
  <div id="app">
    <TheHeader/>
    <router-view></router-view>
  </div>
</template>

<script>
  import TheHeader from "./components/layouts/Header/TheHeader.vue";
  export default {
    components: {
      TheHeader,
    },
    name: 'App',
  }
</script>

<style lang="scss">
  @import "./assets/scss/app.scss";
</style>
