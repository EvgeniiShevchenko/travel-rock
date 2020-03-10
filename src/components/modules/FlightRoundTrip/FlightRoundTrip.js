import flightDepartureRoute from '../FlightDepartureRoute/FlightDepartureRoute.vue';
import flightArrivalRoute from '../FlightArrivalRoute/FlightArrivalRoute.vue';

export default {
  name: 'FlightAutocomplete',
  components: {
    flightDepartureRoute,
    flightArrivalRoute
  },
  data: function() {
    return {
      departureConfig: {
        placeholder: 'From',
        id: 'departure',
        setOptionsLabel: this.setOptionsLabel,
        setGroupLabel: this.setGroupLabel,
        setInputLabel: this.setInputLabel
      },
      arrivalConfig: {
        placeholder: 'To',
        id: 'arrival',
        setOptionsLabel: this.setOptionsLabel,
        setGroupLabel: this.setGroupLabel,
        setInputLabel: this.setInputLabel
      }
    };
  },
  methods: {
    setOptionsLabel(props) {
      return `${props.name} (${props.iataCode})`;
    },
    setInputLabel(props) {
      return `${props.city} (${props.iataCode})`;
    },
    setGroupLabel(props) {
      return `${props.city}, ${props.shortCityName} (All Airports)`;
    }
  }
};
