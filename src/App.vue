<template>
  <searchForm />
</template>

<script>
import SearchForm from './components/modules/searchForm/SearchForm.vue';
import './assets/scss/fonts.scss';
export default {
  name: 'App',
  components: {
    searchForm: SearchForm
  }
};
</script>

<style lang="scss">
@import './assets/app.scss';
</style>
