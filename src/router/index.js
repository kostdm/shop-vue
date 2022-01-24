import Vue from 'vue'
import VueRouter from 'vue-router'

import productsPage from '../pages/Products';
import productPage from '../pages/Product';
import cartPage from '../pages/Cart';
import checkoutPage from '../pages/Checkout';
import error404Page from '../pages/Error404';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: 'products',
  },
  {
    path: '/products',
    name: 'Products',
    component: productsPage
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: productPage
  },
  {
    path: '/cart',
    name: 'Cart',
    component: cartPage
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: checkoutPage
  },
  {
    path: '/error404',
    name: 'Error404',
    component: error404Page
  },
  {
    path: '*',
    name: 'Other',
    redirect: 'error404',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
