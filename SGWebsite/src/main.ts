import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import About from './components/About.vue';
import Schedule from './components/Schedule.vue';
import Socials from './components/Socials.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/schedule', name: 'Schedule', component: Schedule},
    {path: '/socials', name: 'Socials', component: Socials},
  ]
});

createApp(App).use(router).mount('#app')
