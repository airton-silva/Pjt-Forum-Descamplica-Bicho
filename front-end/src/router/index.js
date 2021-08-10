import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import DetailPost from '../views/Detail.vue'
import User from '../views/User.vue'
import Post from '../views/Post.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
  },

  {
    path:'/detail-post/:identify',
    name:'detail',
    component: DetailPost,
    props:true
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/form-user',
    name:'User',
    component: User,
    props:true
  },
  {
    path:'/post',
    name:'Post',
    component: Post,
    props:true
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