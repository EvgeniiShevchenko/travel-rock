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
        placeholder: "From",
        idSelect: "departure",
        setListLabel: this.setListLabel,
        setInputLabel: this.setInputLabel
      },
      multiselectConfigArrival: {
        name: "arrival",
        placeholder: "To",
        idSelect: "arrival",
        setListLabel: this.setListLabel,
        setInputLabel: this.setInputLabel
      }
    };
  },
  methods: {
    setListLabel(props) {
      return `${props.name} (${props.iataCode})`;
    },
    setInputLabel(props) {
      return `${props.option.city} (${props.option.iataCode})`;
    }
  }
};
</script>

<style src="./FlightRoundTrip.scss" lang="scss" scoped>
</style>
