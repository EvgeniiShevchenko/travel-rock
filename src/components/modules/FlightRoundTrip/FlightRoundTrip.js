import selectAutocomplite from '../FlightAutocomplete/FlightAutocomplete.vue';

export default {
  name: 'FlightAutocomplete',
  components: {
    selectAutocomplite
  },
  data: function() {
    return {
      multiselectConfigDeparture: {
        name: 'departure',
        placeholder: 'Pick actions',
        idSelect: 'departure',
        setListLabel: ({ city, name, iataCode }) => `(${iataCode}) + ${city}, ${name}`,
        setInputLabel: props => `${props.option.city} +++ (${props.option.iataCode})`
      },
      multiselectConfigArrival: {
        name: 'arrival',
        placeholder: 'Pick actions',
        idSelect: 'arrival',
        setListLabel: ({ city, name, iataCode }) => `(${iataCode}) + ${city}, ${name}`,
        setInputLabel: props => `${props.option.city} (${props.option.iataCode})`
      }
    };
  }
};
