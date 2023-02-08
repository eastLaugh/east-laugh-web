import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'default',
      component:()=> import('../views/MainView.vue')
    },
    {
      path:'/main',
      name:'main',
      component:()=> import('../views/MainView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('../views/LoginView.vue')
    }
  ]
})

export default router
