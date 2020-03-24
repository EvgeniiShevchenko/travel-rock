<template>
  <div class="dropdown-root" v-click-outside="closeDropdown"
       :class="{ 'is-focused': isOpened }">
    <div class="dropdown-wrapper"
         :class="{ 'is-focused': isOpened }"
         @click="formFieldToggle"
    >
      <span class="dropdown-output">{{ outputText }}</span>
      <span class="arrow"></span>
    </div>
    <div class="dropdown-body">
      <slot></slot>
    </div>
  </div>
</template>

<script src="./Dropdown.js"></script>

<style lang="scss">
  @import "./Dropdown.scss";
</style>
