<template>
  <li>
    <h2>{{ price }} $</h2>
    <div class="items">
      <h2>"{{ aka }}"</h2>
      <h3>{{ fullName }}</h3>
    </div>
    <div class="actions">
      <router-link :to="gangsterDetailsLink">See Gangster</router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: [
    'id',
    'firstName',
    'lastName',
    'aka',
    'from',
    'desc',
    'skills',
    'offers',
    'job',
  ],

  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    offer() {
      return this.offers.find((offer) => offer.jobId === this.job);
    },
    price() {
      return this.offered.price;
    },
    gangsterDetailsLink() {
      return {
        name: 'gangster-details',
        params: {
          id: this.id,
          job: this.job,
        },
      };
    },
  },
  created() {
    console.log('offer:', this.offer);
    console.log('price:', this.price);
    console.log('gangsterDetailsLink:', this.gangsterDetailsLink);
  },
};
</script>

<style scoped>
li {
  border: 1px solid lightgray;
  padding: 10px;
}

h2,
h3,
h4 {
  margin: 0;
}

.items {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
