export default {
  name: 'TabItem',
  props: {
    selected: {
      Type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isActive: true,
    };
  },
  mounted() {
    this.isActive = this.selected;
  },
  computed: {
    title() {
      return this.$slots.navBtn[0].elm.outerHTML;
    },
  }
};
