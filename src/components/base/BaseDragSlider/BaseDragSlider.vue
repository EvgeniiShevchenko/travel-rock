<template>
  <div>
    <h1>{{ value }}</h1>
    <vue-slider
      v-model="value"
      eventType="auto"
      :min="config.min"
      :max="config.max"
      @change="$emit('range-change', $event)"
    />
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  name: "BaseDragSlider",
  components: {
    VueSlider
  },
  props: {
    config: {
      type: Object,
      default: function() {
        return {
          min: 0,
          max: 100
        };
      }
    }
  },
  data: function() {
    return {
      value: 0
    };
  },
  methods: {
    clearErrorMsg() {
      console.log("hello");
    }
  }
};
</script>

<style lang="scss" scoped></style>