import { mapGetters, mapActions } from 'vuex';
// components
import TabsContainer from '@/components/modules/TabsContainer/TabsContainer.vue';
import datePicker from '@/components/modules/datePicker/DatePicker.vue';
import TabItem from '@/components/modules/TabItem/TabItem.vue';
import Counter from '@/components/modules/Counter/Counter.vue';
import Select from '@/components/modules/Select/Select.vue';
import FlightRoundTrip from '@/components/modules/FlightRoundTrip/FlightRoundTrip.vue';
import NavigationBar from '@/components/modules/NavigationBar/NavigationBar.vue';
import DropDown from '@/components/modules/Dropdown/Dropdown.vue';
// mixins
import checkRoundTripFromTo from '@/mixins/checkRoundTripFromTo.js';
import checkIsFieldsEmpty from '@/mixins/checkIsFieldsEmpty.js';
import isEmpty from '@/mixins/isEmpty.js';

export default {
  name: 'searchForm',
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
  mixins: [isEmpty, checkRoundTripFromTo, checkIsFieldsEmpty],
  data() {
    return {
      cabinTypes: ['Economy', 'Premium Economy', 'Business', 'First'],
      dropDownOpen: false,
      adults: 1,
      children: 0,
      infants: 0,
      cabinTypeDefault: 'Economy',
      cabinType: 'Economy',
      dropdownValidationMsg: '',
      maxTotalPaxCount: 9,
      tripDates: {
        start: null,
        end: null
      }
    };
  },

  computed: {
    ...mapGetters({
      getNavigationTabName: 'searchPage/getNavigationTabName',
      errorsAutocomplete: 'searchPage/getErrorsAutocomplete',
      getDepartureValue: 'searchPage/getDepartureValue',
      getArrivalValue: 'searchPage/getArrivalValue'
    }),
    totalPaxCount() {
      return this.adults + this.children + this.infants;
    },
    passengerInfoSummary() {
      let paxString = this.totalPaxCount > 1 ? ' Passengers' : ' Passenger';
      if (this.cabinType == '') {
        return this.totalPaxCount + paxString + ', ' + this.cabinTypeDefault;
      } else {
        return this.totalPaxCount + paxString + ', ' + this.cabinType;
      }
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
    }
  },
  methods: {
    searchRequest() {
      const formData = {
        arrival: this.getArrivalValue,
        departure: this.getDepartureValue,
        departDate: this.tripDates.start,
        arrivalDate: this.tripDates.end,
        passengerInfo: {
          adults: this.adults,
          children: this.children,
          infants: this.infants,
          cabinType: this.cabinType
        }
      };

      this.checkRoundTripFromTo();

      if (this.checkIsFieldsEmpty(formData)) return;

      this.$router.push({ path: 'result', query: { ...formData } });

      // che
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
      return (this.tripDates = {
        start: data.startDate,
        end: data.endDate
      });
    },
    ...mapActions({
      handlerError: 'searchPage/handlerAutocompleteError'
    })
  }
};
