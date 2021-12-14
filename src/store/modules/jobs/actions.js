export default {
  registerJob(_, formData) {
    fetch(
      'https://vue-crud-project-3e582-default-rtdb.europe-west1.firebasedatabase.app/jobs.json',
      {
        method: 'POST',
        body: JSON.stringify(formData),
      }
    );
  },
};