import { mapActions, mapGetters } from 'vuex';
import Multiselect from 'vue-multiselect';

export default {
  name: 'FlightAutocomplete',
  components: {
    Multiselect
  },
  props: {
    multiselectConfig: {
      type: Object,
      default: () => ({
        name: '',
        placeholder: '',
        idSelect: '',
        setListLabel: ({ city, name, iataCode }) => `${city}, ${name} (${iataCode})`,
        setInputLabel: props => `${props.option.city} (${props.option.iataCode})`
      })
    }
  },
  computed: {
    ...mapGetters({
      departure: 'searchPage/departureName',
      arrival: 'searchPage/arrivalName',
      foundAirports: 'searchPage/getResultAutocomplete',
      isAutocompleteLoading: 'searchPage/getStatusAutocomplete'
    })
  },
  methods: {
    handlerDepartRoute(value, id) {
      this.handlerRoute({ name: id, value: value });
    },
    setSelectedValue(value, id) {
      console.log(id);
      switch (id) {
        case 'departure':
          this.updateDeparturePlace(value);
          this.resetAutocomplete();
          break;
        case 'arrival':
          this.updateArrivalPlace(value);
          break;

        default:
          break;
      }
    },
    setAutocompleteValue(name) {
      switch (name) {
        case 'departure':
          return this.departure;
        case 'arrival':
          return this.arrival;
        default:
          break;
      }
    },
    ...mapActions({
      handlerRoute: 'searchPage/handlerRoute',
      handlerAutocomplete: 'searchPage/handlerAutocomplete',
      updateDeparturePlace: 'searchPage/updateDeparturePlace',
      updateArrivalPlace: 'searchPage/updateArrivalPlace',
      resetAutocomplete: 'searchPage/resetAutocompleteResult'
    })
  },
  updated: function() {
    console.log(1);
  }
};
