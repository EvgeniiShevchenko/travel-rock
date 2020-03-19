<template>
  <div class="search-bar-wrapper">
    <NavigationTab
      id="flights"
      :class="'flights-tab' + defineStyleForTab('flights')"
      @select-tab="selectTab"
    >
      <img src="@/assets/images/flight.svg" alt="Flight tab icon" /> Flights
    </NavigationTab>
    <NavigationTab
      id="hotels"
      :class="'flights-tab' + defineStyleForTab('hotels')"
      @select-tab="selectTab"
    >
      <img src="@/assets/images/hotels.svg" alt="Hotel tab icon" /> Hotels
    </NavigationTab>
  </div>
</template>

<script src="./NavigationBar.js"></script>

<style src="./NavigationBar.scss" lang="scss" scoped></style>
