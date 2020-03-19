export default {
  name: 'TabsContainer',
  data() {
    return {
      navItemsArr: []
    };
  },
  mounted() {
    this.navItemsArr = this.$children;
  },
  methods: {
    selectMenuItem(navItem) {
      this.navItemsArr.forEach(item => {
        item.isActive = item == navItem;
      });
    }
  }
};
