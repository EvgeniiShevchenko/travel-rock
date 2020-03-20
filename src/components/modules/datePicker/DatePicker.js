import constants from './constants.js'
import ClickOutside from 'vue-click-outside'

export default {
  name: 'DatePicker',

  props: {
    startPlaceholderText: {
      type: String,
      default:'Depart'
    },
    endPlaceholderText: {
      type: String,
      default:'Return'
    },
    startDate: {
      type:Date,
      default: function () {
        return new Date()
      }
    },
    endDate: {
      type:Date,
      default: function () {
        return new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate())
      }
    },
    locale: {
      type: String,
      default:'eng'
    },
    datePickerMode: {
      type:String,
      default:'single',
      validator: function (value) {
        return ['single', 'range', 'multiple'].indexOf(value) !== -1
      }
    },
  },

  data() {
    return {
      isOpend:false,
      range: null,
      start: '',
      end: '',
      pulledOutValue:null,
      themeStyles: {
        container: 'content-wrapper vc-bg-white',
        header: 'calendar-header',
        weekdays: 'days-row',
        dayContent: 'day-cell-content',
        dayContentDisabled: 'disabled-day',
        bgAccentLow: 'highlight-row',
        bgAccentHigh: 'highlight-circle'
      }
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
    },
    calendarHeaderText() {
      if(this.start=='') {
        return this.startPlaceholderText
      }else {
        return this.endPlaceholderText
      }
    },
  },

  filters: {
    filterDate(value) {
      let monthName = constants.monthNameArray;
      if (value == '') {
        return;
      } else {
        return `${monthName[value.getMonth()]} ${value.getDate()}`
      }
    },
  },

  directives: {
    ClickOutside
  },

  methods: {
    closeDatePicker () { 
      this.isOpend = false;
    },
    getDateRange(event) {
      if(event !== null) {
        this.pulledOutValue = event;
        this.start =  this.pulledOutValue.start
        this.end = ""
      }else {
        this.end =  this.pulledOutValue.end
        this.isOpend = false;
        this.$emit('getValues',{
          startDate:this.pulledOutValue.start,
          endDate: this.pulledOutValue.end,
        })
      }
    },
  },
};