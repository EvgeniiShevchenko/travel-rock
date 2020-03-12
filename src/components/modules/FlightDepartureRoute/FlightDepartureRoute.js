import { mapActions, mapGetters } from 'vuex';
import testAoutocomplite from '../TestAoutocomplite/TestAoutocomplite.vue';

export default {
  name: 'FlightDepartureRoute',
  components: {
    testAoutocomplite
  },
  data: function() {
    return {
      config: {
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
      findAirports: 'searchPage/getResultDepartureAutocomplete'
    })
  },
  methods: {
    focusInput(value) {
      if (this.arrival.length !== 0) {
        this.resetArrivalAutocomplete();
      }

      if (value.length !== 0) {
        this.handlerDepartureRoute(value);
      }
    },
    handlerRouteTrip(value) {
      this.handlerDepartureRoute(value);
    },
    reverseRoute() {
      this.reverseRouteTrip({ departureValue: this.departure, arrivalValue: this.arrival });
    },
    selectItem(selectItem) {
      const findAirport = this.findAirports.filter(item => {
        if (selectItem.type === 'city') {
          return item.shortCityName === selectItem.shortCityName;
        }
        return item.iataCode === selectItem.iataCode;
      })[0];

      this.updateDepartureValue(this.setInputLabel(findAirport));
    },
    setInputLabel(item) {
      return `${item.city} (${typeof item.iataCode === 'undefined' ? item.shortCityName : item.iataCode})`;
    },
    ...mapActions({
      handlerDepartureRoute: 'searchPage/handlerDepartureRoute',
      updateDepartureValue: 'searchPage/updateDepartureValue',
      resetArrivalAutocomplete: 'searchPage/resetArrivalAutocompleteResult',
      reverseRouteTrip: 'searchPage/reverseRouteTrip'
    })
  }
};
