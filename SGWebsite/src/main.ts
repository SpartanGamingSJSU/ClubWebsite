import './assets/main.css'
import routes from '~/pages';

import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import About from './components/About.vue';
import Schedule from './components/Schedule.vue';
import Socials from './components/Socials.vue';
import { ViteSSG } from 'vite-ssg'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/schedule', name: 'Schedule', component: Schedule},
    {path: '/socials', name: 'Socials', component: Socials},
  ]
});


export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
  },
)
