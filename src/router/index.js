import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import KatalokView from '@/views/KatalokView/KatalokView.vue'
import NewsView from '@/views/NewsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path:'/contact',
      name:'contact',
      component:ContactView
    },
    {
      path:'/katalok',
      name:KatalokView,
      component:KatalokView
    },
    {
      path:'/news',
      name:'newsa',
      component:NewsView
    },
    {
      path:'/register',
      name:'register',
      component:RegisterView
    },
    {
      path:'/login',
      name:'login',
      component:LoginView

    }
  ],
})

export default router
