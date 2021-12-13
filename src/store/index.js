import { createStore } from 'vuex';

import gangstersModule from './modules/gangsters/index.js';
import requestsModule from './modules/requests/index.js';
import jobsModule from './modules/jobs/index.js';
import authenticationModule from './modules/authentication/index.js';

const store = createStore({
  state() {
    return {};
  },
  modules: {
    gangsters: gangstersModule,
    requests: requestsModule,
    jobs: jobsModule,
    authentication: authenticationModule,
  },
});

export default store;
