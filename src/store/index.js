import { createStore } from 'vuex';

import gangstersModule from './modules/gangsters/index.js';
import requestsModule from './modules/requests/index.js';

const store = createStore({
  state() {
    return {};
  },
  modules: {
    gangsters: gangstersModule,
    requests: requestsModule,
  },
});

export default store;
