<template>
  <autocomplete
    class="autocomplete-wrapper"
    :inputValue="departure"
    :foundAirports="foundAirports"
    :config="config"
    @change-input="handlerRouteTrip"
    @focus-input="focusInput"
    @select-option="selectItem"
  >
    <template v-slot:reverse>
      <div class="reverse-route">
        <button class="reverse-route-button" type="button" @click="reverseRoute" />
      </div>
    </template>
  </autocomplete>
</template>

<script src="./FlightDepartureRoute.js"></script>

<style lang="scss" src="./FlightDepartureRoute.scss" scoped></style>

