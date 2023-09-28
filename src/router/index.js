import { createRouter, createWebHistory } from 'vue-router'
import Inicio from "@/AutoYa/pages/inicio-arrenda.vue"
import InitPropietario from "@/AutoYa/pages/inicio-propie.vue"
import NotificacionesPropie from "@/AutoYa/pages/notificaciones-propie.vue";
import CarRegistrationOwner from "@/AutoYa/pages/car-registration-owner.vue";
import RentTenant from "@/AutoYa/pages/rent-tenant.vue";
import Login from "@/AutoYa/pages/login.vue";
import Register from "@/AutoYa/pages/register.vue";
import Propietario from "@/AutoYa/pages/propietario.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'login'
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
    {
      path: "/car-registration-owner",
      name: "car-registration-owner",
      component: CarRegistrationOwner,
    },
    {
      path: "/rent-tenant",
      name: "rent-tenant",
      component: RentTenant,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/propietario",
      name: "propietario",
      component: Propietario,
    },
    {
      path: "/init-propie",
      name: "init-propie",
      component: InitPropietario,
    }
  ]
})
export default router