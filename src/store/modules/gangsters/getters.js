export default {
  gangsters(state) {
    return state.gangsters;
  },
  offers(state) {
    const authenticatedGangsterId = '-MqslgL2UG70K1XNE3hV';
    return state.gangsters.find(gangster => gangster.id === authenticatedGangsterId).offers;
  },
};
