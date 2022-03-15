import instance from './instance';

export function postType(userId, token, userType) {
  return instance.put(`/types/${userId}.json?auth=${token}`, userType);
}

export function postGangster(userId, token, gangsterData) {
  return instance.put(`/gangsters/${userId}.json?auth=${token}`, gangsterData);
}

export function postCapo(userId, token, capoData) {
  return instance.put(`/capos/${userId}.json?auth=${token}`, capoData);
}

export function postJob(token, jobData) {
  return instance.post(`/jobs.json?auth=${token}`, jobData);
}

export function getType(userId, token) {
  return instance.get(`/types/${userId}.json?auth=${token}`);
}

export function getGangsters(token) {
  return instance.get(`/gangsters.json?auth=${token}`);
}

export function getJobs(token) {
  return instance.get(`/jobs.json?auth=${token}`);
}

export function postOffer(gangsterId, token, offers) {
  return instance.patch(
    `/gangsters/${gangsterId}.json?auth=${token}`,
    { offers: offers }
  );
}

export function postBid(jobId, token, bids) {
  return instance.patch(
    `/jobs/${jobId}.json?auth=${token}`,
    { bids: bids }
  );
}
