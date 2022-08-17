import { useToast } from 'vue-toastification';

const toast = useToast();

export default {
  namespaced: true,
  state() {
    return {};
  },
  mutations: {},
  actions: {
    showToast(context, data) {
      
      // toast.info('Info')
      // toast.success('Success')
      // toast.warning('Warning')
      // toast.error('Danger')

      if (data.type === 'info') {
        toast.info(data.message);
      } else if (data.type === 'success') {
        toast.success(data.message);
      } else if (data.type === 'warning') {
        toast.warning(data.message);
      } else if (data.type === 'error') {
        toast.error(data.message);
      }
    },
  },
};
