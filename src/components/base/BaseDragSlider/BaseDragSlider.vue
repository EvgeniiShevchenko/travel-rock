<template>
  <div>
    <div class="general">
      <p class="title">{{ config.title }}</p>
      <button
        v-show="handlerChange"
        class="reset"
        type="button"
        @click="$emit('reset-filter')"
      >reset</button>
    </div>
    <slot class="detail" name="detail" />
    <vue-slider
      :value="sliderValue"
      class="slider"
      eventType="auto"
      :min="getMinValue(sliderData)"
      :max="defaultValue[1]"
      :contained="true"
      :dotSize="config.dotSize"
      tooltip="none"
      @change="handlerSliderChange"
      @drag-end="handlerSliderEnd"
    >
      <template v-slot:dot>
        <slot name="dot" />
      </template>
    </vue-slider>
  </div>
</template>

<script src="./BaseDragSlider.js"></script>

<style lang="scss" src="./BaseDragSlider.scss" scoped></style>