<template>
  <section>
    <base-card><h2>My Jobs</h2></base-card>
    <div>
      <base-card>
        <h4><router-link to="/newjob">+ New Job</router-link></h4>
        <p v-if="!hasJobs">You haven't add any job yet.</p>
        <ul v-else>
          <my-job-item
            v-for="job in myJobs"
            :key="job.id"
            :id="job.id"
            :title="job.title"
            :bids="job.bids"
          ></my-job-item>
        </ul>
      </base-card>
    </div>
  </section>
</template>

<script>
import MyJobItem from '../../components/jobs/MyJobItem.vue';

import { ArrayNotEmpty } from '../../utilities/array_not_empty.js';

export default {
  components: { MyJobItem},
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
    myJobs() {
      return this.jobs.filter((job) => job.capoId === this.capoId);
    },
    hasJobs() {
      return ArrayNotEmpty(this.jobs);
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

a:visited,
a:link {
  text-decoration: none;
  color: blue;
}
</style>
