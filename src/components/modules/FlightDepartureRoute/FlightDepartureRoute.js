import { mapActions, mapGetters } from 'vuex';
import autocompleteInput from '../AutocompleteInput/AutocompleteInput.vue';

export default {
  name: 'FlightDepartureRoute',
  props: {
    autocompleteConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    autocompleteInput
  },
  computed: {
    ...mapGetters({
      departure: 'searchPage/getDepartureValue',
      arrival: 'searchPage/getArrivalValue',
      foundDepartureAirports: 'searchPage/getResultDepartureAutocomplete',
      foundArrivalAirports: 'searchPage/getResultArrivalAutocomplete',
      isAutocompleteLoading: 'searchPage/getStatusAutocomplete'
    })
  },
  methods: {
    sayHay() {
      console.log('kmsdmds');
    },
    defineClassForItem(item) {
      let styleClass = '';

      styleClass = item.type === 'airport' ? 'autocomplete-item' : 'autocomplete-item is-group-mark';

      if (item.groupLabel.length === 0) {
        styleClass = styleClass + ' ' + 'is-single-option';
      }

      return styleClass;
    },
    reverseRoute() {
      const departure = this.departure;
      const arrival = this.arrival;

      this.handlerDepartureRoute(arrival);
      this.handlerArrivalRoute(departure);
    },
    activeInput(e) {
      const value = e.target.value;

      if (this.arrival.length !== 0) {
        this.resetArrivalAutocomplete();
      }

      if (value.length !== 0) {
        this.handlerDepartureRoute(value);
      }
    },
    selectItem(idPlace) {
      let findAirport = [];

      findAirport = this.foundDepartureAirports.filter(item => {
        return item.iataCode === idPlace;
      })[0];

      this.updateDepartureValue(this.autocompleteConfig.setInputLabel(findAirport));
    },
    documentClick() {
      this.resetDepartureAutocomplete();
      this.resetArrivalAutocomplete();
    },
    handlerDepartRouteTrip(e) {
      const value = e.target.value;

      this.handlerDepartureRoute(value);
    },
    ...mapActions({
      handlerDepartureRoute: 'searchPage/handlerDepartureRoute',
      handlerArrivalRoute: 'searchPage/handlerArrivalRoute',
      updateDepartureValue: 'searchPage/updateDepartureValue',
      updateArrivalValue: 'searchPage/updateArrivalValue',
      resetDepartureAutocomplete: 'searchPage/resetDepartureAutocompleteResult',
      resetArrivalAutocomplete: 'searchPage/resetArrivalAutocompleteResult'
    })
  },
  mounted: function() {
    document.addEventListener('click', this.documentClick);
  },
  destroyed() {
    document.removeEventListener('click', this.documentClick);
  }
};
