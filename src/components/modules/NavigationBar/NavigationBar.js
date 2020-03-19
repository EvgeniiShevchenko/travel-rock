import NavigationTab from '../NavigationTab/NavigationTab.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'NavigationBar',
  components: {
    NavigationTab
  },
  computed: {
    ...mapGetters({ getNavigationTabName: 'searchPage/getNavigationTabName' })
  },
  methods: {
    defineStyleForTab(tabId) {
      return this.getNavigationTabName === `${tabId}` ? ' active' : '';
    },
    selectTab(tabName) {
      this.switchNavigationTab(tabName);
    },
    ...mapActions({ switchNavigationTab: 'searchPage/switchNavigationTab' })
  }
};
