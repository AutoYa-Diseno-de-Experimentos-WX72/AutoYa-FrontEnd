import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import carRegistrationOwner from "@/AutoYa/pages/car-registration-owner.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/car-registration-owner',
      name: 'car-registration-owner',
      component:()=>import('../AutoYa/pages/car-registration-owner.vue')
    },
    {
      path: '/rent-tenant',
      name: 'rent-tenant',
      component:()=>import('../AutoYa/pages/rent-tenant.vue')
    },
    {
      path: '/',
      redirect: 'home'
    }
  ]
})
export default router