import Home from '@/pages/Home.vue'
import Products from '@/pages/products/index.vue'
import ProductList from '@/pages/products/ProductList.vue'
import ProductCategory from '@/pages/products/Categories.vue'
import Register from '@/pages/Register.vue'
import Login from '@/pages/Login.vue'

const routes = [
  {
    path: '/',
    redirect: '/products',
  },
  { path: '/home', component: Home, meta: { requiresAuth: true } },
  {
    path: '/products',
    component: Products,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        component: ProductList,
      },
      {
        path: 'categories',
        component: ProductCategory,
      },
    ],
  },
  {
    path: '/register',
    component: Register,
    meta: {
      isAuthRoute: true,
    },
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isAuthRoute: true,
    },
  },
]

import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user'
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from) => {
  const { isLoggedIn } = useUserStore()
  if (to.meta.requiresAuth) {
    if (!isLoggedIn) {
      console.log('go to login')
      return '/login'
    }
  }

  if (to.meta.isAuthRoute) {
    if (isLoggedIn) {
      return '/'
    }
  }
})

export default router
