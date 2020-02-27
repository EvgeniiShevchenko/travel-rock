<template>
  <div>
    <div>
      <h1>{{ newName }}</h1>
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
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "FlightAutocomplete",
  data: function() {
    return {};
  },
  watch: {},
  computed: {
    newName() {
      console.log("hii");
      return this.departure;
    },
    // ...mapState({ departureLocation: "searchPage/departureLocation" }),
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
  },
  mounted: function() {
    console.log(this.departureLocation);
    // console.log(this.$store.state.searchPage.departureLocation);
  }
};
</script>

<style src="./FlightAutocomplete.scss" lang="scss" scoped></style>
