import { postSignUp } from '../../../axios/authentication/signup/signup';
import { postLogin } from '../../../axios/authentication/login/login';

export default {
  async signUp(context, formData) {
    const authData = {
      email: formData.email,
      password: formData.password,
      returnSecureToken: true,
    };
    console.log(authData);

    const response = await postSignUp(authData);
    const responseData = await response.data;

    console.log(responseData);
    console.log(context.rootGetters)

    context.commit('setUser', {
      userId: responseData.localId,
      token: responseData.idToken,
      tokenExpiration: responseData.expiresIn,
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
      offers: [],
    };
  context.dispatch('gangsters/registerGangster', { userType, gangsterData });
} else {
  const capoData = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    nickName: formData.nickName,
    jobs: formData.jobs,
  };
  context.dispatch('capos/registerCapo', { userType, capoData });
}
  },

  async login(context, formData) {

    const authData = {
      email: formData.email,
      password: formData.password,
      returnSecureToken: true,
    };
    const response = await postLogin(authData);
    const responseData = await response.data;

    console.log(responseData);

    context.commit('setUser', {
      userId: responseData.localId,
      token: responseData.idToken,
      tokenExpiration: responseData.expiresIn,
    });

  }
};
