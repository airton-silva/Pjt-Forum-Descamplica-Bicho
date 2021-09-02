import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import DetailPost from '../views/Detail.vue'
import User from '../views/User.vue'
import Post from '../views/Post.vue'
import Users from '../views/Users.vue'
import Perfil from '../views/Perfil.vue'
import EditPost from '../views/EditPost.vue'
import Comments from '../components/Comments.vue'



const routes = [
  {
    path: '/posts',
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
    path:'/comments/:identify',
    name:'comments',
    component: Comments,
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
  {
    path:'/users',
    name:'users',
    component: Users,
    props:true
  },
  {
    path:'/user/perfil/:id',
    name:'perfil',
    component: Perfil,
    props:true
  },
  {
    path:'/edit/:id',
    name:'editPost',
    component: EditPost,
    props:true
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router