<template>
    <TheHeader/>
</template>

<script>
    import TheHeader from "./components/layouts/Header/TheHeader.vue";
export default {
  components: {
    TheHeader:TheHeader,
  },
  name: 'App',
}
</script>

<style lang="scss">
    @import "./assets/scss/app.scss";
</style>
