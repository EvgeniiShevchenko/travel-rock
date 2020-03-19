<template>
  <div :class="{ 'is-focused': isActive }"
       @click="arrowToggle"
  >
    <Multiselect v-model="value"
                 :options="options"
                 :searchable="false"
                :show-labels="false"
                 @input="changeValue"
    >
      <span class="select-arrow"
            slot="caret"
            slot-scope="{ toggle }"
            @mousedown.prevent.stop="toggle"
      >
      </span>
    </Multiselect>
  </div>
</template>

<script src='./Select.js'></script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
  @import "./Select.scss";
</style>