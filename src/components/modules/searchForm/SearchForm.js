import TabsContainer from '@/components/modules/TabsContainer/TabsContainer.vue';
import datePicker from '@/components/modules/datePicker/DatePicker.vue';
import TabItem from '@/components/modules/TabItem/TabItem.vue';
import FlightRoundTrip from '@/components/modules/FlightRoundTrip/FlightRoundTrip.vue';
import NavigationBar from '@/components/modules/NavigationBar/NavigationBar.vue';
import DropDown from '@/components/modules/Dropdown/Dropdown.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'searchForm',
  data() {
    return {
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
  },
  computed: {
    ...mapGetters({ getNavigationTabName: 'searchPage/getNavigationTabName' }),
  },
  methods: {
    dateOrdering(data) {
      return this.tripDates = {
        start:data.startDate,
        end:data.endDate
      };
    },
  },
};
