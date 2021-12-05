<template>
  <section>
    <base-card>
      <h2>Gangster Registration</h2>
    </base-card>
    <base-card>
      <gangster-form @save-gangster="saveGangster"></gangster-form>
    </base-card>
  </section>
</template>

<script>
import GangsterForm from '../../components/gangsters/GangsterForm.vue';
export default {
  components: { GangsterForm },
  methods: {
    saveGangster(formData) {
      this.$store.dispatch('gangsters/saveGangster', formData);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 1rem 0;

}
</style>
