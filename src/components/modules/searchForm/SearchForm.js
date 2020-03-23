import TabsContainer from '@/components/modules/TabsContainer/TabsContainer.vue';
import TabItem from '@/components/modules/TabItem/TabItem.vue';
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
    TabsContainer,
    TabItem,
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
