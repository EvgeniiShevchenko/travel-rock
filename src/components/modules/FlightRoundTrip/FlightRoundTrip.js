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
      return this.errorsAutocomplete;
    },
    ...mapGetters({ errorsAutocomplete: 'searchPage/getErrorsAutocomplete' })
  },
  methods: {
    defineStyleForError(errorId, originStyle) {
      let errorStyle = '';

      if (this.errorsAutocomplete.status === true) {
        errorStyle = this.errorsAutocomplete.name === 'same-things' ? ' has-error-select' : '';

        if (this.errorsAutocomplete.location.length !== 0) {
          for (let locationError of this.errorsAutocomplete.location) {
            if (locationError !== 'global' && locationError === errorId) {
              errorStyle = ` ${originStyle}`;
            }
          }
        }
      }
      return errorStyle;
    }
  }
};
