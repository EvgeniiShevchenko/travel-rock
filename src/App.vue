<template>
  <div id="app">
    <TheHeader />
    <search-form />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/layouts/Header/TheHeader.vue";
import SearchForm from "./components/modules/searchForm/SearchForm.vue";
import TheFooter from "./components/layouts/Footer/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    SearchForm,
    TheFooter
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/base/base.scss";
@import "/App.scss";
</style>
