import Multiselect from 'vue-multiselect';

export default {
  name: 'Select',
  components: { Multiselect },
  data() {
    return {
      isActive: false,
      value: 'Economy',
    }
  },
  props: {
    options: {
      type: [],
      default: ['Economy', 'Premium Economy', 'Business', 'First'],
    }
  },
  methods: {
    arrowToggle: function () {
      this.isActive = !this.isActive;
    },
    changeValue() {
      this.$emit('changeValue', this.value);
    }
  }
}