<template>
  <div class="tab-wrapper">
    <div class="tab-buttons-wrapper">
      <button
        v-for="(key,index) in items"
        :key="index"
        class="options-item"
        type="button"
      >
        {{ key }}
      </button>
    </div>
    <div class="tabs-content" />
    <slot />
  </div>
</template>
<script src="./Tabs.js">
</script>
<style lang="scss" scoped>
@import "./Tabs.scss"
</style>