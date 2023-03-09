import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import RestaurantsPage from '../views/RestaurantsPage.vue'


const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/restaurants',
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
    path: '/restaurants',
    name: 'restaurants',
    component: RestaurantsPage,
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: ()=>import('../views/RestaurantsFeeds.vue'),
  },
  {
    path: '/restaurants/top',
    name: 'restaurants-top',
    component: ()=>import('../views/RestaurantsTop.vue'),
  },
  {
    path: '/restaurants/:id/dashboard',
    name: 'restaurant-dashboard',
    component: ()=>import('../views/RestaurantDashboard.vue')
  },
  {
    path: '/restaurants/:id',
    name: 'restaurant-single',
    component: ()=>import('../views/RestaurantSingle.vue')
  },
  {
    path: '/users/top',
    name: 'users-top',
    component: ()=>import('../views/UsersTop.vue'),
  },
  {
    path: '/users/:id',
    name: 'user-single',
    component: ()=>import('../views/UserSingle.vue'),
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/restaurants'
  },
  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: ()=>import('@/views/AdminRestaurants.vue')
  },
  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurants-new',
    component: ()=>import('@/views/AdminRestaurantNew.vue')
  },  
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: ()=>import('@/views/AdminRestaurantEdit.vue')
  },
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant-single',
    component: ()=>import('@/views/AdminRestaurantSingle.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  // linkExactActiveClass: 'active',
  routes
})

export default router
