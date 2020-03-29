import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';
import { router } from '@/router/router.js';
import VCalendar from 'v-calendar';

Vue.use(VCalendar, {
  componentPrefix: 'v',
  screens: {
    desktop: '1024px'
  },
});
Vue.config.productionTip = false;


new Vue({
  store,
  router,
  render: function(h) {
    return h(App);
  }
}).$mount('#app');
