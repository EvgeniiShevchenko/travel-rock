import searchBar from '../Search-Bar/Search-Bar.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'searchForm',
  components: {
    searchBar
  },
  computed: {
    ...mapGetters({ activeTab: 'searchPage/getSearchTabName' })
  }
};
