<template>
  <header class="header">
    <div class="container">
      <div class="header-logo">
        <router-link
                to="/"
        >
          <img class="img-logo" src="../../../assets/images/logo-header.png"/>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script src='./TheHeader.js'></script>

<style lang="scss">
  @import "../../../assets/scss/base/variables.scss";
  @import "../../../assets/scss/base/mixins.scss";
  @import './TheHeader.scss';
</style>
