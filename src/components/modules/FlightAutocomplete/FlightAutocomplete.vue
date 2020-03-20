<template>
  <div>
    <div class="input-wrapper">
      <input
        :id="config.id"
        :class="'autocomplete' + defineStyleAutocompleteClass"
        :value="inputValue"
        type="text"
        :placeholder="config.placeholder"
        required
        autocomplete="off"
        maxlength="200"
        @input="$emit('change-input', $event.target.value)"
        @click.stop="$emit('focus-input', $event.target.value)"
      />
      <slot name="reverse" />
    </div>
    <ul v-show="foundAirports.length !== 0" class="autocomplete-list">
      <li
        v-for="(item, index) in foundAirports"
        :key="config.id + index"
        :class="'autocomplete-item' + defineClassForItem(item)"
        @click="$emit('select-option', item)"
      >
        <p class="title">{{ getOptionDescription(item) }}</p>
      </li>
    </ul>
  </div>
</template>

<script src="./FlightAutocomplete.js"></script>

<style lang="scss" src="./FlightAutocomplete.scss" scoped></style>

