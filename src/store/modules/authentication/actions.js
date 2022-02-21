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
      console.log(authData);

      postSignUp(authData)
        .then(({ data }) => {
          context.commit('setUser', {
            userId: data.localId,
            token: data.idToken,
            tokenExpiration: data.expiresIn,
          });
          const userType = { userType: formData.userType };
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
          } else {
            const capoData = {
              firstName: formData.firstName,
              lastName: formData.lastName,
              nickName: formData.nickName,
            };
            context.dispatch('capos/registerCapo', { userType, capoData });
            resolve(context.rootGetters.userType);
          }
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
          // context.dispatch('loadUserType')
          // resolve(context.rootGetters.userType);

          // console.log('postLogin ' + context.rootGetters.userType);
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
    })
  },
  async loadUserType(context) {
    const userId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await getType(userId, token);
    const responseData = await response.data;
    context.commit('setType', responseData);

    console.log('loadUserType ' + responseData.userType);

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
