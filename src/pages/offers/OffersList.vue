<template>
  <section>
    <base-card>
    <h3>Received Offers</h3>
      <ul>
        <offer-item
          v-for="gangster in gangsterOffers"
          :key="gangster.id"
          :id="gangster.id"
          :firstName="gangster.firstName"
          :lastName="gangster.lastName"
          :aka="gangster.nickName"
          :from="gangster.from"
          :desc="gangster.description"
          :skills="gangster.skills"
          :offers="gangster.offers"
          :job="this.jobId"
        ></offer-item>
      </ul>
    </base-card>
  </section>
</template>

<script>
import OfferItem from '../../components/offers/OfferItem.vue';

export default {
  components: { OfferItem },
  computed: {
    gangsters() {
      return this.$store.getters['gangsters/gangsters'];
    },
    jobId() {
      return this.$route.params.id;
    },
    gangsterOffers() {
      return this.gangsters.filter((gangster) => {
        return gangster.offers.find((offer) => offer.jobId === this.id);
      });
    },
  },
  created() {
    console.log(this.jobId)
  },
  mounted() {
    console.log(this.jobId, this.gangsterOffers);
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

.list-button {
  display: flex;
  justify-content: right;
}
</style>
