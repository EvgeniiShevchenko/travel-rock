<template>
  <header class="header">
    <div class="container">
      <div class="header-logo">
        <img
          class="img-logo"
          src="../../../assets/images/logo.png"
        >
      </div>
    </div>
    <Counter v-model="count" v-on:enumerator="count"/>
  </header>

</template>

<script src='./TheHeader.js'></script>

<style lang="scss" scoped>
@import "./TheHeader.scss";
</style>
