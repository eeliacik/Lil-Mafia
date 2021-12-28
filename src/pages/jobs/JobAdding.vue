<template>
  <base-card>
    <h2>New Job</h2>
  </base-card>
  <base-card>
    <job-form @add-job="addJob"></job-form>
  </base-card>
</template>

<script>
import JobForm from '../../components/jobs/JobForm.vue';

export default {
  components: { JobForm },
  methods: {
    addJob(formData) {
      this.$store.dispatch('jobs/addJob', formData);
    },
  },
};
</script>
