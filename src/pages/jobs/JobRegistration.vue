<template>
  <job-form @register-job="registerJob" ></job-form>
</template>

<script>
import JobForm from '../../components/jobs/JobForm.vue';

export default {
  components: { JobForm },
  methods: {
    registerJob(formData) {
      this.$store.dispatch('jobs/registerJob', formData)
    },
  },
};
</script>
