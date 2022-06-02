<template>
  <div class="jobs-wrapper">
    <!-- <header class="jobs-header">Jobs</header> -->
    <base-card>
      <job-filter @get-skills="filterJobs"></job-filter>
    </base-card>
    <base-card>
      <ul class="jobs-container" v-if="hasJobs && hasSkills">
        <job-item
          v-for="job in availableJobs"
          :key="job.id"
          :id="job.id"
          :title="job.title"
          :terr="job.territory"
          :skills="job.skills"
          :desc="job.description"
        ></job-item>
      </ul>
      <p v-else>No Jobs Found!</p>
    </base-card>
  </div>
</template>

<script>
import JobItem from '../../components/jobs/JobItem.vue';
import JobFilter from '../../components/jobs/JobFilter.vue';

import { ArrayNotEmpty } from '../../utilities/array_not_empty.js';

export default {
  components: { JobItem, JobFilter },
  data() {
    return {
      activeSkills: [
        'blackmail',
        'bully',
        'kidnap',
        'launder',
        'pickpocket',
        'smuggle',
      ],
    };
  },
  computed: {
    userId() {
      return this.$store.getters.userId;
    },
    jobs() {
      return this.$store.getters['jobs/jobs'];
    },
    filteredJobs() {
      return this.jobs.filter((job) => {
        return this.activeSkills.some((skill) => {
          return job.skills.includes(skill);
        });
      });
    },
    availableJobs() {
      return this.filteredJobs.filter((job) => {
        return !job.bids.some((bid) => {
          return bid.gangsterId === this.userId;
        });
      });
    },
    hasJobs() {
      return ArrayNotEmpty(this.availableJobs);
    },
    hasSkills() {
      return ArrayNotEmpty(this.activeSkills);
    },
  },
  methods: {
    filterJobs(selectedSkills) {
      this.activeSkills = selectedSkills;
    },
  },
  created() {
    this.$store.dispatch('jobs/loadJobs');
    this.$store.dispatch('gangsters/loadGangsters');
  },
};
</script>

<style>
.jobs-wrapper {
  width: 100%;
  max-width: calc(var(--max-width) * 0.71);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.jobs-header {
  width: 100%;
  padding: 0 0.6rem;
  font-size: 1.1rem;
}  

.jobs-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
