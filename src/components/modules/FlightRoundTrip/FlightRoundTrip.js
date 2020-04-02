import flightDepartureRoute from '../FlightDepartureRoute/FlightDepartureRoute.vue';
import flightArrivalRoute from '../FlightArrivalRoute/FlightArrivalRoute.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'FlightRoundTrip',
  components: {
    flightDepartureRoute,
    flightArrivalRoute
  },
  computed: {
    handlerError() {
      if (this.errorsAutocomplete.location.includes('global')) return true;

      return false;
    },
    ...mapGetters({ errorsAutocomplete: 'searchPage/getErrorsAutocomplete' })
  }
};
