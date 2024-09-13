import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/contactus',
    name: 'contactus',
    component: () => import('../views/ContactUsView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/singleview/:id',
    name: 'singleview',
    component: () => import('../views/SingleView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue')
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: () => import('../views/UserProfileView.vue')
  },
  {
    path: '/exchanges',
    name: 'exchanges',
    component: () => import('../views/ExchangesView.vue')
  },
  {
    path: '/sizeguide',
    name: 'sizeguide',
    component: () => import('../views/SizeGuide.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
