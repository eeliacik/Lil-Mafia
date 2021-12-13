<template>
  <section>
    <base-card class="container">
      <h2>Received Requests</h2>
    </base-card>
    <ul>
      <base-card>
        <li class="list" v-for="req in requests" :key="req.id">
          <div class="list-item">
            <h3>From: {{ req.email }}</h3>
            <p>{{ req.message }}</p>
            <base-button mode="flat">Replay</base-button>
          </div>
        </li>
      </base-card>
    </ul>
  </section>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('requests/loadRequests');
    console.log(this.requests);
  },
  computed: {
    requests() {
      return this.$store.getters['requests/requests'];
    },
  },
};
</script>

<style scoped>
.container {
  margin: 1rem auto;
}

ul {
  list-style: none;
  padding: 0;
}

.list {
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0.25rem;
}

.list-item {
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 0.5rem;
}
</style>
