<template>
<<<<<<< HEAD
  <div id="app">
    <the-footer />
  </div>
</template>

<script>
import TheFooter from "./components/layouts/TheFooter/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheFooter
  }
};
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #000000;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}
button {
  margin: 0;
  padding: 0;

  border: none;
  outline: none;
  background: none;
  cursor: pointer;
}
body {
  margin: 0;
}
.container {
  margin: 0 auto;
  max-width: 1140px;
  width: 100%;
}
=======
  <TheHeader/>
</template>

<script>
  import TheHeader from "./components/layouts/Header/TheHeader.vue";
  export default {
    components: {
      TheHeader:TheHeader,
    },
    name: 'App',
  }
</script>

<style lang="scss">
  @import "./assets/scss/app.scss";
>>>>>>> 84097f368a62988f9d9d2f69d58d8b92234bc5fd
</style>
