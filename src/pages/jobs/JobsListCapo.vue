<template>
  <div class="jobs-wrapper">
    <div class="new-job-container">
      <router-link class="new-job-link" to="/newjob">+ NEW JOB</router-link>
    </div>
    <base-card>
      <div class="jobs-list-container">
        <div class="jobs-list-title-container">
          <span class="jobs-list-title-01">Title</span>
          <span class="jobs-list-title-02">Territory</span>
          <span class="jobs-list-title-03">Offers</span>
        </div>
        <ul class="jobs-container">
          <job-item-capo
            v-for="job in capoJobs"
            :key="job.id"
            :id="job.id"
            :title="job.title"
            :terr="job.territory"
            :bids="job.bids"
          ></job-item-capo>
        </ul>
      </div>
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

<style lang="scss">
.new-job-container {
  padding-left: 0.6rem;
  display: flex;
}

.new-job-link {
  padding: 0.2rem 0.6rem;
  border-radius: 0.2rem;
  color: var(--lm-secondary-color);
  // color: var(--theme-color-light-2);
  // background-color: var(--lm-secondary-color);
  font-size: 0.9rem;
  &:hover {
    color: var(--lm-secondary-color-light);
    background-color: var(--theme-color-dark-2);
  }
}
</style>
