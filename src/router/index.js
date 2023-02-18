import { createRouter, createWebHashHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn,
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
