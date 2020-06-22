import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Issues/Open',
    name: 'Open',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Issues/Open.vue')
  },
    {
    path: '/Issues/Done',
    name: 'Done',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Issues/Done.vue')
  },
    {
    path: '/Issues/Trashed',
    name: 'Trashed',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Issues/Trashed.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
