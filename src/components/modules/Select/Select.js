import Multiselect from 'vue-multiselect';

export default {
  name: 'Select',
  components: { Multiselect },
  props: {
    options: {
      type: Array,
      default: () => ['Economy', 'Premium Economy', 'Business', 'First']
    },
  },
  data() {
    return {
      value:this.options[0],
    }
  },
  methods: {
    changeValue() {
      this.$emit('changeValue', this.value);
    }
  },
}