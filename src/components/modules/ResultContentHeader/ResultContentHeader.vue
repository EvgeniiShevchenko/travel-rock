<template>
  <div class="content-header">
    <p class="mount-flights">120 flight found</p>
    <div class="filter-flight">
      <p>Filter your results:</p>
      <button
        class="show-filter"
        type="button"
        @click="$emit('show-filter')"
      >{{ getActiveFilters.length }} filter applied</button>
    </div>
    <div class="sort-flight">
      <p class="sort-title">Sort by:</p>
      <button class="sort-show" type="button">Price</button>
    </div>
  </div>
</template>

<script src="./ResultContentHeader.js"></script>

<style lang="scss" src="./ResultContentHeader.scss" scoped></style>