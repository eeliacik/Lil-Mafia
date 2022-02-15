<template>
  <li>
    <base-card>
      <h3>{{ title }}</h3>
      <div v-show="offerCount === 2">
        <h2>{{ offerCount - 1 }}</h2>
        <p>Offer</p>
      </div>
      <div v-show="offerCount > 2">
        <h2>{{ offerCount - 1 }}</h2>
        <p>Offers</p>
      </div>
      <div v-show="offerCount === 1">
        <p>No Offers</p>
      </div>
      <div>
        <button>
          <router-link :to="jobDetailsLink">Job Details</router-link>
        </button>
      </div>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'bids'],
  computed: {
    offerCount() {
      return this.bids.length;
    },
    jobDetailsLink() {
      return {
        name: 'job-details',
        params: { id: this.id },
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

h2 {
  margin: 7px;
}

div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
