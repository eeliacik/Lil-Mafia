import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/homepage/HomePage.vue';
import SignUp from './pages/authentication/SignUp.vue';
import LogIn from './pages/authentication/LogIn.vue';
import GangstersList from './pages/gangsters/GangstersList.vue';
import GangsterDetails from './pages/gangsters/GangsterDetails.vue';
import JobsList from './pages/jobs/JobsList.vue';
import JobDetails from './pages/jobs/JobDetails.vue';
import JobAdding from './pages/jobs/JobAdding.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'home', path: '/', component: HomePage },
    { name: 'signup', path: '/signup', component: SignUp },
    { name: 'login', path: '/login', component: LogIn },
    { name: 'gangsters', path: '/gangsters', component: GangstersList },
    {
      name: 'gangster-details',
      path: '/gangster/:id',
      component: GangsterDetails,
      props: true,
    },
    { name: 'jobs', path: '/jobs', component: JobsList },
    {
      name: 'job-adding',
      path: '/job-adding',
      component: JobAdding,
    },
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