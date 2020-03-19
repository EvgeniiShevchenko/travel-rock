import Multiselect from 'vue-multiselect';

export default {
  name: 'Select',
  components: { Multiselect },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: String
    }
  },
  methods: {
    changeValue() {
      this.$emit('changeValue', this.value);
    }
  }
}