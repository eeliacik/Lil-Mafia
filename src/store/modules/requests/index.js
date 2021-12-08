import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      requests: [
        {
          id: '1001',
          gangsterId: '001',
          email: 'johnbenjamin@gmail.com',
          message:
            'Hey there. I wanna rob hot-dog buffet at my neighborhood.. Can you help me?',
        },
        {
          id: '1004',
          gangsterId: '001',
          email: 'caluygauyvcuca@dffd.ccs',
          message:
            'lorem ipsum ludogoretsz melt down..',
        },
        {
          id: '1002',
          gangsterId: '003',
          email: 'daroluk.huseyin@gdcn.com',
          message:
            'Selamun aleiukum. I wanna beat my butcher.. Can you help me?',
        },
        {
          id: '1003',
          gangsterId: '002',
          email: 'xxks.waldr@sook.com',
          message:
            'Hello, i have some problems with my son school principle, i want to kick his ass. are you interested?',
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
