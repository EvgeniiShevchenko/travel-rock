import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'FlightDepartureRoute',
  props: {
    config: {
      type: Object,
      require: true
    },
    findAirports: {
      type: Array,
      required: true
    },
    inputValue: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      foundDepartureAirports: 'searchPage/getResultDepartureAutocomplete'
    })
  },
  methods: {
    defineClassForItem(item) {
      let styleClass = '';

      styleClass = item.type === 'airport' ? 'autocomplete-item' : 'autocomplete-item is-group-mark';

      if (item.groupLabel.length === 0) {
        styleClass = `${styleClass} is-single-option`;
      }

      return styleClass;
    },
    documentClick() {
      this.resetAllAutocompleteResult();
    },
    getOptionDescription(item) {
      if (item.type === 'airport') {
        return this.setOptionsLabel(item);
      }
      return this.setGroupLabel(item);
    },
    setOptionsLabel(item) {
      return `${item.name} (${item.iataCode})`;
    },
    setGroupLabel(item) {
      return `${item.city}, ${item.shortCityName} (All Airports)`;
    },
    ...mapActions({
      resetAllAutocompleteResult: 'searchPage/resetAllAutocompleteResult'
    })
  },
  mounted: function() {
    document.addEventListener('click', this.documentClick);
  },
  destroyed() {
    document.removeEventListener('click', this.documentClick);
  }
};
