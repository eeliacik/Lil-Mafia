export default {
    setUser(state, payload) {
         state.token = payload.token;
         state.userId = payload.userId;
         state.tokenExpiration = payload.tokenExpiration;
    },
    setType(state, payload) {
        state.userType = payload.userType;
    },
}