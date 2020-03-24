import { mapActions } from 'vuex';

export default {
  name: 'FlightAutocomplete',
  props: {
    config: {
      type: Object,
      require: true
    },
    foundAirports: {
      type: Array,
      required: true
    },
    inputValue: {
      type: String,
      required: true
    }
  },
  computed: {
    defineStyleAutocompleteClass() {
      return this.config.id === 'departure' ? ' is-departure-radius is-reverse-active' : ' is-arrival-radius';
    }
  },
  methods: {
    defineClassForItem(item) {
      let styleClass = item.type !== 'airport' ? ' is-group-mark' : '';

      if (item.groupLabel.length === 0) {
        styleClass = `${styleClass} is-single-option`;
      }

      if (this.foundAirports.length === 1) {
        styleClass = `${styleClass} is-single-option`;
      }

      return styleClass;
    },

    hideAllDropdown() {
      this.resetAllAutocompleteResult();
    },

    getOptionDescription(item) {
      return item.type === 'airport' ? this.setOptionsLabel(item) : this.setGroupLabel(item);
    },

    setOptionsLabel(item) {
      return `${item.name} (${item.iataCode})`;
    },

    setGroupLabel(item) {
      return `${item.city}, ${item.shortCityName} (All Airports)`;
    },

    ...mapActions({
      resetAllAutocompleteResult: 'searchPage/resetAllAutocompleteResult',
      resetError: 'searchPage/resetAutocompleteError'
    })
  },
  mounted: function() {
    document.addEventListener('click', this.hideAllDropdown);
  },
  destroyed() {
    document.removeEventListener('click', this.hideAllDropdown);
  }
};
