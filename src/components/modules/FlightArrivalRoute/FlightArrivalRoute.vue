<template>
  <autocomplete
    :class="`autocomplete-wrapper ${hasError ? 'has-error-arrival' : ''}`"
    :inputValue="arrival"
    :foundAirports="foundAirports"
    :config="config"
    @change-input="handlerRouteTrip"
    @focus-input="focusInput"
    @select-option="selectItem"
  >
    <template slot="error">
      <p
        v-show="hasError"
        :class="`error-message ${this.errorsAutocomplete.name === 'too-many' ? 'is-long-message' : ''}`"
      >{{ errorsAutocomplete.message }}</p>
    </template>
  </autocomplete>
</template>

<script src="./FlightArrivalRoute.js"></script>

<style lang="scss" src="./FlightArrivalRoute.scss" scoped></style>


