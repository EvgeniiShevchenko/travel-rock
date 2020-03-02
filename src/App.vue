<template>
  <div>
    <TheHeader />
    <FlightAutocomplete name="evgenii" />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/layouts/Header/TheHeader.vue";
import TheFooter from "./components/layouts/Footer/TheFooter.vue";
import FlightAutocomplete from "./components/modules/FlightAutocomplete/FlightAutocomplete.vue";
import "~/vue-multiselect/dist/vue-multiselect.min.css";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    FlightAutocomplete
  }
};
</script>

<style  lang="scss">
@import "@/assets/scss/base/base.scss";
</style>
