import instance from './instance';

export function postSignUp(authData) {
  return instance.post('', authData);
}