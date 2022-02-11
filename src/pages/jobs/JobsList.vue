<template>
  <section>
    <base-card><h2>Jobs</h2></base-card>
    <base-card>
      <job-filter @get-skills="filterJobs"></job-filter>
    </base-card>
    <div>
      <base-card>
        <ul v-if="hasJobs && hasSkills">
          <job-item
            v-for="job in filteredJobs"
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
      activeSkills: ['blackmail', 'bully', 'kidnap', 'launder', 'pickpocket', 'smuggle'],
    };
  },
  computed: {
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
    hasJobs() {
      return ArrayNotEmpty(this.jobs);
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
  },
};
</script>

<style scoped>

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

</style>