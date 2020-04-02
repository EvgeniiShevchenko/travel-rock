<template>
  <div class="autocomplete">
    <flightDepartureRoute
      :class="'autocomplete-departure' + ` ${handlerError ? 'has-error-select' : ''}`"
    />
    <flightArrivalRoute
      :class="'autocomplete-arrival' + ` ${handlerError ? 'has-error-select' : ''}`"
    />
    <p v-show="handlerError" class="error-message">{{ errorsAutocomplete.message }}</p>
  </div>
</template>

<script src="./FlightRoundTrip.js"></script>

<style src="./FlightRoundTrip.scss" lang="scss" scoped></style>
