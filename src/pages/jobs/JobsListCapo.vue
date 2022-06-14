<template>
  <div class="jobs-wrapper">
    <base-card>
      <div class="jobs-list-title-container">
        <span class="jobs-list-title-01">Title</span>
        <span class="jobs-list-title-02">Territory</span>
        <span class="jobs-list-title-03">Offers</span>
      </div>
      <router-link to="/newjob">New Job</router-link>
      <span class="empty-message" v-if="!hasJobs"
        >You haven't add any job yet.</span
      >
      <ul class="jobs-container" v-else>
        <job-item-capo
          v-for="job in capoJobs"
          :key="job.id"
          :id="job.id"
          :title="job.title"
          :terr="job.territory"
          :bids="job.bids"
        ></job-item-capo>
      </ul>
    </base-card>
  </div>
</template>

<script>
import JobItemCapo from '../../components/jobs/JobItemCapo.vue';

import { ArrayNotEmpty } from '../../utilities/array_not_empty.js';

export default {
  components: { JobItemCapo },
  created() {
    this.$store.dispatch('jobs/loadJobs');
    this.$store.dispatch('gangsters/loadGangsters');
  },
  computed: {
    capoId() {
      return this.$store.getters.userId;
    },
    jobs() {
      return this.$store.getters['jobs/jobs'];
    },
    capoJobs() {
      return this.jobs.filter((job) => job.capoId === this.capoId);
    },
    hasJobs() {
      return ArrayNotEmpty(this.jobs);
    },
  },
};
</script>

