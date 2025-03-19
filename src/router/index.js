import { createRouter, createWebHistory } from 'vue-router'
//componnents
import AboutView from '../views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import NewsView from '@/views/NewsView.vue'
import {
  CarsTovar,
  CommerceCars,
  CommerceCarsTovar,
  HomeView,
  KatalokView,
  Motorcycle,
  MotoTovar
} from '@/views'

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
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/katalok',
      name: KatalokView,
      component: KatalokView,
    },
    {
      path: '/news',
      name: 'newsa',
      component: NewsView
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
      path: '/motorcycle',
      name: 'motorcycle',
      component: Motorcycle
    },
    {
      path: '/commerce-cars',
      name: 'CommerceCars',
      component: CommerceCars,
    },
    {
      path: '/katalok/cars-tovar/:id',
      name: 'carsTovar',
      component: CarsTovar,
    },
    {
      path: '/commerce-cars/commerce-cars-tovar/:id',
      name: 'commmerceCarsTovar',
      component: CommerceCarsTovar,
    },
    {
      path: '/motorcycle/moto-tovar/:id',
      name: 'motoTovar',
      component: MotoTovar
    }
  ],
})

export default router
