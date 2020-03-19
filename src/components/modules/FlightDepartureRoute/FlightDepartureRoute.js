import { mapActions, mapGetters } from 'vuex';
import autocomplete from '../FlightAutocomplete/FlightAutocomplete.vue';
import validOnlyLatin from '@/mixins/validOnlyLatin.js';
import setInputLabel from '@/mixins/setInputLabel.js';
import reverseRoute from '@/mixins/reverseRouteTrip.js';

export default {
  name: 'FlightDepartureRoute',
  components: {
    autocomplete
  },
  mixins: [setInputLabel, reverseRoute],
  data: function() {
    return {
      config: {
        placeholder: 'From',
        id: 'departure'
      }
    };
  },
  computed: {
    ...mapGetters({
      departure: 'searchPage/getDepartureValue',
      arrival: 'searchPage/getArrivalValue',
      foundAirports: 'searchPage/getResultDepartureAutocomplete',
      errorsAutocomplete: 'searchPage/getErrorsAutocomplete'
    })
  },
  methods: {
    focusInput(value) {
      this.resetError();

      if (this.arrival.length) this.resetArrivalAutocomplete();

      if (value.length) this.handlerDepartureRoute(value);
    },

    handlerRouteTrip(value) {
      if (!validOnlyLatin(value) && value) {
        this.handlerError({
          name: 'only-latin',
          status: true,
          message: 'Please enter only latin letters',
          location: [...this.errorsAutocomplete.location, 'departure']
        });
      } else {
        this.resetError();
      }

      this.handlerDepartureRoute(value);
    },

    selectItem(selectItem) {
      if (this.arrival === this.setInputLabel(selectItem)) {
        this.handlerError({
          name: 'same-things',
          status: true,
          message: 'Departure and arrival airports must be different',
          location: [...this.errorsAutocomplete.location, 'global']
        });

        return;
      }

      this.updateDepartureValue(this.setInputLabel(selectItem));
    },
    ...mapActions({
      resetArrivalAutocomplete: 'searchPage/resetArrivalAutocompleteResult',
      handlerDepartureRoute: 'searchPage/handlerDepartureRoute',
      updateDepartureValue: 'searchPage/updateDepartureValue',
      handlerError: 'searchPage/handlerAutocompleteError',
      reverseRouteTrip: 'searchPage/reverseRouteTrip',
      resetError: 'searchPage/resetAutocompleteError'
    })
  }
};
