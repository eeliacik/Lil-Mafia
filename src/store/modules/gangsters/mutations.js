export default {
    setGangsters(state, payload) {
        state.gangsters = payload;
    },
    addOffer(state, idData) {
        const authenticatedGangster = state.gangsters.find(gangster => gangster.id === idData.gangsterId);
        authenticatedGangster.offers.push(idData.jobId);
    },
    removeOffer(state, idData) {
        const authenticatedGangster = state.gangsters.find(gangster => gangster.id === idData.gangsterId);
        authenticatedGangster.offers.splice((authenticatedGangster.offers.findIndex(id => id === idData.jobId)), 1);
    },
};