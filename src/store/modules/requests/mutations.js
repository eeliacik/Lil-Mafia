export default {
  saveRequest(state, data) {
    state.requests.unshift(data);
  },
};
