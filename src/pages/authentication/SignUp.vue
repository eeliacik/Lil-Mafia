<template>
  <section>
    <base-card><h2>Sign Up</h2></base-card>
    <base-card>
      <button @click="switchUserType('gangster')">Register as Gangster</button>
      <button @click="switchUserType('capo')">Register as Capo</button>
    </base-card>
    <base-card>
      <div v-if="userType === 'gangster'">
        <gangster-form @sign-up-gangster="signUp"></gangster-form>
      </div>
      <div v-else>
        <capo-form @sign-up-capo="signUp"></capo-form>
      </div>
    </base-card>
  </section>
</template>

<script>
import GangsterForm from '../../components/gangsters/GangsterForm.vue';
import CapoForm from '../../components/capos/CapoForm.vue';
export default {
  components: { CapoForm, GangsterForm },
  data() {
    return {
      userType: 'gangster',
    };
  },
  methods: {
    signUp(formData) {
      this.$store.dispatch('signUp', formData);
      if (this.userType === 'gangster') {
        this.$router.replace('/jobs');
      } else {
        this.$router.replace('/job-adding');
      }
    },

    switchUserType(type) {
      this.userType = type;
    },
  },
};
</script>
