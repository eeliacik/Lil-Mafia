<template>
  <base-card>
    <h2>New Job</h2>
  </base-card>
  <base-card>
    <job-form @add-job="newjob"></job-form>
  </base-card>
</template>

<script>
import JobForm from '../../components/jobs/JobForm.vue';

export default {
  components: { JobForm },
  methods: {
    newjob(formData) {
      this.$store.dispatch('jobs/newjob', formData);
    },
  },
};
</script>
