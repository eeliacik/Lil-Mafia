<template>
  <div class="details-wrapper">
    <job-bidding
      :showDialog="showDialog"
      :sendingBid="sendingBid"
      @place-bid="placeBid"
      @close-dialog="closeDialog"
    ></job-bidding>
    <div class="details-header">Job Details</div>
    <base-card>
      <div class="details-container">
        <div class="details-item">
          <div class="details-item-title">
            {{ title }}
          </div>
        </div>
        <div class="details-item">
          <div class="details-title">Territory</div>
          <div class="details-item-terr">{{ terr }}</div>
        </div>
        <div class="details-item">
          <div class="details-title">Description</div>
          <div class="details-item-desc">
            {{ desc }}
          </div>
        </div>
        <div class="details-item">
          <div class="details-title">Skills</div>
          <ul class="details-skills-container">
            <li class="details-skill" v-for="skill in skills" :key="skill">
              {{ skill.charAt(0).toUpperCase() + skill.slice(1) }}
            </li>
          </ul>
        </div>
        <div class="details-action">
          <div v-if="userType === 'gangster' && !bidPlaced">
            <span class="bid-button" @click="openBidding">BID</span>
          </div>
          <router-link
            class="back-button"
            :to="this.isUserJob ? '/capojobs' : '/jobs'"
            >BACK</router-link
          >
        </div>
      </div>
    </base-card>
    <div v-if="userType === 'capo'" class="details-header">Received Offers</div>
    <div v-if="userType === 'capo'">
      <base-card class="offers-wrapper">
        <div class="offers-list-title-container">
          <span class="offers-list-title-01">Gangster</span>
          <span class="offers-list-title-02">Status</span>
          <span class="offers-list-title-03">Price</span>
        </div>
        <span class="empty-message" v-if="!hasOffers">No bids.</span>
        <ul class="offers-container" v-else>
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
  </div>
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
      return this.gangsterOffers.length > 0;
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
      this.$router.push('/gangsteroffers');
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
    //       this.$router.push('/gangsteroffers');
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

<style lang="scss">
.details-wrapper {
  width: 100%;
  max-width: calc(var(--max-width) * 0.71);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.details-header {
  width: 100%;
  padding: 0 1.2rem;
  font-size: 1.1rem;
}

.details-container {
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  cursor: default;
}

.details-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.details-title {
  color: var(--theme-color-light-3);
  font-size: 0.7rem;
}

.details-item-title {
  color: var(--theme-color-light);
  font-size: 1.8rem;
}

.details-item-terr {
  font-size: 1.3rem;
}

.details-item-desc {
  font-size: 1rem;
}

.details-skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.details-skill {
  font-size: 1rem;
  color: var(--lm-primary-color-light);
}

.details-action {
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
}

.bid-button {
  background-color: var(--lm-secondary-color-dark);
  color: var(--theme-color-light);
  padding: 0.3rem 0.6rem;
  border-radius: 0.2rem;
  font-size: 0.9rem;
  &:hover {
    background-color: var(--lm-secondary-color);
    cursor: pointer;
  }
}

.back-link,
.back-link:visited {
  padding: 0.3rem 0.6rem;
  color: var(--lm-primary-color);
  border-radius: 0.2rem;
  font-size: 0.9rem;
  &:hover {
    color: var(--lm-primary-color-light);
    background-color: var(--theme-color-dark-3);
  }
}
</style>
