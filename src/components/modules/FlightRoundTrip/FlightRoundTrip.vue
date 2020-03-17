<template>
  <div class="autocomplete">
    <flightDepartureRoute
      :class="'autocomplete-departure ' + `${errorsAutocomplete.name === 'same-things' ? ' has-error-select' : ' has-error-departure'}`"
    />
    <flightArrivalRoute
      :class="'autocomplete-arrival ' + `${errorsAutocomplete.name === 'same-things' ? ' has-error-select' : ' has-error-arrival'}`"
    />
    <p v-show="errorsAutocomplete.status" class="error-message">{{ errorsAutocomplete.message }}</p>
  </div>
</template>

<script src="./FlightRoundTrip.js"></script>

<style src="./FlightRoundTrip.scss" lang="scss" scoped></style>
