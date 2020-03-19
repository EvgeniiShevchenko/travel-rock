export default {
  methods: {
    setInputLabel(item) {
      return `${item.city} (${typeof item.iataCode === 'undefined' ? item.shortCityName : item.iataCode})`;
    }
  }
};
