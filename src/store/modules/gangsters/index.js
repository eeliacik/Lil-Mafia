import mutations from './mutations.js';
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
          gangsters: [
            {
              id: '001',
              firstName: 'Abdurrahman',
              lastName: 'Kıllanır',
              nickName: 'The Kıll',
              from: 'Yozgat',
              description:
                'I am the one of the most popular FA gangsters from Yozgat.',
              skills: ['blackmail', 'pickpocket', 'bully'],
              hourlyRate: 100,
              appliedJobs: [],
            },
            {
              id: '002',
              firstName: 'Faysal',
              lastName: 'Top',
              nickName: 'Top Faysal',
              from: 'Bursa',
              description: 'I am the best kidnapper.',
              skills: ['pickpocket', 'kidnap'],
              hourlyRate: 120,
              appliedJobs: [],
            },
            {
              id: '003',
              firstName: 'Haldun',
              lastName: 'Soyubozuk',
              nickName: 'The Family Man',
              from: 'Zonguldak',
              description: 'Hello I will punish your enemies.',
              skills: ['bully', 'blackmail'],
              hourlyRate: 120,
              appliedJobs: [],
            },
          ],
        };
    },
    mutations,
    actions,
    getters
};