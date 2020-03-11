import { mapActions, mapGetters } from 'vuex';
import testAoutocomplite from '../TestAoutocomplite/TestAoutocomplite.vue';

export default {
  name: 'FlightDepartureRoute',
  components: {
    testAoutocomplite
  },
  data: function() {
    return {
      departureConfig: {
        placeholder: 'From',
        id: 'departure',
        styleClassName: 'is-reverse-active is-departure-radius'
      }
    };
  },
  computed: {
    ...mapGetters({
      departure: 'searchPage/getDepartureValue',
      arrival: 'searchPage/getArrivalValue',
      foundDepartureAirports: 'searchPage/getResultDepartureAutocomplete'
    })
  },
  methods: {
    activeInput(value) {
      if (this.arrival.length !== 0) {
        this.resetArrivalAutocomplete();
      }

      if (value.length !== 0) {
        this.handlerDepartureRoute(value);
      }
    },
    handlerDepartRouteTrip(value) {
      this.handlerDepartureRoute(value);
    },
    selectItem(idPlace) {
      let findAirport = [];

      findAirport = this.foundDepartureAirports.filter(item => {
        if (idPlace[1] === 'city') {
          return item.shortCityName === idPlace[0];
        }
        return item.iataCode === idPlace[0];
      })[0];

      this.updateDepartureValue(this.setInputLabel(findAirport));
    },
    ...mapActions({
      handlerDepartureRoute: 'searchPage/handlerDepartureRoute',
      handlerArrivalRoute: 'searchPage/handlerArrivalRoute',
      updateDepartureValue: 'searchPage/updateDepartureValue',
      updateArrivalValue: 'searchPage/updateArrivalValue',
      resetDepartureAutocomplete: 'searchPage/resetDepartureAutocompleteResult',
      resetArrivalAutocomplete: 'searchPage/resetArrivalAutocompleteResult'
    })
  }
};
