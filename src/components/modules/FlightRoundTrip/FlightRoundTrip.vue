<template>
  <div class="autocomplete">
    <selectAutocomplete
      class="autocomplete-departure"
      :multiselectConfig="multiselectConfigDeparture"
    />
    <selectAutocomplete class="autocomplete-arrival" :multiselectConfig="multiselectConfigArrival" />
  </div>
</template>
<script>
import selectAutocomplete from "../FlightAutocomplete/FlightAutocomplete.vue";

export default {
  name: "FlightAutocomplete",
  components: {
    selectAutocomplete
  },
  data: function() {
    return {
      multiselectConfigDeparture: {
        name: "departure",
        placeholder: "Pick actions",
        idSelect: "departure",
        setListLabel: props => `${props.name} (${props.iataCode})`,
        setInputLabel: props =>
          `${props.option.city} (${props.option.iataCode})`
      },
      multiselectConfigArrival: {
        name: "arrival",
        placeholder: "Pick actions",
        idSelect: "arrival",
        setListLabel: props => `${props.name} (${props.iataCode})`,
        setInputLabel: props =>
          `${props.option.city} (${props.option.iataCode})`
      }
    };
  }
};
</script>

<style src="./FlightRoundTrip.scss" lang="scss" scoped>
</style>
