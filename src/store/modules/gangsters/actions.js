
import { postType } from '../../../axios/mafia/mafia';
import { postGangster } from '../../../axios/mafia/mafia';
import { getGangsters } from '../../../axios/mafia/mafia';

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

  addOffer(context, jobId) {
    const idData = {
      gangsterId: '-MqslgL2UG70K1XNE3hV', // id of authenticated gangster. first gangster's id.
      jobId: jobId,
    };
    context.commit('addOffer', idData);
  },
  removeOffer(context, jobId) {
    const idData = {
      gangsterId: '-MqslgL2UG70K1XNE3hV', // id of authenticated gangster. first gangster's id.
      jobId: jobId,
    };
    context.commit('removeOffer', idData);
  },
};
