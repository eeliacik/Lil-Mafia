<template>
  <li>
    <h3>{{ fullName }}, aka "{{ aka }}"</h3>
    <div>
      <base-badge
        v-for="skill in skills"
        :key="skill"
        :type="skill"
        :title="skill"
      ></base-badge>
    </div>
    <div class="actions">
      <router-link :to="gangsterDetailsLink">View Gangster Details</router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'aka', 'from', 'desc', 'skills'],

  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    gangsterDetailsLink() {
      // return '/gangster/' + this.id;
      // return this.$route.path + '/' + this.id;   //  /gangsters/001
      return {
        name: 'gangster-details',
        params: {
          id: this.id,
        },
      };
    },
  },
};
</script>

<style scoped>
li {
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
}

h3,
h4 {
  margin: 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
