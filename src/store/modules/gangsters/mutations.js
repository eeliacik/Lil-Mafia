export default {
    setGangsters(state, payload) {
        state.gangsters = payload;
    },
    addJob(state, idData) {
        const authenticatedGangster = state.gangsters.find(gangster => gangster.id === idData.gangsterId);
        authenticatedGangster.appliedJobs.push(idData.jobId);
    },
    removeJob(state, idData) {
        const authenticatedGangster = state.gangsters.find(gangster => gangster.id === idData.gangsterId);
        authenticatedGangster.appliedJobs.splice((authenticatedGangster.appliedJobs.findIndex(id => id === idData.jobId)), 1);
    },
};