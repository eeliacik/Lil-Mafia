<template>
  <div class="offers-wrapper">
    <base-card>
      <div class="offers-list-title-container">
        <span class="offers-list-title-01">Title</span>
        <span class="offers-list-title-02">Status</span>
        <span class="offers-list-title-03">Price</span>
      </div>
      <span class="empty-message" v-if="offers.length === 0"
        >No offers.</span
      >
      <ul class="offers-container" v-else>
        <gangster-offers
          v-for="offer in offers"
          :key="offer.jobId"
          :id="offer.jobId"
          :price="offer.price"
          :status="offer.status"
        ></gangster-offers>
      </ul>
    </base-card>
  </div>
</template>

<script>
import GangsterOffers from '../../components/offers/GangsterOffers.vue';

export default {
  components: { GangsterOffers },
  computed: {
    gangsters() {
      return this.$store.getters['gangsters/gangsters'] || [];
    },
    offers() {
      const gangster = this.gangsters.find(
        (gangster) => gangster.id === this.$store.getters.userId
      );
      return gangster
        ? gangster.offers.filter((offer) => offer.jobId !== 'take this!')
        : [];
    },
  },
  created() {
    this.$store.dispatch('jobs/loadJobs');
    this.$store.dispatch('gangsters/loadGangsters');
  },
};
</script>

<style lang="scss">
.offers-wrapper {
  width: 100%;
  max-width: calc(var(--max-width) * 0.71);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.offers-list-title-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 0.6rem 0.6rem 0.6rem;
  margin-bottom: 0.6rem;
  border-bottom: 0.03rem solid var(--theme-color-light-4);
  font-size: 0.7rem;
  cursor: default;
}

.offers-list-title-01 {
  width: 55%;
}

.offers-list-title-02 {
  width: 25%;
}

.offers-list-title-03 {
  width: 5rem;
  text-align: right;
}

.offers-container {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0 0.6rem;
  margin-bottom: -0.5rem;
}
</style>
