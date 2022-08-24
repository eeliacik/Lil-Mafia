<template>
  <div class="form-wrapper">
    <div class="form-header">New Job</div>
    <job-form @add-job="newjob"></job-form>
    <p v-show="sendingJob">Creating Job...</p>
  </div>
</template>

<script>
import JobForm from '../../components/jobs/JobForm.vue';

export default {
  components: { JobForm },
  data () {
    return {
      sendingJob: false, 
    }
  },
  methods: {
    created() {
      this.$store.dispatch('jobs/loadJobs');
      this.$store.dispatch('gangsters/loadGangsters');
    },
    async newjob(formData) {
      this.sendingJob = true;
      try {
        await this.$store.dispatch('jobs/newjob', formData);

      // Toast
      const toastData = {
            type: 'info',
            message: 'Job created.',
          };
          this.$store.dispatch('toaster/showToast', toastData);
      //

      } catch (error) {
        console.error(error);

      // Toast
      const toastData = {
            type: 'error',
            message: 'Job could not be created!',
          };
          this.$store.dispatch('toaster/showToast', toastData);
      //

      }
      this.sendingJob = false;
      this.$router.replace('/capojobs');
    },
  },
};
</script>
