import flightDepartureRoute from '../FlightDepartureRoute/FlightDepartureRoute.vue';
import flightArrivalRoute from '../FlightArrivalRoute/FlightArrivalRoute.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'FlightAutocomplete',
  computed: {
    ...mapGetters({ errorsAutocomplete: 'searchPage/getErrorsAutocomplete' })
  },
  components: {
    flightDepartureRoute,
    flightArrivalRoute
  }
};
