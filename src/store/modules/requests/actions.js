export default {
  saveRequest(context, data) {
    const reqId = new Date().toISOString();
    data.id = reqId;
    context.commit('saveRequest', data);
  },
};
