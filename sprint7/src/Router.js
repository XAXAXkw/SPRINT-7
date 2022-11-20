import {createRouter,createWebHashHistory} from 'vue-router';
import Home from './components/Home.vue';
import Splash from './components/Splash.vue';

const routes = [
    
  // una manera amb arrow
    { path: '/', component:()=> import ('./components/Splash.vue')},

    // un altre manera 
    { path: '/Home',name:'Home', component: Home },
    { path: '/Splash',name:'Splash', component: Splash },
    { path: '/Home/:id', component:()=> import ('./components/Home.vue')},
    
  ]

  const router = createRouter({
    history:createWebHashHistory(),
    routes,
  })

  export default router;