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
      if (this.departure.length !== 0) {
        this.resetDepartureAutocomplete();
      }

      if (value.length !== 0) {
        this.handlerArrivalRoute(value);
      }
    },
    handlerRouteTrip(value) {
      this.handlerArrivalRoute(value);
    },
    selectItem(selectItem) {
      if (selectItem.type === 'city') {
        if (this.departure === this.setInputLabel(selectItem)) {
          return;
        }
      } else {
        if (this.departure === this.setInputLabel(selectItem)) {
          return;
        }
      }

      this.updateArrivalValue(this.setInputLabel(selectItem));
    },
    ...mapActions({
      handlerArrivalRoute: 'searchPage/handlerArrivalRoute',
      updateArrivalValue: 'searchPage/updateArrivalValue',
      resetDepartureAutocomplete: 'searchPage/resetDepartureAutocompleteResult'
    })
  }
};
