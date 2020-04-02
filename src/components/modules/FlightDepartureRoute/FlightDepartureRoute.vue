<template>
  <autocomplete
    :class="`autocomplete-wrapper ${hasError ? 'has-error-departure' : ''}`"
    :inputValue="departure"
    :foundAirports="foundAirports"
    :config="config"
    @change-input="handlerRouteTrip"
    @focus-input="focusInput"
    @select-option="selectItem"
  >
    <template v-slot:reverse>
      <div class="reverse-route">
        <button class="reverse-route-button" type="button" @click="resetRoutFlight" />
      </div>
    </template>
    <template slot="error">
      <p
        v-show="hasError"
        :class="`error-message ${this.errorsAutocomplete.name === 'too-many' ? 'is-long-message' : ''}`"
      >{{ errorsAutocomplete.message }}</p>
    </template>
  </autocomplete>
</template>

<script src="./FlightDepartureRoute.js"></script>

<style lang="scss" src="./FlightDepartureRoute.scss" scoped></style>

