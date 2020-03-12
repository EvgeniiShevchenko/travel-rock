<template>
  <testAoutocomplite
    class="autocomplete-wrapper"
    :inputValue="arrival"
    :findAirports="findAirports"
    :config="config"
    @change-input="handlerRouteTrip"
    @focus-input="focusInput"
    @reverse-rout="reverseRoute"
    @select-option="selectItem"
  />
</template>

<script src="./FlightArrivalRoute.js"></script>

<style lang="scss" src="./FlightArrivalRoute.scss" scoped></style>

