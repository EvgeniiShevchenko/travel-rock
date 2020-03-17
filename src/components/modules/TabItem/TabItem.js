export default {
  name: 'TabItem',
  props: {
    selected: {
      default: false
    }
  },
  data() {
    return {
      nameComponent: 'TabItem',
      isActive: false,
      hidenNavButton: null
    };
  },
  mounted() {
    this.isActive = this.selected;
  },
  beforeDestroy() {
    this.hidenNavButton = true;
  },
  computed: {
    title() {
      
      return this.$slots.navBtn[0].elm.outerHTML;
    }
  }
};
