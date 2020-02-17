<template>
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
</style>
