export default {
  name: "Dropdown",
  props: {
    outputText: {
      type: String,
      required: false,
      default: ''
    }
  },
  data: function () {
    return {
      isActive: false
    };
  },
  methods: {
    dropdownToggle: function () {
      this.isActive = !this.isActive;
    }
  }
};
