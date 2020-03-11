export default {
  name: 'Autocomplete',
  props: {
    config: {
      type: Object,
      require: true
    },
    inputValue: {
      type: String,
      required: true
    }
  }
};
