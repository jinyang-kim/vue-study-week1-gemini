import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/week1/ref',
      name: 'ref',
      component: () => import('../views/Week1/Day1_Ref.vue'),
    },
    {
      path: '/week1/computed',
      name: 'computed',
      component: () => import('../views/Week1/Day1_Computed.vue'),
    },
    {
      path: '/week1/watch',
      name: 'watch',
      component: () => import('../views/Week1/Day1_Watch.vue'),
    },
  ],
})

export default router
