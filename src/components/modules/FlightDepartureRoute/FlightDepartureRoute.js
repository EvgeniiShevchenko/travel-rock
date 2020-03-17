import { mapActions, mapGetters } from 'vuex';
import autocomplete from '../FlightAutocomplete/FlightAutocomplete.vue';
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
      foundAirports: 'searchPage/getResultDepartureAutocomplete'
    })
  },
  methods: {
    focusInput(value) {
      this.resetError();

      if (this.arrival.length) this.resetArrivalAutocomplete();

      if (value.length) this.handlerDepartureRoute(value);
    },
    handlerRouteTrip(value) {
      this.handlerDepartureRoute(value);
    },
    selectItem(selectItem) {
      if (this.arrival === this.setInputLabel(selectItem)) {
        this.handlerError({
          name: 'same-things',
          status: true,
          message: 'Departure and arrival airports must be different'
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
