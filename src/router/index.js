import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'product',
        name: 'Product',
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/CartView.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/LoginView.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/DashboardView.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/dashboard/ProductsView.vue')
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/dashboard/OrderView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
