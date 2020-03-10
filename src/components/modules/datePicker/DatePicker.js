export default {
  name: 'DatePicker',
  props: {
    flightTripText: {
      type: String,
      default: 'Depart'
    }
  },
  data() {
    return {
      dragValue: null,
      range: null,
      depatLabel: this.departlabel,
      startDate: new Date(),
      endDate: new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate()),

      themeStyles: {
        container: 'content-wrapper vc-bg-white',
        header: 'calendar-header',
        weekdays: 'days-row',
        dayContent: 'day-cell-content',
        dayContentDisabled: 'disabled-day',
        bgAccentLow: 'highlight-row',
        bgAccentHigh: 'highlight-circle'
      },
      start: '',
      end: '',
      drgVal: ''
    };
  },
  computed: {
    layout() {
      return this.$screens({
        default: {
          columns: 1,
          rows: 1,
          isExpanded: true
        },
        desktop: {
          columns: 2,
          rows: 1,
          isExpanded: true
        }
      });
    }
  },
  methods: {
    isDraging(event) {
      this.dragValue = event;
      if (event !== null) {
        this.drgVal = this.dragValue;
        this.start = this.dragValue.start;
        this.$emit('drag', {
          dep: this.start,
          ret: this.end
        });
      } else {
        this.end = this.drgVal.end;
        this.$emit('drag', {
          ret: this.end
        });
      }
      if (this.dragValue == null) {
        if (String(this.start) == String(this.end)) {
          this.end = '';
        }
        this.$emit('drag', {
          dep: this.start,
          ret: this.end
        });
      }
    },
    isClosed() {
      this.$emit('isClosed', {
        closed: false
      });
    }
  }
};
