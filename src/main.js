import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

import store from './store'

import a1 from './components/0';
import a1a from './components/1';
import a1b from './components/2';
import a1a1 from './components/3';
import a1a2 from './components/4';
import a1b1 from './components/5';
import a2a1 from './components/5';
import a1b2 from './components/6';
import a2 from './components/7';
import a2a from './components/8';

import a2a2 from './components/6';
import a2b from './components/a2b';
import a2b1 from './components/a2b1';
import a2b2 from './components/a2b2';
import psychological_safety from './components/psychological_safety';
import try_again from './components/try_again';


Vue.config.productionTip = false

const routes = [
  { path: '/', component: a1 },
  { path: '/1', component: a1a },
  { path: '/3', component: a1a1 },
  { path: '/4', component: a1a2 },
  { path: '/2', component: a1b },
  { path: '/5', component: a1b1 },
  { path: '/6', component: a1b2 },
  { path: '/7', component: a2 },
  { path: '/8', component: a2a },
  { path: '/a2a1', component: a2a1 },
  { path: '/a2a2', component: a2a2 },
  { path: '/a2b', component: a2b },
  { path: '/a2b1', component: a2b1 },
  { path: '/a2b2', component: a2b2 },
  { path: '/psychological_safety', component: psychological_safety },
  { path: '/try_again', component: try_again },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: 'history',
  routes,
});

Vue.use(VueRouter);
Vue.use(Vuex)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
