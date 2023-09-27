import { createRouter, createWebHistory } from 'vue-router'
import Inicio from "@/propie/inicio-propie.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/inicio',
      name: 'inicio',
      component: Inicio,
    },
    {
      path: '/',
      redirect: 'inicio'
    }
  ]
})
export default router