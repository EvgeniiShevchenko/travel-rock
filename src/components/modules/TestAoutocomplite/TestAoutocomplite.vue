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
        @input="$emit('change-input', $event.target.value)"
        @click.stop="$emit('focus-input', $event.target.value)"
      />
      <div class="reverse-route">
        <button class="reverse-route-button" type="button" @click="$emit('reverse-rout')" />
      </div>
    </div>
    <ul v-show="findAirports.length !== 0" class="autocomplete-list">
      <li
        v-for="(item, index) in findAirports"
        :key="config.id + index"
        :class="defineClassForItem(item)"
      >
        <p class="title" @click="$emit('select-option', item)">{{ getOptionDescription(item) }}</p>
      </li>
    </ul>
  </div>
</template>

<script src="./TestAoutocomplite.js"></script>

<style lang="scss" src="./TestAoutocomplite.scss" scoped></style>

