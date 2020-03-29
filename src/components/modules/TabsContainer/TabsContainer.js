export default {
  name: 'TabsContainer',
  data() {
    return {
      navItemsArr: [],

    };
  },
  mounted() {
    this.navItemsArr = this.$children;

    // this.navItemsArr[0]._props.selected = this.propsChecking(this.navItemsArr);
  },
  methods: {
    selectMenuItem(navItem) {
      this.navItemsArr.forEach(item => {
        item.isActive = item == navItem;
      });
    },
    
  },
  
};
