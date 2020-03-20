import datePicker from '@/components/modules/datePicker/DatePicker.vue';
import FlightRoundTrip from '../FlightRoundTrip/FlightRoundTrip.vue';
import NavigationBar from '../NavigationBar/NavigationBar.vue';
import DropDown from '../Dropdown/Dropdown.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'searchForm',
  data() {
    return {
      tripDates:{},
    };
  },
  components: {
    datePicker,
    FlightRoundTrip,
    NavigationBar,
    DropDown
  },
  computed: {
    ...mapGetters({ getNavigationTabName: 'searchPage/getNavigationTabName' })
  },
  methods: {
    getTripDates(data) {
      return this.tripDates = {
        start:data.startDate,
        end:data.endDate
      }
    }
  }
};
