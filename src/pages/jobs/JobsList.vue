<template>
  <div class="jobs-wrapper">
      <job-filter @get-skills="filterJobs"></job-filter>
    <base-card>
      <div class="jobs-list-title-container">
        <span class="jobs-list-title-01">Title</span>
        <span class="jobs-list-title-02">Territory</span>
        <span class="jobs-list-title-03">Bids</span>
      </div>
      <ul class="jobs-container" v-if="hasJobs && hasSkills">
        <job-item
          v-for="job in availableJobs"
          :key="job.id"
          :id="job.id"
          :title="job.title"
          :terr="job.territory"
          :skills="job.skills"
          :bids="job.bids.length"
          :desc="job.description"
        ></job-item>
      </ul>
      <span class="empty-message" v-else>No Jobs Found!</span>
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

.jobs-list-title-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 0.6rem 0.6rem 0.6rem;
  margin-bottom: 0.6rem;
  border-bottom: 0.03rem solid var(--theme-color-light-4);
  font-size: 0.8rem;
  cursor: default;
}

.jobs-list-title-01 {
  width: 55%;
}

.jobs-list-title-02 {
  width: 25%;
}

.jobs-list-title-03 {
  width: 2.5rem;
  text-align: right;
}

.jobs-container {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0 0.6rem;
  margin-bottom: -0.5rem;
}

.empty-message {
  margin: 0;
  padding: 0.6rem;
  font-size: 1rem;
  color: var(--lm-warning-color);
}
</style>
