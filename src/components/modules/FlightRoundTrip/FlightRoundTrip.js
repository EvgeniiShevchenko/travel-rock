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
    defineStyleForError(errorId, originStyle, error) {
      let errorStyle = '';

      if (error.status === true) {
        errorStyle = error.name === 'same-things' ? ' has-error-select' : '';

        if (error.location.length !== 0) {
          for (let locationError of error.location) {
            if (locationError !== 'global') {
              errorStyle = locationError === errorId ? ` ${originStyle}` : '';
            }
          }
        }
      }

      return errorStyle;
    }
  }
};
