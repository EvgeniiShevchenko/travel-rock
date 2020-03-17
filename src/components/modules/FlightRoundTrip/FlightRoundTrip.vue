<template>
  <div class="autocomplete">
    <flightDepartureRoute :class="'autocomplete-departure' + defineStyleForDepartureError" />
    <flightArrivalRoute :class="'autocomplete-arrival' + defineStyleForArrivalError" />
    <p v-show="errorsAutocomplete.status" class="error-message">{{ errorsAutocomplete.message }}</p>
  </div>
</template>

<script src="./FlightRoundTrip.js"></script>

<style src="./FlightRoundTrip.scss" lang="scss" scoped></style>
