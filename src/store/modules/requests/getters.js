export default {
    requests(state) {
        const authenticatedGangsterId = '001';
        return state.requests.filter( req => req.gangsterId === authenticatedGangsterId);
    },
};