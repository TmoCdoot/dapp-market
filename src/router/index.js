import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddView from '../views/AddView.vue'
import LikeView from '../views/LikeView.vue'
import MessageView from '../views/MessageView.vue'
import ProfilView from '../views/ProfilView.vue'
import ParamView from '../views/ParamView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'add',
    component: AddView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/like',
    name: 'like',
    component: LikeView
  },
  {
    path: '/message',
    name: 'message',
    component: MessageView
  },
  {
    path: '/profil',
    name: 'profil',
    component: ProfilView
  },
  {
    path: '/param',
    name: 'param',
    component: ParamView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
