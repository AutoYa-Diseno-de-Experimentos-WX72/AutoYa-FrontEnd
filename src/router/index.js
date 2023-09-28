import { createRouter, createWebHistory } from 'vue-router'
import Inicio from "../AutoYa/pages/inicio-propie.vue";
import NotificacionesPropie from "../AutoYa/pages/notificaciones-propie.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'inicio'
    },
    {
      path: '/home',
      name: 'home',
      component: Inicio,
    },
    {
      path: "/notifications",
      name: "Notificaciones",
      component: NotificacionesPropie,
    },
  ]
})
export default router