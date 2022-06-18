<template>
  <router-link class="offer-link" :to="gangsterDetailsLink">
    <div class="offer-item">
      <span class="offer-title">{{ aka }}</span>
      <span class="offer-status">{{ status }}</span>
      <span class="offer-price">{{ price }} $</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['id', 'aka', 'offers', 'job'],

  computed: {
    price() {
      return this.offers.find((offer) => offer.jobId === this.job.id).price;
    },
    status() {
      return this.offers.find((offer) => offer.jobId === this.job.id).status;
    },
    gangsterDetailsLink() {
      return {
        name: 'gangster-details',
        params: {
          id: this.id,
          jobId: this.job.id,
          jobTitle: this.job.title,
        },
      };
    },
  },
};
</script>
