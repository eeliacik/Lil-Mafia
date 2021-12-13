export default {
   registerGangster(_, formData) {
     fetch(
      'https://vue-crud-project-3e582-default-rtdb.europe-west1.firebasedatabase.app/gangsters.json',
      {
        method: 'POST',
        body: JSON.stringify(formData),
      }
    );
  },
  async loadGangsters(context) {
    const response = await fetch(
      'https://vue-crud-project-3e582-default-rtdb.europe-west1.firebasedatabase.app/gangsters.json'
    );
      const responseData = await response.json();
      if (!response.ok) {
          const error = new Error(responseData.message || 'FATAL ERROR');
          throw error;
        }

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
              hourlyRate: responseData[key].hourlyRate,
              appliedJobs: responseData[key].appliedJobs,
          }
          gangsters.push(gangster);
      }
      context.commit('setGangsters', gangsters);
    },

  addJob(context, jobId) {
    const idData = {
      gangsterId: '001', // id of authenticated gangster.
      jobId: jobId,
    };
    context.commit('addJob', idData);
  },
  removeJob(context, jobId) {
    const idData = {
      gangsterId: '001', // id of authenticated gangster.
      jobId: jobId,
    };
    context.commit('removeJob', idData);
  },
};
