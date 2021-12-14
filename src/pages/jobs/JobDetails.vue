<template>
  <section>
    <base-card class="container">
      <div class="details-card">
        <h2>{{ title }}</h2>
        <p>{{ desc }}</p>
        <div>
          <base-badge
            v-for="skill in skills"
            :key="skill"
            :type="skill"
            :title="skill"
          ></base-badge>
        </div>
      </div>
      <div class="details-action">
        <base-button v-if="!bidPlaced" mode="flat" @click="makeOffer">Place Your Bid</base-button>
        <base-button v-else mode="flat-red" @click="withdrawOffer">Withdraw Offer</base-button>
        <base-button mode="frame" link to="/jobs">Back to Jobs</base-button>
      </div>
    </base-card>
  </section>
</template>

<script>

export default {
  props: ['id'],
  computed: {
    job() {
      return this.$store.getters['jobs/jobs'].find((job) => job.id === this.id);
    },
    title() {
      return this.job.title;
    },
    desc() {
      return this.job.description;
    },
    skills() {
      return this.job.skills;
    },
    bidPlaced() {
      return this.$store.getters['gangsters/offers'];
    },
  },
  methods: {
    makeOffer() {
      // const jobId = this.id;
      // this.$store.dispatch('gangsters/addOffer', jobId);
    },
    withdrawOffer() {
      // const jobId = this.id;
      // this.$store.dispatch('gangsters/removeOffer', jobId);
    },
  },
  created() {
    console.log(this.bidPlaced)
  },
};
</script>

<style scoped>
.container {
  margin: 1rem auto;
}

.details-card {
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 1rem;
}

.details-action {
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
}
</style>
