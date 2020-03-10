import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';

import VCalendar from 'v-calendar';

Vue.use(VCalendar, {
  componentPrefix: 'v',
  screens: {
    desktop: '1024px'
  },
  datePickerTintColor: '#1ebb42'
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: function(h) {
    return h(App);
  }
}).$mount('#app');
