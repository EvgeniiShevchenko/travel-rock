import selectAutocomplete from '../FlightAutocomplete/FlightAutocomplete.vue';

export default {
  name: 'FlightAutocomplete',
  components: {
    selectAutocomplete
  },
  data: function() {
    return {
      multiselectConfigDeparture: {
        name: 'departure',
        placeholder: 'Pick actions',
        idSelect: 'departure',
        setListLabel: props => `(${props.option.iataCode}) + ${props.option.city}, ${props.option.name}`,
        setInputLabel: props => `${props.option.city} +++ (${props.option.iataCode})`
      },
      multiselectConfigArrival: {
        name: 'arrival',
        placeholder: 'Pick actions',
        idSelect: 'arrival',
        setListLabel: props => `(${props.option.iataCode}) + ${props.option.city}, ${props.option.name}`,
        setInputLabel: props => `${props.option.city} (${props.option.iataCode})`
      }
    };
  }
};
