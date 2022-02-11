<template>
  <section>
    <base-card>
      <div>
        <h2>{{ fullName }}</h2>
        <h3>From "{{ from }}"</h3>
        <h3>aKa "{{ aka }}"</h3>
        <p>Description: {{ desc }}</p>
        <div>
          Skills: 
          <base-badge
            v-for="skill in skills"
            :key="skill"
            :type="skill"
            :title="skill"
          ></base-badge>
        </div>
      </div>
      <div class="details-action">
        <router-link to="">Back to Job</router-link>
      </div>
    </base-card>
    <base-card>
      <h2>Offer for "job name" is "price" $
      </h2>
      <button>Accept and Send Message</button>
      <button>Decline Offer</button>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id', 'job'],
  computed: {
    gangster() {
      return this.$store.getters['gangsters/gangsters'].find(
        (gangster) => gangster.id === this.id
      );
    },
    fullName() {
      return this.gangster.firstName + ' ' + this.gangster.lastName;
    },
    aka() {
      return this.gangster.nickName;
    },
    from() {
      return this.gangster.from;
    },
    desc() {
      return this.gangster.description;
    },
    skills() {
      return this.gangster.skills;
    },
  },
  created() {
    console.log(this.$route.params)
    console.log(this.gangster)
  },
};
</script>

<style scoped>
.details-action {
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
}
</style>
