<template>
  <div class="autocomplete-wrapper">
    <div class="input-wrapper">
      <!-- <input
        id="departure"
        class="autocomplete is-reverse-active is-departure-radius"
        :value="departure"
        type="text"
        :placeholder="autocompleteConfig.placeholder"
        required
        autocomplete="off"
        @input="handlerDepartRouteTrip"
        @click.stop="activeInput"
      />-->
      <autocompleteInput :departureName="departure" @inputAction="sayHay" />
      <div class="reverse-route">
        <button class="reverse-route-button" type="button" @click="reverseRoute" />
      </div>
    </div>
    <ul v-show="foundDepartureAirports.length !== 0" class="autocomplete-list">
      <li
        v-for="(item, index) in foundDepartureAirports"
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

<script src="./FlightDepartureRoute.js"></script>

<style lang="scss" src="./FlightDepartureRoute.scss" scoped></style>

