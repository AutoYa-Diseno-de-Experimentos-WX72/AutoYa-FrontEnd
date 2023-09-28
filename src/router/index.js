import { createRouter, createWebHistory } from 'vue-router'
import Inicio from "@/AutoYa/pages/inicio-arrenda.vue"
import InitPropietario from "@/AutoYa/pages/inicio-propie.vue"
import NotificacionesPropie from "@/AutoYa/pages/notificaciones-propie.vue";
import CarRegistrationOwner from "@/AutoYa/pages/car-registration-owner.vue";
import RentTenant from "@/AutoYa/pages/rent-tenant.vue";
<<<<<<< HEAD
import ProfileOwner from "@/AutoYa/pages/profile-owner.vue";
import ProfileTenant from "@/AutoYa/pages/profile-tenant.vue";
import RequestsTenant from "@/AutoYa/pages/requests-tenant.vue";
import RentContractOwner from "@/AutoYa/pages/rent-contract-owner.vue";
import RentOwner from "@/AutoYa/pages/rent-owner.vue";
import InicioPropie from "@/AutoYa/pages/inicio-propie.vue";
=======
import Login from "@/AutoYa/pages/login.vue";
import Register from "@/AutoYa/pages/register.vue";
import Propietario from "@/AutoYa/pages/propietario.vue";

>>>>>>> Johan-Moreno

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
      path: '/home-owner',
      name: 'home-owner',
      component: InicioPropie,
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
<<<<<<< HEAD
      path: '/profile-owner',
      name: '/profile-owner',
      component: ProfileOwner,
    },
    {
      path: '/profile-tenant',
      name: '/profile-tenant',
      component: ProfileTenant,
    },
    {
      path: '/requests-tenant',
      name: '/requests-tenant',
      component: RequestsTenant,
    },
    {
      path: '/rent-contract-owner',
      name: '/rent-contract-owner',
      component: RentContractOwner,
    },
    {
      path: '/rent-owner',
      name: '/rent-owner',
      component: RentOwner,
=======
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
>>>>>>> Johan-Moreno
    }
  ]
})
export default router