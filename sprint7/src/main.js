import { createApp } from 'vue'
import '../src/budget'
import './style.css'
import App from './App.vue'



import Router from './Router'




const app = createApp(App);



app.use(Router);

app.mount('#app');
