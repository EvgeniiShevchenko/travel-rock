import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'FlightAutocomplete',
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
    defineClassForInput() {
      let styleClass = '';

      styleClass =
        styleClass + this.autocompleteConfig.id === 'departure'
          ? 'autocomplete is-reverse-active is-departure-radius'
          : 'autocomplete is-arrival-radius';

      return styleClass;
    },
    reverseRoute() {
      const departure = this.departure;
      const arrival = this.arrival;

      this.handlerRoute({ id: 'departure', value: arrival });
      this.handlerRoute({ id: 'arrival', value: departure });
    },
    activeInput(e) {
      const value = e.target.value;

      if (this.autocompleteConfig.id === 'departure' && this.arrival.length !== 0) {
        this.resetArrivalAutocomplete();
      } else if (this.autocompleteConfig.id === 'arrival' && this.departure.length !== 0) {
        this.resetDepartureAutocomplete();
      }

      if (value.length !== 0) {
        this.handlerRoute({ id: this.autocompleteConfig.id, value });
      }
    },
    selectItem(id) {
      let findAirport = [];

      if (this.autocompleteConfig.id === 'departure') {
        findAirport = this.foundDepartureAirports.filter(item => {
          return item.iataCode === id;
        })[0];

        this.updateDepartureValue(this.autocompleteConfig.setInputLabel(findAirport));
      } else {
        findAirport = this.foundArrivalAirports.filter(item => {
          return item.iataCode === id;
        })[0];

        this.updateArrivalValue(this.autocompleteConfig.setInputLabel(findAirport));
      }
    },
    documentClick() {
      this.resetDepartureAutocomplete();
      this.resetArrivalAutocomplete();
    },
    handlerDepartRoute(e) {
      const id = e.target.id;
      const value = e.target.value;

      this.handlerRoute({ id, value });
    },
    getInputValue(id) {
      switch (id) {
        case 'departure':
          return this.departure;
        case 'arrival':
          return this.arrival;
        default:
          break;
      }
    },
    getSearchResult(id) {
      switch (id) {
        case 'departure':
          return this.foundDepartureAirports;
        case 'arrival':
          return this.foundArrivalAirports;
        default:
          break;
      }
    },
    ...mapActions({
      handlerRoute: 'searchPage/handlerRoute',
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
