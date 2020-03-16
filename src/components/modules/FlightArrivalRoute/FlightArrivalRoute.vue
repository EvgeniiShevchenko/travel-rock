<template>
  <autocomplete
    class="autocomplete-wrapper"
    :inputValue="arrival"
    :foundAirports="foundAirports"
    :config="config"
    @change-input="handlerRouteTrip"
    @focus-input="focusInput"
    @select-option="selectItem"
  />
</template>

<script src="./FlightArrivalRoute.js"></script>


