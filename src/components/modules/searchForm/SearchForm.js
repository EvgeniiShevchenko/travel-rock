import TabsContainer from '@/components/modules/TabsContainer/TabsContainer.vue';
import TabItem from '@/components/modules/TabItem/TabItem.vue';
import FlightRoundTrip from '../FlightRoundTrip/FlightRoundTrip.vue';
import NavigationBar from '../NavigationBar/NavigationBar.vue';
import DropDown from '../Dropdown/Dropdown.vue';
import Counter from '../Counter/Counter.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'searchForm',
  components: {
    TabsContainer,
    TabItem,
    FlightRoundTrip,
    NavigationBar,
    DropDown,
    Counter
  },
  computed: {
    ...mapGetters({ getNavigationTabName: 'searchPage/getNavigationTabName' })
  }
}
