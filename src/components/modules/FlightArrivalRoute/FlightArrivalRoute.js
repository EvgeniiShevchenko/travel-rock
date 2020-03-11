import { mapActions, mapGetters } from 'vuex';
import autocomplete from '../Autocomplete/Autocomplete.vue';

export default {
  name: 'FlightArrivalRoute',
  components: {
    autocomplete
  },
  data: function() {
    return {
      arrivalConfig: {
        placeholder: 'To',
        id: 'arrival',
        styleClassName: 'is-arrival-radius'
      }
    };
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
    activeInput(value) {
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
        if (idPlace[1] === 'city') {
          return item.shortCityName === idPlace[0];
        }
        return item.iataCode === idPlace[0];
      })[0];

      this.updateArrivalValue(this.setInputLabel(findAirport));
    },
    documentClick() {
      this.resetDepartureAutocomplete();
      this.resetArrivalAutocomplete();
    },
    handlerArrivalRouteTrip(value) {
      this.handlerArrivalRoute(value);
    },
    setOptionsLabel(props) {
      return `${props.name} (${props.iataCode})`;
    },
    setInputLabel(props) {
      return `${props.city} (${typeof props.iataCode === 'undefined' ? props.shortCityName : props.iataCode})`;
    },
    setGroupLabel(props) {
      return `${props.city}, ${props.shortCityName} (All Airports)`;
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
