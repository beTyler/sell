import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

import goods from './components/goods/goods.vue';
import seller from './components/seller/seller.vue';
import ratings from './components/ratings/ratings.vue';

import 'common/stylus/index.styl';

Vue.use(VueRouter);

const routes = [{
  path: '/goods',
  component: goods
}, {
  path: '/seller',
  component: seller
}, {
  path: '/ratings',
  component: ratings
}]

const router = new VueRouter({
  linkActiveClass: 'active',
  linkExactActiveClass: '',
  routes
})

new Vue({
  router,
  template: '<App/>',
  components: {
    App
  },
  data: {
    eventHub: new Vue()
  }
}).$mount('#app');

router.push('/goods');
