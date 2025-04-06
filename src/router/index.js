import { createRouter, createWebHistory } from 'vue-router';

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
  NewsItem,
  NewsView,
} from '@/views';

// Auth
import { ForgetPassword, LoginView, RegisterView } from '@/Auth';

// User Page Components
import {
  Featured,
  Message,
  MyAds,
  PlaceAd,
  Rate,
  Setting,
  UserPage,
} from '@/User';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/forgetPassword',
    name: 'forgetPassword',
    component: ForgetPassword,
  },
  {
    path: '/:userName',
    name: 'user account',
    component: UserPage,
    children: [
      {
        path: 'featured',
        name: 'Featured',
        component: Featured,
        beforeEnter: (to, from, next) => {
          if (window.innerWidth <= 768) {
            next({ name: 'FeaturedPageMobile', params: { userName: to.params.userName } });
          } else {
            next();
          }
        }
      },
      {
        path: 'message',
        name: 'Message',
        component: Message,
      },
      {
        path: 'my-ads',
        name: 'My Ads',
        component: MyAds,
      },
      {
        path: 'rate',
        name: 'Rate',
        component: Rate,
      },
      {
        path: 'setting',
        name: 'Settings',
        component: Setting,
      },
    ],
  },
  {
    path: '/:userName/featured',
    name: 'FeaturedPageMobile',
    component: () => import('../User/UserPagesMobile/FeaturedPage.vue')
  },
  {
    path: '/place-ad',
    name: 'Place a Ad',
    component: PlaceAd,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/katalok',
    name: 'katalok',
    component: KatalokView,
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
  },
  {
    path: '/news/:id',
    name: 'news item',
    component: NewsItem,
  },
  {
    path: '/motorcycle',
    name: 'motorcycle',
    component: Motorcycle,
  },
  {
    path: '/commerce-cars',
    name: 'commerceCars',
    component: CommerceCars,
  },
  {
    path: '/katalok/cars-tovar/:id',
    name: 'carsTovar',
    component: CarsTovar,
  },
  {
    path: '/commerce-cars/commerce-cars-tovar/:id',
    name: 'commerceCarsTovar',
    component: CommerceCarsTovar,
  },
  {
    path: '/motorcycle/moto-tovar/:id',
    name: 'motoTovar',
    component: MotoTovar,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});


router.beforeEach((to, from, next) => {
  const isMobile = window.innerWidth <= 768;

  if (
    to.matched.some((record) => record.name === 'user account') &&
    to.path === `/${to.params.userName}`
  ) {
    if (!isMobile) {
      next({ path: `/${to.params.userName}/featured` });
    } else {
      next(); 
    }
  } else {
    next();
  }
});

export default router;
