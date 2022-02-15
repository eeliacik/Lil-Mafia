<template>
  <section>
    <base-card><h2>My Jobs</h2></base-card>
    <base-card>
      <job-filter @get-skills="filterJobs"></job-filter>
    </base-card>
    <div>
      <base-card>
        <ul v-if="hasJobs && hasSkills">
          <my-job-item
            v-for="job in filteredJobs"
            :key="job.id"
            :id="job.id"
            :title="job.title"
            :bids="job.bids"
          ></my-job-item>
        </ul>
        <p v-else>No Jobs Found!</p>
      </base-card>
    </div>
  </section>
</template>

<script>
import MyJobItem from '../../components/jobs/MyJobItem.vue';
import JobFilter from '../../components/jobs/JobFilter.vue';

import { ArrayNotEmpty } from '../../utilities/array_not_empty.js';

export default {
  components: { MyJobItem, JobFilter },
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
    filteredJobs() {
      return this.jobs
        .filter((job) => {
          return this.activeSkills.some((skill) => {
            return job.skills.includes(skill);
          });
        })
        .filter((job) => job.capoId === this.capoId);
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
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
