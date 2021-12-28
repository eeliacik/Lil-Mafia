import instance from './instance';

export function postLogin(authData) {
  return instance.post('', authData);
}
