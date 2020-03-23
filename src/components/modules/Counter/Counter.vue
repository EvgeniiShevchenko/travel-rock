<template>
<div class="counter-wrap">
  <span>{{ outputText }}</span>
  <div class="buttons-count">
      <button type="button" @click.prevent="decrement"
              class="minus circle"
              :disabled="count == minCount">
      </button>
    <span class="counter">{{ count }}</span>
    <button type="button" @click.prevent="increment"
            class=" plus circle"
            :disabled="count == maxCount">
    </button>
  </div>
</div>
</template>

<script src='./Counter.js'></script>

<style lang="scss" scoped>
  @import "./Counter.scss";
</style>

