<template>
  <section >
    <base-card class="container">
      <h2>Gangster Registration</h2>
    </base-card>
    <base-card>
      <gangster-form @register-gangster="registerGangster"></gangster-form>
    </base-card>
  </section>
</template>

<script>
import GangsterForm from '../../components/gangsters/GangsterForm.vue';
export default {
  components: { GangsterForm },
  methods: {
    registerGangster(formData) {
      this.$store.dispatch('gangsters/registerGangster', formData);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 1rem 0;
}

.container {
  margin: 1rem auto;
}
</style>
