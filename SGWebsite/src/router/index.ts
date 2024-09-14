import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Schedule from '../components/Schedule.vue';
import Socials from '../components/Socials.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/schedule', component: Schedule },
  { path: '/socials', component: Socials },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
