<template>
  <input
    id="departure"
    class="autocomplete is-arrival-radius"
    value="arrival"
    type="text"
    placeholder="from"
    required
    autocomplete="off"
    @click="$emit('inputAction')"
  />
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AutocompleteInput",
  //   computed: {
  //     ...mapGetters({
  //       departure: "searchPage/getDepartureValue",
  //       arrival: "searchPage/getArrivalValue",
  //       foundDepartureAirports: "searchPage/getResultDepartureAutocomplete",
  //       foundArrivalAirports: "searchPage/getResultArrivalAutocomplete",
  //       isAutocompleteLoading: "searchPage/getStatusAutocomplete"
  //     })
  //   },
  methods: {
    ...mapActions({
      handlerDepartureRoute: "searchPage/handlerDepartureRoute",
      handlerArrivalRoute: "searchPage/handlerArrivalRoute",
      updateDepartureValue: "searchPage/updateDepartureValue",
      updateArrivalValue: "searchPage/updateArrivalValue",
      resetDepartureAutocomplete: "searchPage/resetDepartureAutocompleteResult",
      resetArrivalAutocomplete: "searchPage/resetArrivalAutocompleteResult"
    })
  },
  mounted: function() {
    console.log(this.departureName);
  }
};
</script>

<style lang="scss" scoped></style>

