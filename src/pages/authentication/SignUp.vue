<template>
  <section>
    <base-card><h2>Sign Up</h2> </base-card>
    <base-card>
      <button @click="switchUserType('gangster')">Register as Gangster</button>
      <button @click="switchUserType('capo')">Register as Capo</button>
    </base-card>
    <base-card>
      <div v-if="typeSelect === 'gangster'">
        <gangster-form @sign-up-gangster="signUp"></gangster-form>
      </div>
      <div v-else>
        <capo-form @sign-up-capo="signUp"></capo-form>
      </div>
    <p v-if="isLoading">Signing Up...</p>
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
      typeSelect: 'gangster',
      isLoading: false,
    };
  },
  methods: {
    signUp(formData) {
      this.isLoading = true;
      this.$store
        .dispatch('signUp', formData)
        .then((data) => {
          this.isLoading = false;
          this.$router.replace(data.userType === 'gangster' ? '/jobs' : '/newjob')
        })
        .catch((error) => {
          console.log(error);
        });
    },
    switchUserType(type) {
      this.typeSelect = type;
    },
  },
};
</script>
