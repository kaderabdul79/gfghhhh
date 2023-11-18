// Composables
import { createRouter, createWebHistory } from 'vue-router'
// import Home from './js/myvue/views/Home.vue';
import Home from '../views/Home.vue';
const routes = [
  { path: '/', component: Home
  // () => import('../views/Home.vue')
 },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
