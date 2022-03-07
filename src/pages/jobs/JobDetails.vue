<template>
  <section>
    <job-bidding
      :showDialog="showDialog"
      :sendingBid="sendingBid"
      @place-bid="placeBid"
      @close-dialog="closeDialog"
    ></job-bidding>
    <base-card class="header">
      <h2>Job Details</h2>
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
      <div class="details-action">
        <div v-if="userType === 'gangster' && !bidPlaced">
          <button @click="openBidding">Place Your Bid</button>
        </div>
        <div>
          <button v-if="isUserJob">
            <router-link to="/myjobs">Back to My Jobs</router-link>
          </button>
          <button v-else>
            <router-link to="/jobs">Back to Jobs</router-link>
          </button>
        </div>
      </div>
    </base-card>
    <div v-if="userType === 'capo'">
      <div v-if="hasOffers">
        <base-card class="header">
          <h2>Received Offers</h2>
        </base-card>
        <base-card>
          <ul>
            <capo-offers
              v-for="gangster in gangsterOffers"
              :key="gangster.id"
              :id="gangster.id"
              :aka="gangster.nickName"
              :offers="gangster.offers"
              :job="this.job"
            ></capo-offers>
          </ul>
        </base-card>
      </div>
      <div v-else>
        <base-card class="header">
          <h2>No offers received yet.</h2>
        </base-card>
      </div>
    </div>
  </section>
</template>

<script>
import JobBidding from '../../components/jobs/JobBidding.vue';
import CapoOffers from '../../components/offers/CapoOffers.vue';

export default {
  props: ['id'],
  components: { JobBidding, CapoOffers },
  data() {
    return {
      showDialog: false,
      sendingBid: false,
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
    gangsters() {
      return this.$store.getters['gangsters/gangsters'];
    },
    gangsterOffers() {
      return this.gangsters.filter((gangster) => {
        return gangster.offers.find((offer) => offer.jobId === this.id);
      });
    },
    hasOffers() {
      return !!this.gangsterOffers.length;
    },
  },
  methods: {
    openBidding() {
      this.showDialog = true;
    },
    async placeBid(price) {
      const jobId = this.id;
      const bid = { jobId: jobId, price: price, status: 'waiting' };
      this.sendingBid = true;
      try {
        await this.$store.dispatch('gangsters/addOffer', bid);
        await this.$store.dispatch('jobs/addBid', bid);
      } catch (error) {
        console.error(error);
      }
      this.showDialog = false;
      this.sendingBid = false;
      this.$router.push('/myoffers');
    },
    // placeBid(price) {
    //   const jobId = this.id;
    //   const bid = { jobId: jobId, price: price, status: 'waiting' };
    //   this.sendingBid = true;
    //   this.$store
    //     .dispatch('gangsters/addOffer', bid)
    //     .then(() => {
    //       return this.$store.dispatch('jobs/addBid', bid);
    //     })
    //     .then(() => {
    //       this.showDialog = false;
    //     })
    //     .then(() => {
    //       this.sendingBid = false;
    //       this.$router.push('/myoffers');
    //     });
    // },
    closeDialog() {
      this.showDialog = false;
    },
  },
  created() {
    this.$store.dispatch('jobs/loadJobs');
    this.$store.dispatch('gangsters/loadGangsters');
  },
};
</script>

<style scoped>
a:link,
a:visited {
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
  border: 1px solid lightgray;
  padding: 1rem;
}

.details-action {
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
}
</style>
