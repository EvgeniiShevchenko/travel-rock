import TabsContainer from '@/components/modules/TabsContainer/TabsContainer.vue';
import TabItem from '@/components/modules/TabItem/TabItem.vue';
import FlightRoundTrip from '../FlightRoundTrip/FlightRoundTrip.vue';
import NavigationBar from '../NavigationBar/NavigationBar.vue';
import DropDown from '../Dropdown/Dropdown.vue';
import Counter from '../Counter/Counter.vue';
import Select from '../Select/Select.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'searchForm',
  data() {
    return {
      cabinTypes: ['Economy', 'Premium Economy', 'Business', 'First'],
      dropDownOpen: false,
      adults: 1,
      children: 0,
      infants: 0,
      cabinType: 'Economy',
      dropdownValidationMsg: '',
      maxTotalPaxCount: 9
    }
  },
  components: {
    TabsContainer,
    TabItem,
    FlightRoundTrip,
    NavigationBar,
    DropDown,
    Counter,
    Select
  },
  computed: {
    ...mapGetters({ getNavigationTabName: 'searchPage/getNavigationTabName' }),
    totalPaxCount() {
      return this.adults + this.children + this.infants;
    },
    passengerInfoSummary() {
      let paxString = this.totalPaxCount > 1 ? ' Passengers' : ' Passenger';
      return this.totalPaxCount + paxString + ', ' + this.cabinType;
    },
    minAdults() {
      return this.infants > 1 ? this.infants : 1;
    },
    maxAdults() {
      return this.maxTotalPaxCount - this.children - this.infants;
    },
    maxChildren() {
      return this.maxTotalPaxCount - this.adults - this.infants;
    },
    maxInfants() {
      let max = this.maxTotalPaxCount - this.adults - this.children;
      return this.adults < max ? this.adults : max;
    },
  },
  methods: {
    dropDownToggle() {
      this.dropDownOpen = !this.dropDownOpen;
    },
    setAdultsCount(count) {
      this.adults = count;
    },
    setChildrenCount(count) {
      this.children = count;
    },
    setInfantsCount(count) {
      this.infants = count;
    },
    setCabinType(type) {
      this.cabinType = type;
    }
  }
}
