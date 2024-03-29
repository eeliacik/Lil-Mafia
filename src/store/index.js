import { createStore } from 'vuex';

import gangstersModule from './modules/gangsters/index.js';
import caposModule from './modules/capos/index.js';
import jobsModule from './modules/jobs/index.js';
import authenticationModule from './modules/authentication/index.js';
import toasterModule from './modules/toaster/index.js';

const store = createStore({
  state() {
    return {};
  },
  modules: {
    gangsters: gangstersModule,
    capos: caposModule,
    jobs: jobsModule,
    authentication: authenticationModule,
    toaster: toasterModule,
  },
});

export default store;
