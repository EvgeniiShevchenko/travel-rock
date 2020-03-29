import { mapActions, mapGetters } from 'vuex';
import autocomplete from '../FlightAutocomplete/FlightAutocomplete.vue';
import validOnlyLatin from '@/mixins/validOnlyLatin.js';
import setInputLabel from '@/mixins/setInputLabel.js';

export default {
  name: 'FlightArrivalRoute',
  components: {
    autocomplete
  },
  mixins: [setInputLabel],
  data: function() {
    return {
      config: {
        placeholder: 'To',
        id: 'arrival'
      }
    };
  },
  computed: {
    ...mapGetters({
      arrival: 'searchPage/getArrivalValue',
      departure: 'searchPage/getDepartureValue',
      foundAirports: 'searchPage/getResultArrivalAutocomplete',
      errorsAutocomplete: 'searchPage/getErrorsAutocomplete'
    })
  },
  methods: {
    focusInput(value) {
      if (this.departure.length) {
        this.resetDepartureAutocomplete();
        if (this.errorsAutocomplete.location.includes('departure')) {
          this.resetAutocompleteDepartureError();
          this.updateDepartureValue('');
        }
      }

      if (
        this.errorsAutocomplete.name === 'same-things' ||
        this.errorsAutocomplete.name === 'only-latin' ||
        this.errorsAutocomplete.name === 'too-many'
      ) {
        this.resetError();
        this.updateArrivalValue('');
        return;
      }

      this.handlerArrivalRoute(value);
    },

    handlerRouteTrip(value) {
      this.resetAutocompleteArrivalError();

      if (!validOnlyLatin(value) && value) {
        if (!this.errorsAutocomplete.location.includes('arrival')) {
          this.handlerError({
            name: 'only-latin',
            status: true,
            message: 'Please enter only latin letters',
            location: [...this.errorsAutocomplete.location, 'arrival']
          });
        }
      }

      if (value.length >= 200 && value) {
        this.resetAutocompleteArrivalError();

        this.handlerError({
          name: 'too-many',
          status: true,
          message: 'Maximum number of symbols exceeded',
          location: [...this.errorsAutocomplete.location, 'arrival']
        });
      }

      this.handlerArrivalRoute(value);
    },

    selectItem(selectItem) {
      if (this.departure === this.setInputLabel(selectItem)) {
        this.handlerError({
          name: 'same-things',
          status: true,
          message: 'Departure and arrival airports must be different',
          location: [...this.errorsAutocomplete.location, 'global']
        });
      }

      this.updateArrivalValue(this.setInputLabel(selectItem));
    },
    ...mapActions({
      resetDepartureAutocomplete: 'searchPage/resetDepartureAutocompleteResult',
      handlerArrivalRoute: 'searchPage/handlerArrivalRoute',
      updateArrivalValue: 'searchPage/updateArrivalValue',
      updateDepartureValue: 'searchPage/updateDepartureValue',
      handlerError: 'searchPage/handlerAutocompleteError',
      resetError: 'searchPage/resetAutocompleteError',
      resetAutocompleteArrivalError: 'searchPage/resetAutocompleteArrivalError',
      resetAutocompleteDepartureError: 'searchPage/resetAutocompleteDepartureError'
    })
  }
};
