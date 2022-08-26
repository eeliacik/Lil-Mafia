<template>
  <div class="details-wrapper">
    <div class="details-header">Offer Details</div>

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
        <div class="status-container" v-show="!withdrawing">
          <p
            class="status-accepted"
            v-if="bidPlaced && bidStatus === 'accepted'"
          >
            Accepted
          </p>
          <p
            class="status-declined"
            v-else-if="bidPlaced && bidStatus === 'declined'"
          >
            Declined
          </p>
          <p
            class="status-waiting"
            v-else-if="bidPlaced && bidStatus === 'waiting'"
          >
            Waiting
          </p>
        </div>
        <div v-show="!withdrawing">
          <div
            class="details-action"
            v-if="
              userType === 'gangster' && bidPlaced && bidStatus === 'waiting'
            "
          >
            <div @click="withdrawOffer" class="withdraw-button">WITHDRAW</div>
            <router-link class="back-link" to="/gangsteroffers"
              >BACK</router-link
            >
          </div>
          <div class="details-action" v-else>
            <router-link class="back-button" to="/gangsteroffers"
              >BACK</router-link
            >
          </div>
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

        // Toast //
        const toastData = {
          type: 'info',
          message: 'Offer canceled.',
        };
        this.$store.dispatch('toaster/showToast', toastData);
        //

      } catch (error) {
        console.error(JSON.stringify(error));

        // Toast //
        const toastData = {
          type: 'error',
          message: 'An error occured.',
        };
        this.$store.dispatch('toaster/showToast', toastData);
        //

      } finally {
        this.withdrawing = false;
        this.$router.push('/gangsteroffers');
      }
    },
  },
};
</script>

<style lang="scss">
.status-container {
  font-size: 2rem;
}

.status-accepted {
  margin: 0;
  color: var(--lm-success-color);
}
.status-declined {
  margin: 0;
  color: var(--lm-danger-color);
}
.status-waiting {
  margin: 0;
  color: var(--lm-warning-color);
}

.withdraw-button {
  padding: 0.3rem 0.6rem;
  border-radius: 0.2rem;
  font-size: 0.9rem;
  color: var(--theme-color-light-2);
  background-color: var(--lm-danger-color-dark);
  &:hover {
    color: var(--theme-color-light);
    background-color: var(--lm-danger-color);
    cursor: pointer;
  }
}

.back-button,
.back-button:visited {
  padding: 0.3rem 0.6rem;
  border-radius: 0.2rem;
  font-size: 0.9rem;
  color: var(--theme-color-light-2);
  background-color: var(--lm-primary-color);
  &:hover {
    color: var(--theme-color-light);
    background-color: var(--lm-primary-color-light);
  }
}
</style>
