export default {
  name: 'TabsContainer',
  data() {
    return {
      navItemsArr: []
    };
  },
  mounted() {
    this.navItemsArr = this.$children; // указываем сколько нав-айтемов будет в списке
  },
  methods: {
    selectMenuItem(navItem) {
      this.navItemsArr.forEach(item => {
        // Проверяем переданый елемент. Если он совпадает с элементом которым мы пробегаемся в форыче то тогда присваиваем isActive TRUE
        item.isActive = item == navItem;
      });
    }
  }
};
