import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "content" */ '../views/HomeView.vue'),
  },
  {
    path: '/conteudo',
    name: 'content',
    component: () => import(/* webpackChunkName: "content" */ '../views/ContentView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  if (to.path !== from.path) {
    window.scrollTo(0, 0);
  }
});

export default router;
