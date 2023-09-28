import { createRouter, createWebHistory } from 'vue-router'
import Inicio from "@/AutoYa/pages/inicio-arrenda.vue"
import NotificacionesPropie from "@/AutoYa/pages/notificaciones-propie.vue";
import CarRegistrationOwner from "@/AutoYa/pages/car-registration-owner.vue";
import RentTenant from "@/AutoYa/pages/rent-tenant.vue";
import ProfileOwner from "@/AutoYa/pages/profile-owner.vue";
import ProfileTenant from "@/AutoYa/pages/profile-tenant.vue";
import RequestsTenant from "@/AutoYa/pages/requests-tenant.vue";
import RentContractOwner from "@/AutoYa/pages/rent-contract-owner.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home'
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
    }
  ]
})
export default router