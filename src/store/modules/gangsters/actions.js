import {
  postType,
  postGangster,
  getGangsters,
  postOffer,
} from '../../../axios/mafia/mafia';

export default {
  async registerGangster(context, payload) {
    const userId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    try {
      await postType(userId, token, payload.userType);
      await postGangster(userId, token, payload.gangsterData);
    } catch (error) {
      console.log(error);
    }
  },
  async loadGangsters(context) {
    const token = context.rootGetters.token;
    try {
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
    } catch (error) {
      console.error(error);
    }
  },

  addOffer(context, bid) {
    return new Promise((resolve, reject) => {
      const userId = context.rootGetters.userId;
      const token = context.rootGetters.token;
      const offers = context.getters.gangsters.find(
        (gangster) => gangster.id === userId
      ).offers;
      offers.push(bid);
      postOffer(userId, token, offers)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  },
  removeOffer(context, jobId) {
    return new Promise((resolve, reject) => {
      const userId = context.rootGetters.userId;
      const token = context.rootGetters.token;
      const offers = context.getters.gangsters.find(
        (gangster) => gangster.id === userId
      ).offers;
      offers.splice(
        offers.findIndex((offer) => offer.jobId === jobId),
        1
      );
      postOffer(userId, token, offers)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  },
  acceptOffer(context, offerData) {
    return new Promise((resolve, reject) => {
      const gangsterId = offerData.gangsterId;
      const jobId = offerData.jobId;
      const token = context.rootGetters.token;
      const offers = context.getters.gangsters.find(
        (gangster) => gangster.id === gangsterId
      ).offers;
      const newOffers = offers.map((offer) =>
        offer.jobId === jobId ? { ...offer, status: 'accepted' } : offer
      );
      postOffer(gangsterId, token, newOffers)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  declineOffer(context, offerData) {
    return new Promise((resolve, reject) => {
      const gangsterId = offerData.gangsterId;
      const jobId = offerData.jobId;
      const token = context.rootGetters.token;
      const offers = context.getters.gangsters.find(
        (gangster) => gangster.id === gangsterId
      ).offers;
      const newOffers = offers.map((offer) =>
        offer.jobId === jobId ? { ...offer, status: 'declined' } : offer
      );
      postOffer(gangsterId, token, newOffers)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
