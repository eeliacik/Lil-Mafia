import { createRouter, createWebHistory } from 'vue-router';

import GangstersList from './pages/gangsters/GangstersList.vue';
import GangsterDetail from './pages/gangsters/GangsterDetail.vue';
import GangsterRegistration from './pages/gangsters/GangsterRegistration.vue';
import ReceivedRequests from './pages/requests/ReceivedRequests.vue';
import JobsList from './pages/jobs/JobsList.vue';
import JobDetail from './pages/jobs/JobDetail.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/gangsters' },
    { path: '/gangsters', component: GangstersList },
    { path: '/gangsters/g-001/detail', component: GangsterDetail },
    { path: '/registration', component: GangsterRegistration },
    { path: '/requests', component: ReceivedRequests},
    { path: '/jobs', component: JobsList },
    { path: '/jobs/:id', component: JobDetail },
    { path: '/:notFound(.*)', component: NotFound }
  ],
});

export default router;
