const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/view/:id/:slug',
    name: 'service',
    component: () => import('@/views/ServiceView.vue'),
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('@/views/ErrorNotFound.vue')
  }
]

export default routes
