import TabsContainer from '@/components/modules/TabsContainer/TabsContainer.vue';
import datePicker from '@/components/modules/datePicker/DatePicker.vue';
import TabItem from '@/components/modules/TabItem/TabItem.vue';
import Counter from '@/components/modules/Counter/Counter.vue';
import Select from '@/components/modules/Select/Select.vue';
import FlightRoundTrip from '@/components/modules/FlightRoundTrip/FlightRoundTrip.vue';
import NavigationBar from '@/components/modules/NavigationBar/NavigationBar.vue';
import DropDown from '@/components/modules/Dropdown/Dropdown.vue';
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
      maxTotalPaxCount: 9,
      tripDates:{
        start:null,
        end:null,
      },
    };
  },
  components: {
    datePicker,
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
    },
    dateOrdering(data) {
      return this.tripDates = {
        start:data.startDate,
        end:data.endDate
      };
    },
  }
}
