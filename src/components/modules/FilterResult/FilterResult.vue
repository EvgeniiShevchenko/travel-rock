<template>
  <div>
    <p>{{ getFoundFlights | maximus }}</p>
    <DragSlider :config="priceSliderConfig" @range-change="changePrice" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DragSlider from "../../base/BaseDragSlider/BaseDragSlider.vue";

export default {
  name: "FilterResult",
  components: {
    DragSlider
  },
  data: function() {
    return {
      priceSliderConfig: {
        max: 300
      }
    };
  },
  computed: {
    ...mapGetters({
      getFoundFlights: "resultPage/getFoundFlights"
    })
  },
  mounted: function() {
    console.log(this.getFoundFlights);
    // console.log(this.maximus());
  },
  filters: {
    maximus: function(e) {
      console.log(e);
      // const test = [{num: 20},{num: 3},{num: 10}];
      // const minValue = test.
      // console.log(
      //   Math.max.apply(
      //     Math,
      //     this.getFoundFlights.map(item => {
      //       return item.price;
      //     })
      //   )
      // );
      const maxValue = Math.max.apply(
        Math,
        e.map(item => {
          return item.price;
        })
      );

      this.priceSliderConfig.max = maxValue;

      return maxValue;
    }
  },
  methods: {
    changePrice(e) {
      // const value = e.target.value;
      console.log(e);
    }
  }
};
</script>

<style lang="scss" scoped></style>