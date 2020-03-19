export default {
  name: 'DropDown',
  props: {
    outputText: {
      type: String,
      required: false
    }
  },
  data: function() {
    return {
      isActive: false
    };
  },
  methods: {
    formFieldToggle: function () {
      this.isActive = !this.isActive;
    }
  }
};
