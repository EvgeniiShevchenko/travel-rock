import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';
import getMaxValue from '@/mixins/getMaxValueFromArray.js';
import getMinValue from '@/mixins/getMinValueFromArray.js';

export default {
  name: 'BaseDragSlider',
  components: {
    VueSlider
  },
  mixins: [getMaxValue, getMinValue],
  data: function() {
    return {
      defaultValue: ''
    };
  },
  props: {
    sliderData: {
      type: Array,
      required: true
    },
    sliderValue: {
      type: [Array, Number],
      required: true
    },
    config: {
      type: Object,
      default: function() {
        return {
          single: true,
          subTitle: '',
          dotSize: 14
        };
      }
    }
  },
  computed: {
    handlerChange() {
      if (this.config.single) {
        return JSON.stringify(this.sliderValue) === JSON.stringify(this.defaultValue[1]) ? false : true;
      } else {
        return JSON.stringify(this.sliderValue) === JSON.stringify(this.defaultValue) ? false : true;
      }
    }
  },
  methods: {
    handlerSliderChange(selectValue) {
      this.$emit('range-change', selectValue);
    },

    handlerSliderEnd() {
      const isActiveSlider =
        JSON.stringify(this.sliderValue) ===
        JSON.stringify(this.config.single ? this.defaultValue[1] : this.defaultValue)
          ? false
          : true;

      isActiveSlider ? this.$emit('active-filter') : this.$emit('inactive-filter');
    }
  },
  mounted: function() {
    this.defaultValue = [
      this.getMinValue(this.sliderData),
      this.getMaxValue(this.sliderData) + (this.config.single ? 1 : null)
    ];

    this.$nextTick(() => {
      this.$emit('initial-duration', [
        this.getMinValue(this.sliderData),
        this.getMaxValue(this.sliderData) + (this.config.single ? 1 : null)
      ]);
    });
  }
};
