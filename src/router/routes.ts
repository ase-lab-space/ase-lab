import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: '/about',
        component: () => import('src/pages/AboutPage.vue'),
      },
      {
        path: 'activities',
        component: () => import('pages/ActivitiesPage.vue'),
      },
      {
        path: 'articles',
        component: () => import('pages/ArticlesPage.vue'),
      },
      {
        path: 'contact',
        component: () => import('pages/ContactPage.vue'),
      },
      {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
      },
    ],
  },
  {
    path: '/scale-up',
    component: () => import('layouts/ScaleUpLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/ScaleUp.vue'),
      },
    ],
  },
];

export default routes;
