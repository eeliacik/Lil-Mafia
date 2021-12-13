export default {
  saveRequest(_, formData) {
    fetch(
      'https://vue-crud-project-3e582-default-rtdb.europe-west1.firebasedatabase.app/requests.json',
      {
        method: 'POST',
        body: JSON.stringify(formData),
      }
    );
  },
  async loadRequests(context) {
    const response = await fetch(
      'https://vue-crud-project-3e582-default-rtdb.europe-west1.firebasedatabase.app/requests.json'
    );
    const responseData = await response.json();
    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        gangsterId: responseData[key].gangsterId,
        email: responseData[key].email,
        message: responseData[key].message,
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  },
};
