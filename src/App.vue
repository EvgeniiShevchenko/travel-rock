<template>
  <div>
    <the-header />
    <the-footer />
  </div>
</template>

<script>
  import TheHeader from "./components/layouts/Header/TheHeader.vue";
  import TheFooter from "./components/layouts/Footer/TheFooter.vue";

  export default {
    name: 'App',
    components: {
      TheHeader,
      TheFooter,
    },
  }
</script>

<style  lang="scss">
@import "@/assets/scss/base/base.scss";
</style>
