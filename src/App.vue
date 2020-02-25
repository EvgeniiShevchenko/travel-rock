<template>
  <div id="app"> 
    <the-header />
    <search-form />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "./components/layouts/Header/TheHeader.vue";
import SearchForm from './components/modules/searchForm/SearchForm.vue';
import TheFooter from "./components/layouts/Footer/TheFooter.vue";

export default {
  name: 'App',
  components: {
    TheHeader,
    SearchForm,
    TheFooter
  }
};
</script>

<style lang="scss">
  #app {
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  @import "@/assets/scss/base/base.scss";
</style>
