import { getJobs, postJob, postBid } from '../../../axios/mafia/mafia';

export default {
  newjob(context, payload) {
    return new Promise((resolve, reject) => {
      const userId = context.rootGetters.userId;
      payload.capoId = userId;
      const token = context.rootGetters.token;
      postJob(token, payload)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  },
  async loadJobs(context) {
    const token = context.rootGetters.token;
    try {
      const response = await getJobs(token);
      const responseData = await response.data;
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
        context.commit('setJobs', jobs);
      }
    } catch (error) {
      console.error(error);
    }
  },
  addBid(context, bid) {
    return new Promise((resolve, reject) => {
      const userId = context.rootGetters.userId;
      const token = context.rootGetters.token;
      const bids = context.getters.jobs.find(
        (job) => job.id === bid.jobId
      ).bids;
      const newBid = {
        gangsterId: userId,
        price: bid.price,
        status: bid.status,
      };
      bids.push(newBid);
      postBid(bid.jobId, token, bids)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  },
  removeBid(context, jobId) {
    return new Promise((resolve, reject) => {
      const userId = context.rootGetters.userId;
      const token = context.rootGetters.token;
      const bids = context.getters.jobs.find((job) => job.id === jobId).bids;
      bids.splice(
        bids.findIndex((bid) => bid.gangsterId === userId),
        1
      );
      postBid(jobId, token, bids)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  },
  acceptBid(context, offerData) {
    return new Promise((resolve, reject) => {
      const gangsterId = offerData.gangsterId;
      const jobId = offerData.jobId;
      const token = context.rootGetters.token;
      const bids = context.getters.jobs.find((job) => job.id === jobId).bids;
      const newBids = bids.map((bid) =>
        bid.gangsterId === gangsterId ? { ...bid, status: 'accepted' } : bid
      );
      postBid(jobId, token, newBids)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
          console.error(error);
        });
    });
  },
  declineBid(context, offerData) {
    return new Promise((resolve, reject) => {
      const gangsterId = offerData.gangsterId;
      const jobId = offerData.jobId;
      const token = context.rootGetters.token;
      const bids = context.getters.jobs.find((job) => job.id === jobId).bids;
      const newBids = bids.map((bid) =>
        bid.gangsterId === gangsterId ? { ...bid, status: 'declined' } : bid
      );
      postBid(jobId, token, newBids)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
          console.error(error);
        });
    });
  },
};
