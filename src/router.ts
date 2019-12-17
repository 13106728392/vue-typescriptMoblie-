import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Another from '@/views/another/index.vue';
import List from '@/views/list/index.vue';
import Classification from '@/views/classification/index.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页',
      },
    },
    {
      path: '/another',
      name: 'another',
      component: Another,
      meta: {
        title: 'vuex测试页面',
      },
    },
    {
      path: '/List',
      name: 'List',
      component: List,
      meta: {
        title: 'list页面',
      },
    },
    {
      path: '/Classification',
      name: 'Classification',
      component: Classification,
      meta: {
        title: 'Classification',
      },
    },

  ],
});
