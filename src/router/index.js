import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileOwner from "@/AutoYa/pages/profile-owner.vue";
import ProfileTenant from "@/AutoYa/pages/profile-tenant.vue";
import RequestsTenant from "@/AutoYa/pages/requests-tenant.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/about',
      name: 'about',
    },
    {
      path: '/profile-owner',
      name: 'profile-owner',
      component: ProfileOwner,
    },
    {
      path: '/profile-tenant',
      name: 'profile-tenant',
      component: ProfileTenant
    },
    {
      path: '/requests-tenant',
      name: '/requests-tenant',
      component: RequestsTenant,
    }
  ]
})
export default router