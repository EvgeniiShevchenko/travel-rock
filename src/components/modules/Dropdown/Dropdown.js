import ClickOutside from 'vue-click-outside'
export default {
  name: 'DropDown',
  data() {
    return {
      isOpen:false
    }
  },
  props: {
    outputText: {
      type: String,
      default: ''
    },
   
  },
  methods: {
    closeDropdown() {
      return this.isOpen = false;
    }
  },
  directives: {
    ClickOutside
  }
};
