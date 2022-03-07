import { postSignUp } from '../../../axios/authentication/signup/signup';
import { postLogin } from '../../../axios/authentication/login/login';
import { getType } from '../../../axios/mafia/mafia';

export default {
  signUp(context, formData) {
    return new Promise((resolve, reject) => {
      const authData = {
        email: formData.email,
        password: formData.password,
        returnSecureToken: true,
      };
      const userType = { userType: formData.userType };
      postSignUp(authData)
        .then(({ data }) => {
          context.commit('setUser', {
            userId: data.localId,
            token: data.idToken,
            tokenExpiration: data.expiresIn,
          });
          return data;
        })
        .then(() => {
          if (formData.userType === 'gangster') {
            const gangsterData = {
              firstName: formData.firstName,
              lastName: formData.lastName,
              nickName: formData.nickName,
              from: formData.from,
              description: formData.description,
              skills: formData.skills,
              offers: formData.offers,
            };
            context.dispatch('gangsters/registerGangster', {
              userType,
              gangsterData,
            });
            return;
          } else {
            const capoData = {
              firstName: formData.firstName,
              lastName: formData.lastName,
              nickName: formData.nickName,
            };
            context.dispatch('capos/registerCapo', { userType, capoData });
            return;
          }
        })
        .then(() => {
          context.commit('setType', userType);
          resolve(userType);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  login(context, formData) {
    return new Promise((resolve, reject) => {
      const authData = {
        email: formData.email,
        password: formData.password,
        returnSecureToken: true,
      };
      postLogin(authData)
        .then(({ data }) => {
          context.commit('setUser', {
            userId: data.localId,
            token: data.idToken,
            tokenExpiration: data.expiresIn,
          });
          return data;
        })
        .then(({ localId, idToken }) => {
          return getType(localId, idToken);
        })
        .then(({ data }) => {
          context.commit('setType', data);
          resolve(data.userType);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  logout(context) {
    context.commit('setUser', {
      email: null,
      password: null,
      tokenExpiration: null,
    });
    context.commit('setType', { userType: null });
  },
};
