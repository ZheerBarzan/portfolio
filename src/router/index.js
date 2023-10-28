import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from "../views/profileView.vue"
import About from '../views/AboutView.vue'
import Experience from "../views/ExperienceView.vue"
import Project from "../views/ProjectView.vue"
import Contact from "../views/ContactView.vue" 
import notFound from "../views/NotFoundView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      name: 'homeview',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: Home
    },
    {
      path: '/home',
      name: 'homeview',
      component: HomeView
    },
    
    {
      path: '/project',
      name: 'projects',
      component: Project
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
    ,{
      path: "/:catchall(.*)*",
        name: "not found",
        component:notFound,
    }
  ]
})

export default router
