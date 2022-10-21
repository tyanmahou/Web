import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Works from './views/Works.vue'
import Games from './views/Games.vue'
import About from './views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{title: ''}
  },
  {
    path: '/works',
    name: 'Works',
    component: Works,
    meta:{title: 'Works'}
  },
  {
    path: '/games',
    name: 'Games',
    component: Games,
    meta:{title: 'Games'}
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
  routes,
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition;
    } else {
      return {
        top: 0
      }
    };
}  
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