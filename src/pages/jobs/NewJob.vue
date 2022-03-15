<template>
  <base-card>
    <h2>New Job</h2>
  </base-card>
  <base-card>
    <job-form @add-job="newjob"></job-form>
    <p v-show="sendingJob">Creating new job...</p>
  </base-card>
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
      this.$router.replace('/myjobs');
    },
  },
};
</script>
