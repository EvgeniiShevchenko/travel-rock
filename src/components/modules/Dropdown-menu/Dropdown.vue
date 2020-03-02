<template>
  <div>
    <div
            class="wrapper-dropdown"
            :class="{ activeBorder: isActive }"
            @click="dropdownToggle"
    >
      <span class="dropdown-output">{{ outputText }}</span>
      <span class="arrow" :class="{'arrow-active': isActive }"></span>
    </div>
    <div class="dropdown-body"
         :class="{ active: isActive }">
      <slot></slot>
    </div>
  </div>

</template>

<script src="./Dropdown.js"></script>

<style lang="scss">
  @import "./Dropdown.scss";
</style>
