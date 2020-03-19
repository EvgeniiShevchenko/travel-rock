import TabsContainer from '@/components/modules/TabsContainer/TabsContainer.vue';
import TabItem from '@/components/modules/TabItem/TabItem.vue';
import DatePicker from '@/components/modules/datePicker/DatePicker.vue'
import FlightRoundTrip from '../FlightRoundTrip/FlightRoundTrip.vue';
import NavigationBar from '../NavigationBar/NavigationBar.vue';
import DropDown from '../Dropdown/Dropdown.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'searchForm',
  components: {
    TabsContainer,
    TabItem,
    DatePicker,
    FlightRoundTrip,
    NavigationBar,
    DropDown
  },
  computed: {
    ...mapGetters({ getNavigationTabName: 'searchPage/getNavigationTabName' })
  }
}
