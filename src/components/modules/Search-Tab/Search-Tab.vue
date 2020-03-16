<template>
  <button class="navigation-tab" @click="$emit('select-tab', $event.target.id)">
    <slot />
  </button>
</template>

<script src="./Search-Tab.js"></script>

<style lang="scss" src="./Search-Tab.scss" scoped></style>
