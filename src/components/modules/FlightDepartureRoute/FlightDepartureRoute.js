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
      if (this.arrival.length) this.resetArrivalAutocomplete();

      if (value.length) this.handlerDepartureRoute(value);
    },
    handlerRouteTrip(value) {
      this.handlerDepartureRoute(value);
    },
    selectItem(selectItem) {
      if (selectItem.type === 'city') {
        if (this.arrival === this.setInputLabel(selectItem)) {
          return;
        }
      } else {
        if (this.arrival === this.setInputLabel(selectItem)) {
          return;
        }
      }

      this.updateDepartureValue(this.setInputLabel(selectItem));
    },
    ...mapActions({
      handlerDepartureRoute: 'searchPage/handlerDepartureRoute',
      updateDepartureValue: 'searchPage/updateDepartureValue',
      resetArrivalAutocomplete: 'searchPage/resetArrivalAutocompleteResult',
      reverseRouteTrip: 'searchPage/reverseRouteTrip'
    })
  }
};
