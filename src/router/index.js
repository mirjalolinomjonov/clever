import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layouts/index.vue'
import Home from '../pages/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
          redirect: '/tests',
          children: [
            {
              path: '/tests',
              name: 'tests',
              component: () => import('@/pages/_tests.vue')
            },
            {
              path: '/applicants',
              name: '/applicants',
              component: () => import('@/pages/_applicants.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/layouts/auth.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      meta: { title: 'Not found page' },
      component: () => import('@/layouts/error.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
