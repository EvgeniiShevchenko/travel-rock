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
      this.resetError();

      if (this.departure.length) this.resetDepartureAutocomplete();

      if (value.length) this.handlerArrivalRoute(value);
    },

    handlerRouteTrip(value) {
      if (!validOnlyLatin(value) && value) {
        this.handlerError({
          name: 'only-latin',
          status: true,
          message: 'Please enter only latin letters',
          location: [...this.errorsAutocomplete.location, 'arrival']
        });
      } else {
        this.resetError();
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

        return;
      }

      this.updateArrivalValue(this.setInputLabel(selectItem));
    },
    ...mapActions({
      resetDepartureAutocomplete: 'searchPage/resetDepartureAutocompleteResult',
      handlerArrivalRoute: 'searchPage/handlerArrivalRoute',
      updateArrivalValue: 'searchPage/updateArrivalValue',
      handlerError: 'searchPage/handlerAutocompleteError',
      resetError: 'searchPage/resetAutocompleteError'
    })
  }
};
