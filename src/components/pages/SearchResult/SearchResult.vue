<template>
  <div>
    <div class="main-wrapper container">
      <div class="search-form" />
      <div class="result-wrapper">
        <div class="result-header" />
        <div class="result-general">
          <div class="filter">
            <div v-if="!Object.keys(getFoundFlights).length">...loading</div>
            <FilterResult v-else />
          </div>
          <div class="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FilterResult from "../../modules/FilterResult/FilterResult.vue";

export default {
  name: "SearchResult",
  components: {
    FilterResult
  },
  computed: {
    ...mapGetters({
      getFoundFlights: "resultPage/getFoundFlights"
    })
  },
  methods: {
    ...mapActions({
      setFlightResultData: "resultPage/setFlightResultData"
    })
  },
  mounted: function() {
    this.setFlightResultData();
  }
};
</script>

<style lang="scss" scoped>
.result-general {
  display: flex;
}

.filter {
  max-width: 260px;
  width: 100%;
}

.content {
  margin-left: 20px;
  display: flex;
  width: 100%;
  min-height: 400px;
  background: silver;
}
</style>