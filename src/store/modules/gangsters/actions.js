import {
  postType,
  postGangster,
  getGangsters,
  postOffer,
} from '../../../axios/mafia/mafia';

export default {
  registerGangster(context, payload) {
    const userId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    postType(userId, token, payload.userType);
    postGangster(userId, token, payload.gangsterData);
  },
  async loadGangsters(context) {
    const token = context.rootGetters.token;
    const response = await getGangsters(token);
    const responseData = await response.data;
    const gangsters = [];
    for (const key in responseData) {
      const gangster = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        nickName: responseData[key].nickName,
        from: responseData[key].from,
        description: responseData[key].description,
        skills: responseData[key].skills,
        offers: responseData[key].offers,
      };
      gangsters.push(gangster);
    }
    context.commit('setGangsters', gangsters);
  },

  addOffer(context, bid) {
    const userId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const offers = context.getters.gangsters.find(
      (gangster) => gangster.id === userId
    ).offers;

    console.log(offers);

    offers.push(bid);
    postOffer(userId, token, offers);
  },
  removeOffer(context, jobId) {
    const userId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const offers = context.getters.gangsters.find(
      (gangster) => gangster.id === userId
    ).offers;
    offers.splice(offers.findIndex((offer) => offer.jobId === jobId));

    console.log(offers);

    postOffer(userId, token, offers);
  },
  acceptOffer(context, offerData) {
    const gangsterId = offerData.gangsterId;
    const jobId = offerData.jobId;
    const token = context.rootGetters.token;
    const offers = context.getters.gangsters.find(
      (gangster) => gangster.id === gangsterId
    ).offers;

    console.log(offers);

    const newOffers = offers.map((offer) =>
      offer.jobId === jobId ? { ...offer, status: 'accepted' } : offer
    );

    console.log(newOffers);

    postOffer(gangsterId, token, newOffers);
  },
  declineOffer(context, offerData) {
    const gangsterId = offerData.gangsterId;
    const jobId = offerData.jobId;
    const token = context.rootGetters.token;
    const offers = context.getters.gangsters.find(
      (gangster) => gangster.id === gangsterId
    ).offers;

    console.log(offers);

    const newOffers = offers.map((offer) =>
      offer.jobId === jobId ? { ...offer, status: 'declined' } : offer
    );

    console.log(newOffers);

    postOffer(gangsterId, token, newOffers);
  },
};
