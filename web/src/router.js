import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{title: ''}
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta:{title: 'About'}
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

const setTitle = pathTitle => {
    const siteTitle = 'チャンマホウのHP';
    const pageTitle = !pathTitle ? siteTitle : pathTitle + ' | ' + siteTitle;
    return (window.document.title = pageTitle);
};

router.beforeEach((to, from, next) => {
    setTitle(to.meta.title);
    next();
});
export default router;