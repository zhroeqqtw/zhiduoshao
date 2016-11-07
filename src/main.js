import Vue from 'vue';
import App from './App';
import Index from './pages/index.vue';
import Find from './pages/find.vue';
import Detail from './pages/detail.vue';
import Me from './pages/me';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
/* eslint-disable no-new */

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  history: false
});
router.map({
  '/': {
    component: Index,
  },
  '/index': {
    component: Index,
  },
  '/find': {
    component: Find,
  },
  '/detail/:articleId': {
    component: Detail
  },
  '/me': {
    component: Me
  }
});

router.start(App, '#app');
