<template>
  <router-link class="job-link" :to="jobDetailsLink">
    <div class="job-item">
      <div class="job-title">{{ title }}</div>
      <div class="job-terr">{{ terr }}</div>
      <div class="job-bids">{{ offerCount }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['id', 'title', 'terr', 'bids'],
  computed: {
    offerCount() {
      return this.bids.length - 1;
    },
    jobDetailsLink() {
      return {
        name: 'job-details',
        params: { id: this.id },
      };
    },
  },
};
</script>

