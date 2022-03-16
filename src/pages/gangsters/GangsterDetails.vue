<template>
  <section>
    <base-card>
      <div>
        <h2>{{ fullName }}</h2>
        <h3>From "{{ from }}"</h3>
        <h3>aKa "{{ aka }}"</h3>
        <h1>Description:</h1>
        <p>{{ desc }}</p>
        <div>
          <h1>Skills:</h1>
          <base-badge
            v-for="skill in skills"
            :key="skill"
            :type="skill"
            :title="skill"
          ></base-badge>
        </div>
      </div>
    </base-card>
    <base-card>
      <div class="job-offer">
        <h2>{{ aka }}</h2>
        <h3>wants</h3>
        <h2>{{ price }} $</h2>
        <h3>to finish "{{ title }}"</h3>
      </div>
      <p v-show="isLoading">Loading...</p>
      <div v-if="!this.isLoading">
        <div class="details-action">
          <div v-if="status === 'waiting'">
            <button class="accept-button" @click="acceptOffer">
              Accept Offer
            </button>
            <button class="decline-button" @click="declineOffer">
              Decline Offer
            </button>
          </div>
          <p v-else>You have {{ status }} this offer.</p>
          <button>
            <router-link :to="backToJob">Back to Job</router-link>
          </button>
        </div>
      </div>
    </base-card>
  </section>
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

<style scoped>

a:link,
a:visited {
  color: black;
  text-decoration: none;
}

.job-offer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.details-action {
  display: flex;
  justify-content: space-between;
  margin: 5px;
}

.accept-button {
  height: 30px;
  background-color: lightgreen;
}

.decline-button {
  height: 30px;
  background-color: lightcoral;
}
</style>
