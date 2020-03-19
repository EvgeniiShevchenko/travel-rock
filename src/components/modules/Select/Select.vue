<template>
  <Multiselect v-model="value"
               :options="options"
               :searchable="false"
               :show-labels="false"
               @input="changeValue"
  >
  </Multiselect>
</template>

<script src='./Select.js'></script>

<style lang="scss">
  @import "./Select.scss";
</style>