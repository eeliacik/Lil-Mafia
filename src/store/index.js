import { createStore } from 'vuex';

import gangstersModule from './modules/gangsters/index.js';
import requestsModule from './modules/requests/index.js';
import jobsModule from './modules/jobs/index.js';

const store = createStore({
  state() {
    return {};
  },
  modules: {
    gangsters: gangstersModule,
    requests: requestsModule,
    jobs: jobsModule,
  },
});

export default store;
