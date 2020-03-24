import ClickOutside from 'vue-click-outside'
export default {
  name: 'DropDown',
  props: {
    outputText: {
      type: String,
      default: ''
    },
    isOpened: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    formFieldToggle: function () {
      this.isOpened = !this.isOpened;
      this.$emit('toggle', this.isOpened);
    },
    closeDropdown: function () {
      this.isOpened = false;
      this.$emit('toggle', this.isOpened);
    },
  },
  directives: {
    ClickOutside
  }
};
