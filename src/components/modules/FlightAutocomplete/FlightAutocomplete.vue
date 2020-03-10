<template>
  <div class="autocomplete-wrapper">
    <div class="input-wrapper">
      <input
        :id="autocompleteConfig.id"
        :class="defineClassForInput()"
        :value="getInputValue(autocompleteConfig.id)"
        type="text"
        :placeholder="autocompleteConfig.placeholder"
        required
        autocomplete="off"
        @input="handlerDepartRoute"
        @click.stop="activeInput"
      />
      <div v-show="autocompleteConfig.id === 'departure'" class="reverse-route">
        <button class="reverse-route-button" type="button" @click="reverseRoute" />
      </div>
    </div>
    <ul v-show="getSearchResult(autocompleteConfig.id).length !== 0" class="autocomplete-list">
      <li
        v-for="(item, index) in getSearchResult(autocompleteConfig.id)"
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

<script src="./FlightAutocomplete.js"></script>

<style lang="scss" src="./FlightAutocomplete.scss" scoped></style>

