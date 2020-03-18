<template>
  <button class="navigation-button" @click="$emit('select-tab', $event.target.id)">
    <slot />
  </button>
</template>

<script src="./NavigationTab.js"></script>

<style lang="scss" src="./NavigationTab.scss" scoped></style>
