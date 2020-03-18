import NavigationTab from '../NavigationTab/NavigationTab.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'NavigationBar',
  components: {
    NavigationTab
  },
  computed: {
    defineStyleForFlightsTab() {
      return this.getNavigationTabName === 'flights' ? ' active' : '';
    },
    defineStyleForHotelsTab() {
      return this.getNavigationTabName === 'hotels' ? ' active' : '';
    },
    ...mapGetters({ getNavigationTabName: 'searchPage/getNavigationTabName' })
  },
  methods: {
    selectTab(tabName) {
      this.switchNavigationTab(tabName);
    },
    ...mapActions({ switchNavigationTab: 'searchPage/switchNavigationTab' })
  }
};
