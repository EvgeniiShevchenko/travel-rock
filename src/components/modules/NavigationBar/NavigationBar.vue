<template>
  <div class="search-bar-wrapper">
    <NavigationTab
      id="flights"
      :class="'flights-tab' + defineStyleForFlightsTab"
      @select-tab="selectTab"
    >
      <img src="@/assets/images/airplane.svg" alt="Flight tab icon" /> Flights
    </NavigationTab>
    <NavigationTab
      id="hotels"
      :class="'flights-tab' + defineStyleForHotelsTab"
      @select-tab="selectTab"
    >
      <img src="@/assets/images/hotels.svg" alt="Hotel tab icon" /> Hotels
    </NavigationTab>
  </div>
</template>

<script src="./NavigationBar.js"></script>

<style src="./NavigationBar.scss" lang="scss" scoped></style>
