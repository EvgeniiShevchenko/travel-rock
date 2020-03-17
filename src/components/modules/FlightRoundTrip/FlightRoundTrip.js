import flightDepartureRoute from '../FlightDepartureRoute/FlightDepartureRoute.vue';
import flightArrivalRoute from '../FlightArrivalRoute/FlightArrivalRoute.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'FlightAutocomplete',
  computed: {
    defineStyleForDepartureError() {
      let errorStyle = '';

      if (this.errorsAutocomplete.status === true) {
        errorStyle = this.errorsAutocomplete.name === 'same-things' ? ' has-error-select' : '';

        if (this.errorsAutocomplete.location.length !== 0) {
          for (let locationError of this.errorsAutocomplete.location) {
            if (locationError !== 'global') {
              errorStyle = locationError === 'departure' ? ' has-error-departure' : '';
            }
          }
        }
      }

      return errorStyle;
    },

    defineStyleForArrivalError() {
      let errorStyle = '';

      if (this.errorsAutocomplete.status === true) {
        errorStyle = this.errorsAutocomplete.name === 'same-things' ? ' has-error-select' : '';

        if (this.errorsAutocomplete.location.length !== 0) {
          for (let locationError of this.errorsAutocomplete.location) {
            if (locationError !== 'global') {
              errorStyle = locationError === 'arrival' ? ' has-error-arrival' : '';
            }
          }
        }
      }

      return errorStyle;
    },
    ...mapGetters({ errorsAutocomplete: 'searchPage/getErrorsAutocomplete' })
  },
  components: {
    flightDepartureRoute,
    flightArrivalRoute
  }
};
