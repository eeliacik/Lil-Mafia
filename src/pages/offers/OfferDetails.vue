<template>
  <div>
    <base-card class="header">
      <h2>Offer Details</h2>
    </base-card>
    <base-card class="container">
      <div class="details-card">
        <h2>{{ title }}</h2>
        <h3>
          {{ terr }}
        </h3>
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
      <p v-if="bidPlaced && bidStatus === 'accepted'">Your offer accepted.</p>
      <p v-else-if="bidPlaced && bidStatus === 'declined'">
        Your offer rejected.
      </p>
      <p v-else-if="bidPlaced && bidStatus === 'waiting'">
        Your offer is waiting.
      </p>
      <div class="details-action">
        <div v-if="userType === 'gangster'">
          <button
            v-if="bidPlaced && bidStatus === 'waiting'"
            @click="withdrawOffer"
          >
            Withdraw Offer
          </button>
        </div>
        <div>
          <button>
            <router-link to="/myoffers">Back to My Offers</router-link>
          </button>
        </div>
        <p v-show="withdrawing">Withdrawing...</p>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      withdrawing: false,
    };
  },
  computed: {
    job() {
      return this.$store.getters['jobs/jobs'].find((job) => job.id === this.id);
    },
    title() {
      return this.job.title;
    },
    terr() {
      return this.job.territory;
    },
    desc() {
      return this.job.description;
    },
    skills() {
      return this.job.skills;
    },
    userId() {
      return this.$store.getters.userId;
    },
    userType() {
      return this.$store.getters.userType;
    },
    isUserJob() {
      return this.job.capoId === this.userId;
    },
    bidPlaced() {
      return !!this.job.bids.find((bid) => bid.gangsterId === this.userId);
    },
    bidStatus() {
      return this.job.bids.find((bid) => bid.gangsterId === this.userId).status;
    },
  },
  methods: {
    async withdrawOffer() {
      this.withdrawing = true;
      const jobId = this.id;
      try {
        await this.$store.dispatch('gangsters/removeOffer', jobId);
        await this.$store.dispatch('jobs/removeBid', jobId);
      } catch (error) {
        console.error(JSON.stringify(error));
      } finally {
        this.withdrawing = false;
        this.$router.push('/myoffers');
      }
    },
  },
};
</script>

<style scoped>
a:link {
  color: black;
  text-decoration: none;
}

h2 {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.container {
  margin: 1rem auto;
}

.details-card {
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
}

.details-action {
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
}
</style>
