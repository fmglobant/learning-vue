import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/home';
import EventPage from '@/pages/event';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/event/:id',
      name: 'EventPage',
      component: EventPage
    }
  ]
});
