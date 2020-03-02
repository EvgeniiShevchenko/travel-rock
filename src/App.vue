<template>
  <div>
    <the-header />
    <Dropdown outputText="1 Passenger, Economy"/>
    <Counter />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "./components/layouts/Header/TheHeader.vue";
import Dropdown from "./components/modules/Dropdown-menu/Dropdown.vue";
import Counter from "./components/modules/Counter/Counter.vue";
import TheFooter from "./components/layouts/Footer/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    Dropdown,
    Counter,
    TheFooter
  }
};
</script>

<style lang="scss"> </style>
