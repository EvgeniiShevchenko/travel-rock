import { mapGetters, mapActions } from 'vuex';
import DragSlider from '../../base/BaseDragSlider/BaseDragSlider.vue';

export default {
  name: 'FilterDuration',
  components: {
    DragSlider
  },
  data: function() {
    return {
      durationSliderConfig: {
        single: true,
        title: 'Duration',
        dotSize: 18
      }
    };
  },
  computed: {
    ...mapGetters({
      getFoundFlights: 'resultPage/getFoundFlights',
      getFilterDuration: 'resultPage/getFilterDuration',
      getFilterParams: 'resultPage/getFilterParams',
      getFilterDefault: 'resultPage/getFilterDefault'
    })
  },
  methods: {
    changeDuration(selectDuration) {
      this.setFilterDuration({ data: selectDuration, single: this.durationSliderConfig.single });
    },
    initialsSlider(initialsData) {
      this.setMinMaxDuration({ single: this.durationSliderConfig.single, data: initialsData });
    },
    resetDuration() {
      this.setByDefaultFilterDuration(this.durationSliderConfig.single);
      this.deleteFilter('duration');
    },
    ...mapActions({
      setMinMaxDuration: 'resultPage/setMinMaxDuration',
      setFilterDuration: 'resultPage/setFilterDuration',
      setByDefaultFilterDuration: 'resultPage/setByDefaultFilterDuration',
      setFilter: 'resultPage/setFilter',
      deleteFilter: 'resultPage/deleteFilter'
    })
  }
};
