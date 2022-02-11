<template>
  <section>
    <job-bidding
      :showDialog="showDialog"
      @place-bid="placeBid"
      @close-dialog="closeDialog"
    ></job-bidding>
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
        <div v-if="userType === 'gangster'">
          <button v-if="!bidPlaced" @click="openBidding">Place Your Bid</button>
          <button v-else @click="withdrawOffer">Withdraw Offer</button>
        </div>
        <div v-else>
          <div v-if="isUserJob && hasBids">
            <button v-show="!offersVisible">
              <router-link
                :to="'/job/' + this.id + '/offers'"
                @click="toggleOffers"
                >Show Offers</router-link
              >
            </button>
            <button v-show="offersVisible">
              <router-link :to="'/job/' + this.id" @click="toggleOffers"
                >Hide Offers</router-link
              >
            </button>
          </div>
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
    <router-view></router-view>
  </section>
</template>

<script>
import jobBidding from '../../components/jobs/JobBidding.vue';

export default {
  props: ['id'],
  components: { jobBidding },
  data() {
    return {
      showDialog: false,
      offersVisible: false,
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
    hasBids() {
      return this.job.bids.length > 1;
    },
    bidPlaced() {
      return !!this.job.bids.find((bid) => bid.gangsterId === this.userId);
    },
  },
  methods: {
    openBidding() {
      this.showDialog = true;

      console.log(this.job, this.bidPlaced);
    },
    placeBid(price) {
      const jobId = this.id;
      const bid = { jobId: jobId, price: price };
      this.$store.dispatch('gangsters/addOffer', bid);
      this.$store.dispatch('jobs/addBid', bid);
    },
    withdrawOffer() {
      const jobId = this.id;
      this.$store.dispatch('gangsters/removeOffer', jobId);
      this.$store.dispatch('jobs/removeBid', jobId);
    },
    closeDialog() {
      this.showDialog = false;
    },
    toggleOffers() {
      this.offersVisible = !this.offersVisible;
    },
  },
};
</script>

<style scoped>
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
