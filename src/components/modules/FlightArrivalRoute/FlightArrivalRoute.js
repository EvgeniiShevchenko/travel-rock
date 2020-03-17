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
        placeholder: 'To',
        id: 'arrival'
      }
    };
  },
  computed: {
    ...mapGetters({
      arrival: 'searchPage/getArrivalValue',
      departure: 'searchPage/getDepartureValue',
      foundAirports: 'searchPage/getResultArrivalAutocomplete'
    })
  },
  methods: {
    focusInput(value) {
      this.resetError();

      if (this.departure.length) this.resetDepartureAutocomplete();

      if (value.length) this.handlerArrivalRoute(value);
    },
    handlerRouteTrip(value) {
      this.handlerArrivalRoute(value);
    },
    selectItem(selectItem) {
      if (this.departure === this.setInputLabel(selectItem)) {
        this.handlerError({
          name: 'same-things',
          status: true,
          message: 'Departure and arrival airports must be different'
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
