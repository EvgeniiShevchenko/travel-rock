<template>
  <div>
    <div>
      <h1 :value="departure" />
      <input
        type="text"
        name="departure"
        placeholder="to"
        :departureLocation="departure"
        :arrivalLocation="arrival"
        @input="handleRoute"
      />
    </div>
    <div>
      <input
        type="text"
        name="arrival"
        placeholder="to"
        :departureLocation="departure"
        :arrivalLocation="arrival"
        @input="handleRoute"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "FlightAutocomplete",
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters({
      departure: "searchPage/departureName",
      arrival: "searchPage/arrivalName"
    })
  },
  methods: {
    handleRoute(e) {
      const inputName = e.target.name;
      const departurePlace = e.target.value;

      this.changeDeparture({ inputName, departurePlace });
    },
    ...mapActions({
      changeDeparture: "searchPage/handleRoute"
    })
  }
};
</script>

<style src="./FlightAutocomplete.scss" lang="scss" scoped></style>
