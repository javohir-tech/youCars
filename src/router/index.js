import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import KatalokView from '@/views/KatalokView/KatalokView.vue'
import NewsView from '@/views/NewsView.vue'
import Motorcycle from '@/views/MotorcycleView/Motorcycle.vue'
import CommerceCars from '@/views/Commerce-cars/CommerceCars.vue'
import CardTovarView from '@/views/CardTovarView/CardTovarView.vue'

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
    },
    {
      path:'/motorcycle',
      name:'motorcycle',
      component:Motorcycle
    },
    {
      path:'/commerce-cars',
      name:'CommerceCars',
      component:CommerceCars,
    },
    {
      path:'/card-tovar/:id',
      name:'cardTovar',
      component:CardTovarView,
    }
  ],
})

export default router
