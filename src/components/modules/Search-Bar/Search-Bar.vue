<template>
  <div class="search-bar-wrapper">
    <searchTab id="flights" :class="defineStyleForFlightsTab" @select-tab="selectTab">
      <img class="flight-icon" src="@/assets/images/flight.svg" alt="Flight tab icon" /> Flights
    </searchTab>
    <searchTab id="hotels" :class="defineStyleForHotelsTab" @select-tab="selectTab">
      <img class="hotel-icon" src="@/assets/images/hotels.svg" alt="Hotel tab icon" /> Hotels
    </searchTab>
  </div>
</template>

<script src="./Search-Bar.js"></script>

<style lang="scss" src="./Search-Bar.scss" scoped></style>
