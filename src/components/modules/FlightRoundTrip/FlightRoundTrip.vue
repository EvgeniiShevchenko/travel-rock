<template>
  <div class="autocomplete">
    <flightDepartureRoute
      :class="'autocomplete-departure' +` ${handlerError.status ? defineStyleForError('departure', 'has-error-departure') : ''}`"
    />
    <flightArrivalRoute
      :class="'autocomplete-arrival' +` ${handlerError.status ? defineStyleForError('arrival', 'has-error-arrival') : ''}`"
    />
    <p v-show="errorsAutocomplete.status" class="error-message">{{ errorsAutocomplete.message }}</p>
  </div>
</template>

<script src="./FlightRoundTrip.js"></script>

<style src="./FlightRoundTrip.scss" lang="scss" scoped></style>
