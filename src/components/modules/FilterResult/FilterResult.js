import { mapGetters, mapActions } from 'vuex';
import FilterDuration from '../FilterDuration/FilterDuration.vue';

export default {
  name: 'FilterResult',
  components: {
    FilterDuration
  },
  computed: {
    ...mapGetters({
      getFilterDefault: 'resultPage/getFilterDefault'
    })
  },
  methods: {
    resetAll() {
      this.setByDefaultFilter(this.getFilterDefault);
    },
    ...mapActions({
      setByDefaultFilter: 'resultPage/setByDefaultFilter'
    })
  }
};
