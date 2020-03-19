import FlightRoundTrip from '../FlightRoundTrip/FlightRoundTrip.vue';
import NavigationBar from '../NavigationBar/NavigationBar.vue';
import DropDown from '../Dropdown/Dropdown.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'searchForm',
  components: {
    FlightRoundTrip,
    NavigationBar,
    DropDown
  },
  computed: {
    ...mapGetters({ getNavigationTabName: 'searchPage/getNavigationTabName' })
  }
};
