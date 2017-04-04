import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello'
import Buy from '../containers/Buy/Buy';
import Sale from '../containers/sale/Sale';
import Mine from '../containers/mine/Mine';

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        name: 'Buy',
        component: Buy
      }, {
        path: '/Sale',
        name: 'Sale',
        component: Sale
      }, {
        path: '/Mine',
        name: 'Mine',
        component: Mine
      }
  ]
})
