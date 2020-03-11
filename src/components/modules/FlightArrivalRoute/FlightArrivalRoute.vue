<template>
  <div class="autocomplete-wrapper">
    <div class="input-wrapper">
      <autocomplete
        :inputValue="arrival"
        :config="arrivalConfig"
        @inputFocus="activeInput"
        @inputDeparture="handlerArrivalRouteTrip"
      />
    </div>
    <ul v-show="foundArrivalAirports.length !== 0" class="autocomplete-list">
      <li
        v-for="(item, index) in foundArrivalAirports"
        :key="arrivalConfig.id + index"
        :class="defineClassForItem(item)"
      >
        <p
          class="title"
          @click="selectItem(item.type === 'airport' ? [item.iataCode, item.type] : [item.shortCityName, item.type])"
        >{{ item.type === 'airport' ? setOptionsLabel(item) : setGroupLabel(item) }}</p>
      </li>
    </ul>
  </div>
</template>

<script src="./FlightArrivalRoute.js"></script>

<style lang="scss" src="./FlightArrivalRoute.scss" scoped></style>

