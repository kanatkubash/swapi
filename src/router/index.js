import Vue from 'vue';
import Router from 'vue-router';
import Default from '@/views/Default';
import Characters from '@/views/Characters';
import Character from '@/views/Character';
import Ship from '@/views/Ship';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Default,
    },
    {
      path: '/characters',
      component: Characters,
      props: route => route.query,
    },
    {
      path: '/characters/:id',
      component: Character,
      props: true,
    },
    {
      path: '/ship/:id',
      component: Ship,
      props: true,
    },
  ],
});
