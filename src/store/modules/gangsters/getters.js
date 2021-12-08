export default {
  gangsters(state) {
    return state.gangsters;
  },
  appliedJobs(state) {
    const authenticatedGangsterId = '001';
    return state.gangsters.find(gangster => gangster.id === authenticatedGangsterId).appliedJobs;
  },
};
