<template>
  <div class="filter">
    <div class="navigation">
      <button class="filter-reset-mobile" type="button" @click="resetAll">Clear All</button>
      <p class="filter-title">Filter your results</p>
      <div class="close-wrapper">
        <button class="close-filter" type="button" @click="$emit('close-filter')" />
      </div>
      <button class="filter-reset-tablet" type="button" @click="resetAll">Clear All</button>
    </div>
    <div class="general">
      <FilterDuration />
    </div>
  </div>
</template>

<script src="./FilterResult.js"></script>

<style lang="scss" src="./FilterResult.scss" scoped></style>