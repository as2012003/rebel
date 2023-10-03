import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'pivo/:id',
        name: 'BeerDetails',
        component: () => import('@/views/BeerDetails.vue'),
      },
      {
        path: 'o-projektu',
        name: 'About',
        component: () => import('@/views/About.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
