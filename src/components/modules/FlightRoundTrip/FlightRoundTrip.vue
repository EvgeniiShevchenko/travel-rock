<template>
  <div class="autocomplete">
    <selectAutocomplete
      class="autocomplete-departure"
      :multiselectConfig="multiselectConfigDeparture"
      departure
      @soma="soma"
    />
    <selectAutocomplete class="autocomplete-arrival" :multiselectConfig="multiselectConfigArrival" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import selectAutocomplete from "../FlightAutocomplete/FlightAutocomplete.vue";

export default {
  name: "FlightAutocomplete",
  components: {
    selectAutocomplete
  },
  data: function() {
    return {
      datax: this.setValue,
      multiselectConfigDeparture: {
        callBack: function() {
          return this.foundAirports;
        },
        value: this.setValue,
        op: this.setValue,
        placeholder: "From",
        id: "departure",
        setOptionsLabel: this.setOptionsLabel,
        setInputLabel: this.setInputLabel
      },
      multiselectConfigArrival: {
        callBack: function() {
          return this.foundAirports;
        },
        value: this.setValue,
        op: this.setValue,
        placeholder: "To",
        id: "arrival",
        setOptionsLabel: this.setOptionsLabel,
        setInputLabel: this.setInputLabel
      }
    };
  },
  computed: {
    setValue() {
      const turbo = this.departure;
      return [];
    },
    ...mapGetters({
      departure: "searchPage/departureName",
      arrival: "searchPage/arrivalName",
      foundAirports: "searchPage/getResultAutocomplete",
      isAutocompleteLoading: "searchPage/getStatusAutocomplete"
    })
  },
  mounted: function() {
    // console.log(this.foundAirports);
  },
  methods: {
    soma(data) {
      console.log(data);
    },
    setOptionsLabel(props) {
      return `${props.name} (${props.iataCode})`;
    },
    setInputLabel(props) {
      return `${props.city} (${props.iataCode})`;
    }
  }
};
</script>

<style src="./FlightRoundTrip.scss" lang="scss" scoped>
</style>
