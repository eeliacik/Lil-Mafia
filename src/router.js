import { createRouter, createWebHistory } from 'vue-router';

import GangstersList from './pages/gangsters/GangstersList.vue';
import GangsterDetail from './pages/gangsters/GangsterDetail.vue';
import JobsList from './pages/jobs/JobsList.vue';
import JobDetail from './pages/jobs/JobDetail.vue';
import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/gangsters' },
    {
      path: '/gangsters',
      component: GangstersList,
      children: [{ path: 'gangsters/:id', component: GangsterDetail, porps: true }],
    },
    {
      path: '/jobs',
      component: JobsList,
      children: [{ path: 'jobs/:id', component: JobDetail, porps: true }],
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
});

export default router;
