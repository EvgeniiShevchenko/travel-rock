<template>
  <div class="wrapper">
    <div class="container">
      <div class="search-form" />
      <div class="result-general">
        <div :class="`filter-wrapper ${isFilter ? 'is-filter-mobile-show': ''}`">
          <div v-if="Object.keys(getFoundFlights).length === 0">...loading</div>
          <FilterResult v-else class="filter-mobile" @close-filter="toogleFilter" />
        </div>
        <div class="content-wrapper">
          <ResultContentHeader @show-filter="toogleFilter" />
          <div class="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./SearchResult.js"></script>

<style lang="scss" src="./SearchResult.scss" scoped></style>