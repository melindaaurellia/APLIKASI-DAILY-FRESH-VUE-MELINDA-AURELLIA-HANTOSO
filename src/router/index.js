import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/drinks/Home.vue'
import Createdrinks from '../views/drinks/Createdrinks.vue'
import Editdrinks from '../views/drinks/Editdrinks.vue'
import Detaildrinks from '../views/drinks/Detaildrinks.vue'
import Trans from '../views/trans/Trans.vue'
import Createtrans from '../views/trans/Createtrans.vue'
import Edittrans from '../views/trans/Edittrans.vue'
import Detailtrans from '../views/trans/Detailtrans.vue'
import Data from '../views/data/Data.vue'
import Createdata from '../views/data/Createdata.vue'
import Editdata from '../views/data/Editdata.vue'
import Detaildata from '../views/data/Detaildata.vue'
import Groups from '../views/groups/Groups.vue'
import Creategroups from '../views/groups/Creategroups.vue'
import Editgroups from '../views/groups/Editgroups.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createdrinks',
    name: 'Createdrinks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createdrinks
  },
  {
    path: '/editdrinks/:id',
    name: 'Editdrinks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editdrinks
  },
  {
    path: '/detaildrinks/:id',
    name: 'Detaildrinks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detaildrinks
  },

  {
    path: '/trans',
    name: 'Trans',
    component: Trans
  },
  {
    path: '/createtrans',
    name: 'Createtrans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createtrans
  },
  {
    path: '/edittrans/:id',
    name: 'Edittrans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Edittrans
  },
  {
    path: '/detailtrans/:id',
    name: 'Detailtrans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailtrans
  },

  {
    path: '/data',
    name: 'Data',
    component: Data
  },
  {
    path: '/createdata',
    name: 'Createdata',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createdata
  },
  {
    path: '/editdata/:id',
    name: 'Editdata',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editdata
  },
  {
    path: '/detaildata/:id',
    name: 'Detaildata',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detaildata
  },

  {
    path: '/groups',
    name: 'Groups',
    component: Groups
  },
  {
    path: '/creategroups',
    name: 'Creategroups',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Creategroups
  },
  {
    path: '/editgroups/:id',
    name: 'Editgroups',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editgroups
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
