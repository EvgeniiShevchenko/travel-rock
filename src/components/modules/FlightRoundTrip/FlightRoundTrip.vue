<template>
  <div class="autocomplete">
    <autocomplete class="autocomplete-departure" :autocompleteConfig="departureConfig" />
    <autocomplete class="autocomplete-arrival" :autocompleteConfig="arrivalConfig" />
  </div>
</template>

<script src="./FlightRoundTrip.js"></script>

<style src="./FlightRoundTrip.scss" lang="scss" scoped></style>
