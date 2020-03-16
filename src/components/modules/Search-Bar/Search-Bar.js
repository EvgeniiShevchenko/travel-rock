import searchTab from '../Search-Tab/Search-Tab.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SearchBar',
  components: {
    searchTab
  },
  computed: {
    defineStyleForFlightsTab() {
      return this.activeTab === 'flights' ? 'flights-tab active' : 'flights-tab';
    },
    defineStyleForHotelsTab() {
      return this.activeTab === 'hotels' ? 'hotels-tab active' : 'hotels-tab';
    },
    ...mapGetters({ activeTab: 'searchPage/getSearchTabName' })
  },
  methods: {
    selectTab(tabName) {
      this.changeSearchTab(tabName);
    },
    ...mapActions({ changeSearchTab: 'searchPage/changeSearchTab' })
  }
};
