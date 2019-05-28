import Vue from 'vue';
import http from './utils/http';
import App from './app/index.vue';
import router from './router';
import {store} from './store/store';
import VueSimpleSVG from 'vue-simple-svg';

Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.prototype.axios = http;

Vue.use(VueSimpleSVG);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  mounted () {
    if (!store.getters.eventsAreLoaded) {
      store.dispatch('loadEvents');
    }
  }
});
