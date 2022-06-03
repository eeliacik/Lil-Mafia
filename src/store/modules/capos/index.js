import actions from './actions.js';

export default {
  namespaced: true,
  state() {
    return {
      capos: [],
    };
  },
  actions,
};
