import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import ArticlesPage from '../views/ArticlesPage.vue'
import Article from '../components/Article.vue';
import PageNotFound from '../views/PageNotFound.vue';

const router = createRouter({
  history: createWebHistory('/raaawfoood/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/articles',
      name: 'Articles',
      component: ArticlesPage,
    },
    {
      path: '/:id',
      name: 'Article',
      component: Article,
    },
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound,
    },
  ]
})

export default router
