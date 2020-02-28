<template>
  <div>
    <div>
      <h1>{{ name }}</h1>
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
    <div>
      <label class="typo__label">Select with search</label>
      <multiselect v-model="value" :options="options" placeholder="Select one" track-by="name" />
      <pre class="language-json"><code>{{ value }}</code></pre>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import axios from "axios";
import Multiselect from "vue-multiselect";
import Amadeus from "amadeus";

export default {
  name: "FlightAutocomplete",
  components: {
    Multiselect
  },
  props: ["name"],
  data: function() {
    return {
      newPlace: this.$store.state.searchPage.departureLocation,
      value: { name: "Vue.js", language: "JavaScript" },
      options: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP" },
        { name: "Phoenix", language: "Elixir" }
      ]
    };
  },
  watch: {},
  computed: {
    newName() {
      console.log("hii");
      return this.departure;
    },
    Air() {
      console.log(this.airports);
      return this.airports;
    },
    ...mapState({
      departureLocation: "searchPage/departureLocation"
    }),
    ...mapGetters({
      departure: "searchPage/departureName",
      airports: "searchPage/getAutocompleteData",
      arrival: "searchPage/arrivalName"
    })
  },
  methods: {
    handleRoute(e) {
      const inputName = e.target.name;
      const departurePlace = e.target.value;

      this.changeDeparture({ inputName, departurePlace });
    },
    nameWithLang({ name, language }) {
      return `${name} — [${language}]`;
    },
    ...mapActions({
      changeDeparture: "searchPage/handleRoute",
      getAirports: "searchPage/getAirports"
    })
  },
  mounted: function() {
    console.log(this.departureLocation);
    this.getAirports();

    // const amadeus = new Amadeus({
    //   clientId: "rbuzBt1bTsiXEcTmwE7SxideWcWi9AQq",
    //   clientSecret: "oaS7EMMlOmLAEdIb"
    // });

    // amadeus.shopping.flightOffersSearch
    //   .get({
    //     originLocationCode: "SYD",
    //     destinationLocationCode: "BKK",
    //     departureDate: "2020-02-29",
    //     adults: "2"
    //   })
    //   .then(function(response) {
    //     console.log("response", response.data);
    //   })
    //   .catch(function(responseError) {
    //     console.log(responseError.code);
    //   });

    // amadeus.referenceData.locations
    //   .get({
    //     keyword: 'LON',
    //     subType: 'AIRPORT,CITY'
    //   })
    //   .then(function(response) {
    //     console.log(response.data); // first page
    //     return amadeus.next(response);
    //   })
    //   .then(function(nextResponse) {
    //     console.log(nextResponse.data); // second page
    //   });
    // console.log(this.$store.state.searchPage.departureLocation);
  },
  updated: function() {
    console.log(this.$store.state.searchPage.departureLocation);
  }
};
</script>

<style src="./FlightAutocomplete.scss" lang="scss" scoped>
</style>
