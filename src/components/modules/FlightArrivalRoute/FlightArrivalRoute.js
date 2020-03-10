import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'FlightArrivalRoute',
  props: {
    autocompleteConfig: {
      type: Object,
      required: true
    }
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

      if (this.departure.length !== 0) {
        this.resetDepartureAutocomplete();
      }

      if (value.length !== 0) {
        this.handlerArrivalRoute(value);
      }
    },
    selectItem(idPlace) {
      let findAirport = [];

      findAirport = this.foundArrivalAirports.filter(item => {
        return item.iataCode === idPlace;
      })[0];

      this.updateArrivalValue(this.autocompleteConfig.setInputLabel(findAirport));
    },
    documentClick() {
      this.resetDepartureAutocomplete();
      this.resetArrivalAutocomplete();
    },
    handlerArrivalRouteTrip(e) {
      const value = e.target.value;

      this.handlerArrivalRoute(value);
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
