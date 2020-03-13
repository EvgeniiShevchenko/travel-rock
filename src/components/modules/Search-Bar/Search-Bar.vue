<template>
  <div class="search-bar-wrapper">
    <searchTab class="flight-tab" @click="$emit('select-flights')">
      <img src alt /> Flights
    </searchTab>
    <searchTab class="hotels-tab" @click="$emit('select-hotels')">
      <img src alt /> Hotels
    </searchTab>
  </div>
</template>

<script>
import searchTab from "../Search-Tab/Search-Tab.vue";

export default {
  name: "SearchBar",
  components: {
    searchTab
  }
};
</script>

<style lang="scss" scoped>
.search-bar-wrapper {
  display: flex;
  width: 100%;
  height: 42px;
}
</style>
