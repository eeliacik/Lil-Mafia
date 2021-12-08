import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      jobs: [
        {
          id: '2001',
          title: 'Shooping Mall job',
          skills: ['pickpocket'],
          description:
            'an easy pickpocket job at the Ümrallar Shopping Mall in Yozgat',
        },
        {
          id: '2002',
          title: 'Scaring the Syrian man',
          skills: ['bully', 'kidnap'],
          description: 'A man came from Syria have to be learn a lesson.',
        },
        {
          id: '2003',
          title: 'Blackmail the director',
          skills: ['blackmail'],
          description: 'An employee close to getting fired, need to stop that.',
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
