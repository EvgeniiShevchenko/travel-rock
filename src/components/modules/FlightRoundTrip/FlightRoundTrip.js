import flightDepartureRoute from '../FlightDepartureRoute/FlightDepartureRoute.vue';
import flightArrivalRoute from '../FlightArrivalRoute/FlightArrivalRoute.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'FlightAutocomplete',
  components: {
    flightDepartureRoute,
    flightArrivalRoute
  },
  computed: {
    handlerError() {
      return this.errorsAutocomplete;
    },
    ...mapGetters({ errorsAutocomplete: 'searchPage/getErrorsAutocomplete' })
  },
  methods: {
    defineStyleForError(errorId, originStyle) {
      if (this.errorsAutocomplete.location.length !== 0) {
        return this.errorsAutocomplete.name === 'same-things'
          ? ' has-error-select'
          : this.errorsAutocomplete.location[0] === errorId
          ? ` ${originStyle}`
          : '';
      }
    }
  }
};
