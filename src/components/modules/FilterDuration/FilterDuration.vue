<template>
  <DragSlider
    :sliderData="getFoundFlights.map(item => item.duration)"
    :sliderValue="getFilterDuration"
    :config="durationSliderConfig"
    @range-change="changeDuration"
    @initial-duration="initialsSlider"
    @reset-filter="resetDuration"
    @active-filter="setFilter('duration')"
    @inactive-filter="deleteFilter('duration')"
  >
    <template slot="dot">
      <div class="slider-dot" />
    </template>
    <template slot="detail">
      <div class="detail">
        <p>Flight duration</p>
        <p
          :class="{'default-value': getFilterDuration === getFilterParams.duration.maxDuration}"
        >{{ `${getFilterDuration === getFilterParams.duration.maxDuration ? 'any' : getFilterDuration}` }}</p>
      </div>
    </template>
  </DragSlider>
</template>

<script src="./FilterDuration.js"></script>

<style lang="scss" src="./FilterDuration.scss" scoped></style>