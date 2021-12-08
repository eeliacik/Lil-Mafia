<template>
  <section>
    <ul>
      <base-card>
        <li class="list" v-for="req in requests" :key="req.id">
          <div class="list-item">
            <h3>{{ req.email }}</h3>
            <p>{{ req.message }}</p>
            <button>Replay</button>
          </div>
        </li>
      </base-card>
    </ul>
  </section>
</template>

<script>
export default {
  created() {
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
ul {
  list-style: none;
  padding: 0;
}

.list {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}

.list-item {
  border: 1px solid gray;
  border-radius: 10px;;
  padding: 0.25rem;
}
</style>
