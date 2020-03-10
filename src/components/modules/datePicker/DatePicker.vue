<template>
  <div class="date-picker-wrapper">
    <div class="heder-wrapper">
      <span>{{ flightTripText }} date</span>
      <button
        class="close-btn"
        type="button"
        @click="isClosed"
      >
        <svg class="close-icon">
          <use xlink:href="../../../assets/images/icons-sprite.svg#icon-close" />
        </svg>
      </button>
    </div>
    <v-date-picker 
      v-model="range"
      mode="range"
      :min-date="startDate"
      :max-date="endDate"
      :value="startDate"
      :columns="layout.columns"
      :theme="themeStyles"
      :update-on-input="true"
      is-inline
      nav-visibility="hidden"
      @drag="isDraging"
    />
  </div>
</template>

<script src="./DatePicker.js">
</script>

<style lang="scss" scoped>
  @import "./DatePicker.scss";
</style>