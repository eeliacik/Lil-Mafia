<template>
  <div class="details-wrapper">
    <div class="details-header">Gangster Details</div>
    <base-card>
      <div class="details-container">
        <div class="details-item">
          <div class="details-item-title">
            {{ fullName }}
          </div>
        </div>
        <div class="details-item">
          <div class="details-title">From</div>
          <div class="details-item-terr">{{ from }}</div>
        </div>
        <div class="details-item">
          <div class="details-title">aKa</div>
          <div class="details-item-terr">{{ aka }}</div>
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
        <p class="bid-price">$ {{ price }}</p>
        <p v-show="isLoading">Loading...</p>
        <div v-if="!this.isLoading">
          <div class="details-action">
            <div v-if="status === 'waiting'">
              <button class="accept-button" @click="acceptOffer">
                ACCEPT
              </button>
              <button class="decline-button" @click="declineOffer">
                DECLINE
              </button>
            </div>
            <p v-else>You have {{ status }} this offer.</p>
            <button>
              <router-link :to="backToJob">BACK</router-link>
            </button>
          </div>
        </div>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    gangster() {
      return this.$store.getters['gangsters/gangsters'].find(
        (gangster) => gangster.id === this.id
      );
    },
    fullName() {
      return this.gangster.firstName + ' ' + this.gangster.lastName;
    },
    aka() {
      return this.gangster.nickName;
    },
    from() {
      return this.gangster.from;
    },
    desc() {
      return this.gangster.description;
    },
    skills() {
      return this.gangster.skills;
    },
    offer() {
      return this.gangster.offers.find(
        (offer) => offer.jobId === this.$route.params.jobId
      );
    },
    price() {
      return this.offer.price;
    },
    status() {
      return this.offer.status;
    },
    title() {
      return this.$route.params.jobTitle;
    },
    backToJob() {
      return '/job/' + this.$route.params.jobId;
    },
  },
  methods: {
    async acceptOffer() {
      this.isLoading = true;
      const offerData = {
        jobId: this.$route.params.jobId,
        gangsterId: this.id,
      };
      try {
        await this.$store.dispatch('gangsters/acceptOffer', offerData);
        await this.$store.dispatch('jobs/acceptBid', offerData);
      } catch (error) {
        console.error(error);
      }
      this.isLoading = false;
      this.$router.push(this.backToJob);
    },
    async declineOffer() {
      this.isLoading = true;
      const offerData = {
        jobId: this.$route.params.jobId,
        gangsterId: this.id,
      };
      try {
        await this.$store.dispatch('gangsters/declineOffer', offerData);
        await this.$store.dispatch('jobs/declineBid', offerData);
      } catch (error) {
        console.error(error);
      }
      this.isLoading = false;
      this.$router.push(this.backToJob);
    },
  },
};
</script>

<style lang="scss">
.bid-price {
  margin: 0;
  font-size: 2.5rem;
  color: var(--lm-warning-color);
}
</style>
