<template>
  <div
    v-show="isActive"
    class="tab-item"
  >
    <div
      v-show="hidenNavButton"
      class="tab-nav"
    >
      <slot name="navBtn" />
    </div>
    <slot />
  </div>
</template>

<script src="./TabItem.js">
</script>

<style lang="scss">
@import "./TabItem"
</style>