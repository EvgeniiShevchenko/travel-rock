<template>
  <div class="tabs-container">
    <ul class="tab-nav">
      <li 
        v-for="(item,i) in navItemsArr"
        :key="i" 
        class="tab-nav-item"
        :class="{current : item.isActive}"
        eslint-disable-next-line
        @click="selectMenuItem(item)"
        v-html="item.title"
      />
    </ul>
    <div class="tab-content">
      <slot />
    </div>
  </div>
</template>
<script src="./TabsContainer.js">
</script>
<style lang="scss">
@import "./TabsContainer.scss"
</style>