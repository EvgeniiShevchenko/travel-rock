import Vue from 'vue';
import VueRouter from 'vue-router';
import FlightSearch from './components/pages/FlightSearch/FlightSearch.vue';

Vue.use(VueRouter)
export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: FlightSearch
    }
  ]
})