import { mapActions, mapGetters } from 'vuex';
import autocomplete from '../FlightAutocomplete/FlightAutocomplete.vue';
import validOnlyLatin from '@/mixins/validOnlyLatin.js';
import setInputLabel from '@/mixins/setInputLabel.js';

export default {
  name: 'FlightDepartureRoute',
  components: {
    autocomplete
  },
  mixins: [setInputLabel],
  data: function() {
    return {
      config: {
        placeholder: 'From',
        id: 'departure'
      }
    };
  },
  computed: {
    hasError() {
      if (this.errorsAutocomplete.location.includes('departure')) return true;

      return false;
    },
    ...mapGetters({
      departure: 'searchPage/getDepartureValue',
      arrival: 'searchPage/getArrivalValue',
      foundAirports: 'searchPage/getResultDepartureAutocomplete',
      errorsAutocomplete: 'searchPage/getErrorsAutocomplete'
    })
  },
  methods: {
    focusInput(value) {
      if (this.arrival) {
        this.resetArrivalAutocomplete();

        if (this.errorsAutocomplete.location.includes('arrival')) {
          this.resetAutocompleteArrivalError();
          this.updateArrivalValue('');
        }
      }

      if (
        this.errorsAutocomplete.name === 'same-things' ||
        this.errorsAutocomplete.name === 'only-latin' ||
        this.errorsAutocomplete.name === 'too-many'
      ) {
        this.resetError();
        this.updateDepartureValue('');

        return;
      }

      this.handlerDepartureRoute(value);
    },

    handlerRouteTrip(value) {
      this.resetAutocompleteDepartureError();

      if (!validOnlyLatin(value) && value) {
        this.handlerError({
          name: 'only-latin',
          status: true,
          message: 'Please enter only latin letters',
          location: [...this.errorsAutocomplete.location, 'departure']
        });
      }

      if (value.length >= 200 && value) {
        this.resetAutocompleteDepartureError();

        this.handlerError({
          name: 'too-many',
          status: true,
          message: 'Maximum number of symbols exceeded',
          location: [...this.errorsAutocomplete.location, 'departure']
        });
      }

      this.handlerDepartureRoute(value);
    },

    resetRoutFlight() {
      if (
        this.errorsAutocomplete.name === 'same-things' ||
        this.errorsAutocomplete.name === 'only-latin' ||
        this.errorsAutocomplete.name === 'too-many'
      ) {
        if (this.errorsAutocomplete.location.includes('departure')) {
          this.resetAutocompleteDepartureError();
          this.updateDepartureValue('');
        }
        if (this.errorsAutocomplete.location.includes('arrival')) {
          this.resetAutocompleteArrivalError();
          this.updateArrivalValue('');
        }

        return;
      }

      this.reverseRouteTrip({ departureValue: this.departure, arrivalValue: this.arrival });
    },

    selectItem(selectItem) {
      if (this.arrival === this.setInputLabel(selectItem)) {
        this.handlerError({
          name: 'same-things',
          status: true,
          message: 'Departure and arrival airports must be different',
          location: [...this.errorsAutocomplete.location, 'global']
        });
      }

      this.updateDepartureValue(this.setInputLabel(selectItem));
    },

    ...mapActions({
      resetArrivalAutocomplete: 'searchPage/resetArrivalAutocompleteResult',
      handlerDepartureRoute: 'searchPage/handlerDepartureRoute',
      updateDepartureValue: 'searchPage/updateDepartureValue',
      updateArrivalValue: 'searchPage/updateArrivalValue',
      handlerError: 'searchPage/handlerAutocompleteError',
      reverseRouteTrip: 'searchPage/reverseRouteTrip',
      resetError: 'searchPage/resetAutocompleteError',
      resetAutocompleteDepartureError: 'searchPage/resetAutocompleteDepartureError',
      resetAutocompleteArrivalError: 'searchPage/resetAutocompleteArrivalError'
    })
  }
};
