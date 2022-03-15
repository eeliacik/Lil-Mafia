<template>
  <section>
    <base-card class="header"><h2>My Offers</h2></base-card>
    <base-card>
      <p v-if="offers.length === 0">You haven't bid on any job yet.</p>
      <ul v-else>
        <gangster-offers
          v-for="offer in offers"
          :key="offer.jobId"
          :id="offer.jobId"
          :price="offer.price"
          :status="offer.status"
        ></gangster-offers>
      </ul>
    </base-card>
  </section>
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
      const gangster = this.gangsters.find((gangster) => gangster.id === this.$store.getters.userId)
      return gangster ? gangster.offers.filter((offer) => offer.jobId !== 'take this!') : []
    },
  },
   created() {
    this.$store.dispatch('jobs/loadJobs');
    this.$store.dispatch('gangsters/loadGangsters');
    console.log('offers: ', this.offers)
  },
};
</script>

<style scoped>
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

.list-button {
  display: flex;
  justify-content: right;
}
</style>
