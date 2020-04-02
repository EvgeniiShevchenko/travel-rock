import { mapGetters } from 'vuex';

export default {
  name: 'ResultContentHeader',
  computed: {
    ...mapGetters({
      getActiveFilters: 'resultPage/getActiveFilters'
    })
  }
};
