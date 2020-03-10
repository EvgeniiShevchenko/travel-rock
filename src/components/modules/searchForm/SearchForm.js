import datePicker from '@/components/modules/datePicker/DatePicker.vue';

export default {
  name: 'searchForm',
  components: {
    datePicker
  },
  filters: {
    filterDate(value) {
      let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      if (value == undefined) {
        return;
      } else {
        return `${monthName[value.getMonth()]} ${value.getDate()}`
      }
    }
  },
  data() {
    return {
      isActive: false,
      departLabel: 'Depart',
      returnLabel: 'Return',
      departDate: '',
      returnDate: '',
      flightTripText: ''
    };
  },
  computed: {
    determineDateText() {
      if (this.departDate !== '') {
        return (this.flightTripText = this.returnLabel);
      }
    }
  },
  methods: {
    showCalendar() {
      this.isActive = !this.isActive;
      this.departDate = this.returnDate = '';
      this.$emit('showCalendar', this.isActive);
    },
    onDrag(data) {
      this.departDate = data.dep;
      this.returnDate = data.ret;
    },
    isClosed(data) {
      return (this.isActive = data.closed);
    }
  }
};
