import ClickOutside from 'vue-click-outside'
export default {
  name: 'DropDown',
  props: {
    outputText: {
      type: String,
      default: '',
    },
    isOpen: false
  },
  methods: {
    formFieldToggle: function () {
      this.isOpen = !this.isOpen;
      this.$emit('toggle', this.isOpen);
    },
    closeDropdown: function () {
      this.isOpen = false;
      this.$emit('toggle', this.isOpen);
    },
  },
  directives: {
    ClickOutside
  }
};
