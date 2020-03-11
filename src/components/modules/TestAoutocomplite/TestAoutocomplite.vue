<template>
  <div>
    <div class="input-wrapper">
      <input
        :id="config.id"
        :class="`autocomplete ${config.styleClassName}`"
        :value="inputValue"
        type="text"
        :placeholder="config.placeholder"
        required
        autocomplete="off"
        @input="$emit('inputActions', $event.target.value)"
        @click.stop="$emit('inputFocus', $event.target.value)"
      />
      <div class="reverse-route">
        <button class="reverse-route-button" type="button" @click="reverseRoute" />
      </div>
    </div>
    <ul v-show="foundDepartureAirports.length !== 0" class="autocomplete-list">
      <li
        v-for="(item, index) in foundDepartureAirports"
        :key="departureConfig.id + index"
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

<script src="./TestAoutocomplite.js"></script>

<style lang="scss" src="./TestAoutocomplite.scss" scoped></style>

