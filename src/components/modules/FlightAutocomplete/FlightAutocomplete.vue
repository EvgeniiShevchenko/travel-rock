<template>
  <div>
    <multiselect
      :value="departure"
      placeholder="Pick actions"
      :options="foundAirports"
      label="iataCode"
      track-by="iataCode"
      :searchable="true"
      :internal-search="false"
      :loading="isAutocompleteLoading"
      :show-labels="false"
      :optionHeight="100"
      group-label="city"
      open-direction="bottom"
      :preserve-search="true"
      :clear-on-select="false"
      :custom-label="nameWithLang"
      @search-change="handlerDepartRoute"
      @select="setSelectedValue"
    >
      <template slot="singleLabel" slot-scope="props">
        <span class="option__desc">
          <span class="option__title">{{ `${props.option.city} (${props.option.iataCode})` }}</span>
        </span>
      </template>
    </multiselect>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Multiselect from "vue-multiselect";

export default {
  name: "FlightAutocomplete",
  components: {
    Multiselect
  },
  computed: {
    ...mapGetters({
      departure: "searchPage/departureName",
      arrival: "searchPage/arrivalName",
      foundAirports: "searchPage/getResultAutocomplete",
      isAutocompleteLoading: "searchPage/getStatusAutocomplete"
    })
  },
  methods: {
    handlerDepartRoute(value) {
      this.handlerRoute({ name: "departure", value: value });
    },
    setSelectedValue(value) {
      console.log(value);
      this.updateDeparturePlace(value);
    },
    nameWithLang({ city, name, iataCode }) {
      return `${city}, ${name} (${iataCode})`;
    },
    ...mapActions({
      handlerRoute: "searchPage/handlerRoute",
      handlerAutocomplete: "searchPage/handlerAutocomplete",
      updateDeparturePlace: "searchPage/updateDeparturePlace",
      updateArrivalPlace: "searchPage/updateArrivalPlace"
    })
  },
  updated: function() {
    console.log(1);
  }
};
</script>

<style src="./FlightAutocomplete.scss" lang="scss" scoped>
</style>
