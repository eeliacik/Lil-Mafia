<template>
  <section>
    <base-card class="header"><h2>Jobs</h2></base-card>
    <base-card>
      <job-filter @get-skills="filterJobs"></job-filter>
    </base-card>
    <div>
      <base-card>
        <ul v-if="hasJobs && hasSkills">
          <job-item
            v-for="job in availableJobs"
            :key="job.id"
            :id="job.id"
            :title="job.title"
            :skills="job.skills"
            :desc="job.description"
          ></job-item>
        </ul>
        <p v-else>No Jobs Found!</p>
      </base-card>
    </div>
  </section>
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

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
