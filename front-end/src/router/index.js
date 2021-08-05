import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import DetailPost from '../views/Detail.vue'
import FormUser from '../views/FormUser.vue'
import FormPost from '../views/FormPost.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path:'/detail-post/:identify',
        name:'detail',
        component: DetailPost,
        props:true
      },
    
    ]
    
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/form-user',
    name:'formUser',
    component: FormUser,
    props:true
  },
  {
    path:'/formPost',
    name:'formPost',
    component: FormPost,
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