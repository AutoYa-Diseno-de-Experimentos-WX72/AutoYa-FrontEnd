import { createRouter, createWebHistory } from 'vue-router'
import Inicio from "@/propie/inicio-propie.vue";
import NotificacionesPropie from "@/propie/notificaciones-propie.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'inicio'
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: Inicio,
    },
    {
      path: "/notificaciones",
      name: "Notificaciones",
      component: NotificacionesPropie,
    },
  ]
})
export default router