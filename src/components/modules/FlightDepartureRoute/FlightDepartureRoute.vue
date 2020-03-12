<template>
  <testAoutocomplite
    class="autocomplete-wrapper"
    :inputValue="departure"
    :findAirports="findAirports"
    :config="config"
    @change-input="handlerRouteTrip"
    @focus-input="focusInput"
    @reverse-rout="reverseRoute"
    @select-option="selectItem"
  />
</template>

<script src="./FlightDepartureRoute.js"></script>

<style lang="scss" src="./FlightDepartureRoute.scss" scoped></style>

