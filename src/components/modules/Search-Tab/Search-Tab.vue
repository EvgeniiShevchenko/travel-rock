<template>
  <button class="navigation-button">
    <slot />
    <!-- <img class="tab-icon" src alt />text -->
  </button>
</template>

<script>
export default {
  name: "SearchTab"
};
</script>

<style lang="scss" scoped>
.navigation-button {
  max-width: 168px;
  width: 100%;
  height: 100%;
  background-color: rgba(43, 70, 129, 0.9);
  border-radius: 4px 4px 0 0;
}
</style>
