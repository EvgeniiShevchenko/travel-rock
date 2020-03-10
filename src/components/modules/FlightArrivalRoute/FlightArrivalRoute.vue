<template>
  <div class="autocomplete-wrapper">
    <div class="input-wrapper">
      <input
        :id="autocompleteConfig.id"
        class="autocomplete is-arrival-radius"
        :value="arrival"
        type="text"
        :placeholder="autocompleteConfig.placeholder"
        required
        autocomplete="off"
        @input="handlerArrivalRouteTrip"
        @click.stop="activeInput"
      />
    </div>
    <ul v-show="foundArrivalAirports.length !== 0" class="autocomplete-list">
      <li
        v-for="(item, index) in foundArrivalAirports"
        :key="autocompleteConfig.id + index"
        :class="defineClassForItem(item)"
      >
        <p
          class="title"
          @click="selectItem(item.type === 'airport' ? item.iataCode : item.shortCityName)"
        >{{ item.type === 'airport' ? autocompleteConfig.setOptionsLabel(item) : autocompleteConfig.setGroupLabel(item) }}</p>
      </li>
    </ul>
  </div>
</template>

<script src="./FlightArrivalRoute.js"></script>

<style lang="scss" src="./FlightArrivalRoute.scss" scoped></style>

