import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import VueCarousel from 'vue-carousel';
import axios from 'axios'

const app = createApp(App);
app.use(router)
   .mount('#app');
app.provide('$axios', axios);