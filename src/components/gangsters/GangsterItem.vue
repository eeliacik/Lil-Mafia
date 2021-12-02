<template>
  <li>
    <h3>{{ fullName }}, aka "{{ aka }}"</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge
        v-for="skill in skills"
        :key="skill"
        :type="skill"
        :title="skill"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button mode="flat" link>Contact</base-button>
      <base-button mode="frame" link :to="gangsterDetailsLink"
        >View Details</base-button
      >
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
    'rate',
  ],
  mounted() {
    console.log(this.gangsterDetailsLink);
  },

  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    gangsterDetailsLink() {
      // return '/gangster/' + this.id;
      // return this.$route.path + '/' + this.id;   //  /gangsters/001
      return {
        name: 'gangster-detail',
        params: {
          id: this.id
        }
      };
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.26);
}

h3 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
