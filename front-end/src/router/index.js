import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import DetailPost from '../views/Detail.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path:'/detail-post/:identify',
    component: DetailPost,
    props: true
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

//   {
//     path: '/albuns',
//     name: 'Albums',
//     component: Albuns
//   },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router