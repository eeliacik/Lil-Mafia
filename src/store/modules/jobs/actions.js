import { getJobs, postJob, postBid } from '../../../axios/mafia/mafia';

export default {
  newjob(context, payload) {
    const userId = context.rootGetters.userId;
    payload.capoId = userId;
    const token = context.rootGetters.token;
    postJob(token, payload);
  },

  async loadJobs(context) {
    const token = context.rootGetters.token;
    const response = await getJobs(token);
    const responseData = await response.data;

    // if (!response.ok) {
    //   const error = new Error(responseData.message || 'FATAL ERROR');
    //   throw error;
    // }

    const jobs = [];
    for (const key in responseData) {
      const job = {
        id: key,
        title: responseData[key].title,
        territory: responseData[key].territory,
        description: responseData[key].description,
        skills: responseData[key].skills,
        bids: responseData[key].bids,
        capoId: responseData[key].capoId,
      };
      jobs.push(job);
    }
    context.commit('setJobs', jobs);
  },
  addBid(context, bid) {
    const userId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const bids = context.getters.jobs.find(job => job.id === bid.jobId).bids;
    const newBid = { gangsterId: userId, price: bid.price };
    bids.push(newBid);

    console.log(bids);

    postBid(bid.jobId, token, bids);
  },

  removeBid(context, jobId) {
    const userId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const bids = context.getters.jobs.find(job => job.id === jobId).bids;
    bids.splice(bids.findIndex(bid => bid.gangsterId === userId));
    
    console.log(bids);

    postBid(jobId, token, bids);
  },
};
