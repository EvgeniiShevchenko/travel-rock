<template>
  <div class="autocomplete">
    <flightDepartureRoute class="autocomplete-departure" :autocompleteConfig="departureConfig" />
    <flightArrivalRoute class="autocomplete-arrival" :autocompleteConfig="arrivalConfig" />
  </div>
</template>

<script src="./FlightRoundTrip.js"></script>

<style src="./FlightRoundTrip.scss" lang="scss" scoped></style>
