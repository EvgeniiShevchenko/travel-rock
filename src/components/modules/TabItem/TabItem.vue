<template>
  <div class="tab-item-wrapper">
    <div class="nav-btn-slot">
      <slot name="navBtn" />
    </div>

    <div
      v-show="isActive"
      class="item-content-wrapper"
    >
      <slot />
    </div>
  </div>
</template>

<script src="./TabItem.js">
</script>

<style lang="scss">
@import "./TabItem";
</style>