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
      } catch (error) {
        console.error(error);
      }
      this.sendingJob = false;
      this.$router.replace('/capojobs');
    },
  },
};
</script>
