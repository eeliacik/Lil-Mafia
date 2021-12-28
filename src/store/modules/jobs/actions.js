import instance from '../../../axios/mafia/instance';
import { postJob } from '../../../axios/mafia/mafia';

export default {
  addJob(_, formData) {
    postJob(formData);
  },

  async loadJobs(context) {
    const response = await instance.get('jobs.json');
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
      };
      jobs.push(job);
    }
    context.commit('setJobs', jobs);
  },
};
