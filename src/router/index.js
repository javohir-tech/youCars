import { createRouter, createWebHistory } from 'vue-router'

// Components
import {
  AboutView,
  CarsTovar,
  CommerceCars,
  CommerceCarsTovar,
  ContactView,
  HomeView,
  KatalokView,
  Motorcycle,
  MotoTovar,
  NewsView
} from '@/views'

// Auth
import { LoginView, RegisterView } from '@/Auth'
import Intro from '@/views/Intro/Intro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'intro',
    //   component: Intro
    // },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/katalok',
      name: 'katalok',
      component: KatalokView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/motorcycle',
      name: 'motorcycle',
      component: Motorcycle
    },
    {
      path: '/commerce-cars',
      name: 'commerceCars',
      component: CommerceCars
    },
    {
      path: '/katalok/cars-tovar/:id',
      name: 'carsTovar',
      component: CarsTovar
    },
    {
      path: '/commerce-cars/commerce-cars-tovar/:id',
      name: 'commerceCarsTovar',
      component: CommerceCarsTovar
    },
    {
      path: '/motorcycle/moto-tovar/:id',
      name: 'motoTovar',
      component: MotoTovar
    }
  ]
})

// Har safar kirganda intro ko'rsatish uchun hech narsa saqlanmaydi
export default router
