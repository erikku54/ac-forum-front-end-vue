import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import RestaurantsPage from '../views/RestaurantsPage.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/restaurantspage',
  },  
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: ()=>import('../views/SignUp.vue'),
  },
  {
    path: '/restaurantspage',
    name: 'restaurants-page',
    component: RestaurantsPage,
  },
  {
    path: '/restaurantsfeeds',
    name: 'restaurants-feeds',
    component: ()=>import('../views/RestaurantsFeeds.vue'),
  },
  {
    path: '/restaurantstop',
    name: 'restaurants-top',
    component: ()=>import('../views/RestaurantsTop.vue'),
  },
  {
    path: '/userstop',
    name: 'users-top',
    component: ()=>import('../views/UsersTop.vue'),
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
