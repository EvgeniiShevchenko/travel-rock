<template>
  <button class="navigation-button" @click="$emit('select-tab', $event.target.id)">
    <slot />
  </button>
</template>

<script>
export default {
  name: "SearchTab"
};
</script>

<style lang="scss" scoped>
.navigation-button {
  width: 100%;
  height: 100%;
}
</style>
