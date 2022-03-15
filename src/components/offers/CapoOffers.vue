<template>
  <li>
    <div class="items">
      <h3>"{{ aka }}"</h3>
      <h2>{{ price }} $</h2>
      <p>Offer {{ status }}</p>
    </div>
    <div class="actions">
      <button>
        <router-link :to="gangsterDetailsLink">See Gangster</router-link>
      </button>
    </div>
  </li>
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

<style scoped>
a:link,
a:visited {
  color: black;
  text-decoration: none;
}

li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid lightgray;
  padding: 10px;
}

h2,
h3,
h4 {
  margin: 0;
}

.items {
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.actions {
  width: 40%;
  display: flex;
  justify-content: flex-end;
}
</style>
