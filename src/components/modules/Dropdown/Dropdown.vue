<template>
  <div :class="{ 'is-focused': isActive }">
    <div class="dropdown-wrapper"
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
