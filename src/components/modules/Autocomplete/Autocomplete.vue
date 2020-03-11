<template>
  <input
    :id="config.id"
    :class="`autocomplete ${config.styleClassName}`"
    :value="inputValue"
    type="text"
    :placeholder="config.placeholder"
    required
    autocomplete="off"
    @input="$emit('inputDeparture', $event.target.value)"
    @click.stop="$emit('inputFocus', $event.target.value)"
  />
</template>

<script src="./Autocomplete.js"></script>

<style src="./Autocomplete.scss" lang="scss" scoped></style>

