import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import NotFound from '../views/NotFound.vue'


const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/contact',
    name: 'Contact',

    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/post/:id',
    name: 'DestinationDetails',
    props: true,
    component: () => import(/* webpackChunkName: "contact" */ '../views/DestinationDetails.vue')
  },

  // redirect

  {
    path: '/all-posts',
    redirect: '/post/1'
  },

  // catchall 404

  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
