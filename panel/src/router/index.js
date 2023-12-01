import { createRouter, createWebHistory } from 'vue-router';
import LoginApp from '@/views/LoginApp.vue';
import HomeApp from '@/views/HomeApp.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeApp,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginApp
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;