import { createRouter, createWebHistory } from 'vue-router';

import GangesterAuthentication from './pages/authentication/GangsterAuthentication.vue';
import GangstersList from './pages/gangsters/GangstersList.vue';
import GangsterDetails from './pages/gangsters/GangsterDetails.vue';
import GangsterRegistration from './pages/gangsters/GangsterRegistration.vue';
import ContactGangster from './pages/requests/ContactGangster.vue';
import ReceivedRequests from './pages/requests/ReceivedRequests.vue';
import JobsList from './pages/jobs/JobsList.vue';
import JobDetails from './pages/jobs/JobDetails.vue';
import CreateJob from './pages/jobs/CreateJob.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'home', path: '/', redirect: '/gangsters' },
    { name: 'authentication', path: '/authentication', component: GangesterAuthentication },
    { name: 'gangsters', path: '/gangsters', component: GangstersList },
    {
      name: 'gangster-details',
      path: '/gangster/:id',
      component: GangsterDetails,
      props: true,
      children: [
        {
          name: 'contact-gangster',
          path: 'contact',
          component: ContactGangster,
          props: true,
        },
      ],
    },
    {
      name: 'registration',
      path: '/registration',
      component: GangsterRegistration,
    },
    { name: 'requests', path: '/requests', component: ReceivedRequests },
    { name: 'jobs', path: '/jobs', component: JobsList },
    { name: 'create-job', path: '/job/create', component: CreateJob },
    {
      name: 'job-details',
      path: '/job/:id',
      component: JobDetails,
      props: true,
    },
    { name: 'not-found', path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
