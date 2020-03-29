<template>
  <div class="dropdown-root" v-click-outside="closeDropdown">
    <div class="dropdown-wrapper" :class="{ 'is-focused': isOpen }" @click="isOpen = !isOpen">
      <span class="dropdown-output">{{ outputText }}</span>
      <span class="arrow"></span>
    </div>

    <div class="dropdown-body" :class="{ 'is-active': isOpen }">
      <div class="dropdown-body-header">
        <span>Who is travelling?</span>
        <button type="button" class="close-btn" @click="isOpen = !isOpen"></button>
      </div>
      <slot></slot>
    </div>

  </div>
</template>

<script src="./Dropdown.js"></script>

<style lang="scss">
  @import "./Dropdown.scss";
</style>
