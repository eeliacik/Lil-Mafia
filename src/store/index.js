import { createStore } from 'vuex';

import gangstersModule from './modules/gangsters/index.js';

const store = createStore({
  state() {
    return {};
  },
  modules: {
    gangsters: gangstersModule,
  },
});

export default store;
