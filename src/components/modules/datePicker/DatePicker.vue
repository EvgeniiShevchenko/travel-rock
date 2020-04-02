<template>
  <div class="date-picker-wrapper" v-click-outside="closeDatePicker">
    <button
      :class="['date-picker-btn', {active:isOpend}]"
      type="button"
      @click="isOpend = !isOpend"
    >
      <span 
        v-if=" start == '' "
        :class="{highlighted : isOpend}"
      >
        {{startPlaceholderText}}
      </span>
      <span 
        v-else
        :class="{highlighted : highlightingStartDate}"
        class="marked"
      >
        {{start | filterDate}}
      </span>

      <span class="sepatator">—</span>
      <span 
        v-if=" end == '' "
        :class="{highlighted : this.start != ''}"
      > 
        {{endPlaceholderText}}
      </span>
      <span 
        v-else
        class="marked"
        :class="{highlighted : highlightingEndDate}"
      >
        {{end | filterDate}}
      </span>
    </button>
    <transition name="fade">
      <div class="calendar-wrapper" v-if="isOpend" >
        <div class="heder-wrapper">
          <span> {{calendarHeaderText}} date</span>
          <button
            class="close-btn"
            type="button"
            @click="isOpend = !isOpend"
          >
            <svg class="close-icon">
              <use xlink:href="../../../assets/images/icons-sprite.svg#icon-close" />
            </svg>
          </button>
        </div>
        <v-date-picker 
          :mode="datePickerMode"
          :locale="locale"
          :min-date='startDate'
          :max-date="endDate"
          :value="startDate"
          :columns="layout.columns"
          :theme="themeStyles"
          :update-on-input="true"
          is-inline
          nav-visibility="hidden"
          @drag="dateSelection"
        />
      </div>
    </transition>
  </div>
</template>

<script src="./DatePicker.js">
</script>

<style lang="scss" scoped>
  @import "./DatePicker.scss";
</style>