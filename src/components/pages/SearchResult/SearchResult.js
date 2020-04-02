import { mapGetters, mapActions } from 'vuex';
import FilterResult from '../../modules/FilterResult/FilterResult.vue';
import ResultContentHeader from '../../modules/ResultContentHeader/ResultContentHeader.vue';

export default {
  name: 'SearchResult',
  components: {
    FilterResult,
    ResultContentHeader
  },
  data: function() {
    return {
      isFilter: false
    };
  },
  computed: {
    ...mapGetters({
      getFoundFlights: 'resultPage/getFoundFlights'
      //   getActiveFilters: 'resultPage/getActiveFilters'
    })
  },
  methods: {
    toogleFilter() {
      this.isFilter = !this.isFilter;
    },
    ...mapActions({
      setFlightResultData: 'resultPage/setFlightResultData'
    })
  },
  mounted: function() {
    this.setFlightResultData();
  }
};
