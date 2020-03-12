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
        placeholder: 'To',
        id: 'arrival',
        styleClassName: 'is-arrival-radius'
      }
    };
  },
  computed: {
    ...mapGetters({
      arrival: 'searchPage/getArrivalValue',
      departure: 'searchPage/getDepartureValue',
      findAirports: 'searchPage/getResultArrivalAutocomplete'
    })
  },
  methods: {
    focusInput(value) {
      if (this.departure.length !== 0) {
        this.resetDepartureAutocomplete();
      }

      if (value.length !== 0) {
        this.handlerArrivalRoute(value);
      }
    },
    handlerRouteTrip(value) {
      this.handlerArrivalRoute(value);
    },
    selectItem(selectItem) {
      const findAirport = this.findAirports.filter(item => {
        if (selectItem.type === 'city') {
          return item.shortCityName === selectItem.shortCityName;
        }
        return item.iataCode === selectItem.iataCode;
      })[0];

      this.updateArrivalValue(this.setInputLabel(findAirport));
    },
    setInputLabel(item) {
      return `${item.city} (${typeof item.iataCode === 'undefined' ? item.shortCityName : item.iataCode})`;
    },
    ...mapActions({
      handlerArrivalRoute: 'searchPage/handlerArrivalRoute',
      updateArrivalValue: 'searchPage/updateArrivalValue',
      resetDepartureAutocomplete: 'searchPage/resetDepartureAutocompleteResult'
    })
  }
};
