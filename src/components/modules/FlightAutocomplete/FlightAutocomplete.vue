<template>
  <div>
    <div>
      <h1>{{ departure }}</h1>
      <input
        type="text"
        name="departure"
        placeholder="to"
        :departureLocation="departure"
        :arrivalLocation="arrival"
        @input="handlerRoute"
      />
    </div>
    <div>
      <input
        type="text"
        name="arrival"
        placeholder="to"
        :departureLocation="departure"
        :arrivalLocation="arrival"
        @input="handlerRoute"
      />
    </div>
    <div>
      <label class="typo__label">Select with search</label>
      <!-- <multiselect
        v-model="departure"
        :options="foundAirports"
        tag="search"
        placeholder="Select one"
        trackBy="name"
        :showNoResults="false"
        :internal-search="false"
        :hide-selected="true"
        :loading="statusAutocomplete"
        @search-change="asyncFind('departure')"
      />-->
      <!-- <multiselect
        :options="foundAirports"
        tag="search"
        :searchable="true"
        :taggable="true"
        :value="arrival"
        @input="sayHai"
      />-->
      <h3>{{ departure }}</h3>
      <multiselect
        id="departure"
        :value="departureLocation"
        placeholder="Pick actions"
        :options="foundAirports"
        :searchable="true"
        :internal-search="false"
        :loading="statusAutocomplete"
        track-by="name"
        label="name"
        :custom-label="nameWithLang"
        :show-labels="true"
        open-direction="bottom"
        :clear-on-select="true"
        @input="updateValueAction"
        @search-change="handlerDepartRoute"
      />
      <multiselect
        placeholder="Pick action"
        :value="arrival"
        :options="foundAirports"
        :searchable="true"
        :internal-search="false"
        :loading="statusAutocomplete"
        track-by="name"
        label="name"
        open-direction="bottom"
        :optionHeight="104"
        :max-height="150"
        :custom-label="nameWithLang"
        :show-labels="false"
        @input="updateValueAction"
        @search-change="handlerArriveRoute"
      >
        <span slot="caret" />
      </multiselect>
      <!-- <pre class="language-json"><code>{{ value }}</code></pre> -->
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
      value: "",
      // isLoading: false,
      newPlace: this.$store.state.searchPage.departureLocation
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
      arrival: "searchPage/arrivalName",
      foundAirports: "searchPage/getResultAutocomplete",
      statusAutocomplete: "searchPage/getStatusAutocomplete"
    })
  },
  methods: {
    handlerDepartRoute(value) {
      console.log(this.departure);
      this.handlerRoute({ name: "departure", value });
    },
    handlerArriveRoute(value) {
      this.handlerRoute({ name: "arrival", value });
    },
    nameWithLang({ name, language }) {
      return `${name} — [${language}]`;
    },
    sayHai() {
      console.log("sei hay");
    },
    updateValueAction({ name, language }) {
      this.handlerRoute({
        name: "selectDeparture",
        value: `${name} +++ [${language}]`
      });
      this.value = `vxcvxcvc +++ [vcxvcxv]`;
      // console.log(this.departure);

      // return `${name} +++ [${language}]`;

      // console.log(value);
    },
    asyncFind(query) {
      console.log("asyncFind", query);
      // this.isLoading = true;
      // this.getAirports();
      // ajaxFindCountry(query).then(response => {
      //   // this.countries = response;
      //   console.log(response);
      // });
      // this.isLoading = false;
    },
    ...mapActions({
      handlerRoute: "searchPage/handlerRoute",
      handlerAutocomplete: "searchPage/handlerAutocomplete"
    })
  },
  created: function() {
    // this.$listeners.input = data => {
    //   // this.$emit('input', data, {some: Math.random() * 100})
    //   console.log("hello");
    // };
  },
  mounted: function() {
    console.log(this.departureLocation);
    // this.getAirports();

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
