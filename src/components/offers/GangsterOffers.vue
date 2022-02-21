<template>
  <li>
    <div class="items">
      <h3>{{ job.title }}</h3>
      <h3>{{ price }} $</h3>
      <p>{{ status }}</p>
    </div>
    <div class="actions">
      <button>
        <router-link :to="offerDatailsLink">Offer Details</router-link>
      </button>
    </div>
  </li>
</template>
<script>
export default {
    props: ['id', 'price', 'status'],
    computed: {
        job() {
            return this.$store.getters['jobs/jobs'].find((job) => job.id === this.id);
        },
        offerDatailsLink() {
            return '/offer/' + this.id;
        },
    },
    created() {
        console.log(this.job)
    },
}
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
