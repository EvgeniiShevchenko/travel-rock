<template>
  <div class="search-bar-wrapper">
    <searchTab id="flights" :class="defineStyleForFlightsTab" @select-tab="selectTab">
      <img src="@/assets/images/airplane.svg" alt="Flight tab icon" /> Flights
    </searchTab>
    <searchTab id="hotels" :class="defineStyleForHotelsTab" @select-tab="selectTab">
      <img src="@/assets/images/hotels.svg" alt="Hotel tab icon" /> Hotels
    </searchTab>
  </div>
</template>

<script>
import searchTab from "../Search-Tab/Search-Tab.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SearchBar",
  components: {
    searchTab
  },
  computed: {
    defineStyleForFlightsTab() {
      return this.activeTab === "flights"
        ? "flights-tab active"
        : "flights-tab";
    },
    defineStyleForHotelsTab() {
      return this.activeTab === "hotels" ? "flights-tab active" : "flights-tab";
    },
    ...mapGetters({ activeTab: "searchPage/getSearchTabName" })
  },
  methods: {
    selectTab(tabName) {
      this.changeSearchTab(tabName);
    },
    ...mapActions({ changeSearchTab: "searchPage/changeSearchTab" })
  }
};
</script>

<style lang="scss" scoped>
.search-bar-wrapper {
  display: flex;
  width: 100%;
  height: 42px;
}

.flights-tab {
  max-width: 168px;
  background: #1b3161;
  border-radius: 4px 4px 0 0;
  color: white;
}

.hotels-tab {
  max-width: 168px;
  background: #1b3161;
  border-radius: 4px 4px 0 0;
  color: white;
}

.active {
  background-color: rgba(43, 70, 129, 0.9);
}
</style>
