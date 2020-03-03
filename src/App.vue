<template>
  <div id="app">
    <TheHeader />
    <search-form />
    <FlightAutocomplete />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/layouts/Header/TheHeader.vue";
import SearchForm from "./components/modules/searchForm/SearchForm.vue";
import TheFooter from "./components/layouts/Footer/TheFooter.vue";
// import FlightAutocomplete from "./components/modules/FlightAutocomplete/FlightAutocomplete.vue";
import FlightAutocomplete from "./components/modules/FlightRoundTrip/FlightRoundTrip.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    SearchForm,
    TheFooter,
    FlightAutocomplete
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/base/base.scss";
@import "/App.scss";
</style>
