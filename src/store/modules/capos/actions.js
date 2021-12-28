import { postCapo } from '../../../axios/mafia/mafia';
import { postType } from '../../../axios/mafia/mafia';

export default {
    registerCapo(context, payload) {
        const userId = context.rootGetters.userId;
        const token = context.rootGetters.token;
        postType(userId, token, payload.userType);
        postCapo(userId, token, payload.capoData);
    }
}