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

export function postJob(jobData) {
  return instance.put('/jobs.json', jobData);
}

export function getGangsters(token) {
  return instance.get(`/gangsters.json?auth=${token}`);
}
