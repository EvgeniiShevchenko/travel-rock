import Vue from 'vue';
import VueRouter from 'vue-router';
import FlightSearch from '@/components/pages/FlightSearch/FlightSearch.vue';
import SearchResult from '@/components/pages/SearchResult/SearchResult.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: FlightSearch
    },
    {
      path: '/result',
      component: SearchResult
    }
  ]
});
