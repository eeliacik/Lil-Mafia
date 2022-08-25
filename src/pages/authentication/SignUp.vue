<template>
  <div class="form-wrapper">
    <div class="form-header">Sign Up</div>
    <div class="form-switcher-container">
      <div
        class="form-switcher"
        :class="{ 'form-switcher-active': typeSelect === 'capo' }"
        @click="switchUserType('capo')"
      >
        Capo
      </div>
      <div
        class="form-switcher"
        :class="{ 'form-switcher-active': typeSelect === 'gangster' }"
        @click="switchUserType('gangster')"
      >
        Gangster
      </div>
    </div>
    <gangster-form
      v-if="typeSelect === 'gangster'"
      :class="{ 'non-clickable': this.isLoading }"
      @sign-up-gangster="signUp"
    ></gangster-form>
    <capo-form
      v-else
      @sign-up-capo="signUp"
      :class="{ 'non-clickable': this.isLoading }"
    ></capo-form>
    <p v-if="isLoading">Signing Up...</p>
  </div>
</template>

<script>
import GangsterForm from '../../components/gangsters/GangsterForm.vue';
import CapoForm from '../../components/capos/CapoForm.vue';
export default {
  components: { CapoForm, GangsterForm },
  data() {
    return {
      typeSelect: 'capo',
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

          // Toast //
          const toastData = {
            type: 'info',
            message: 'Successfully Signed Up!',
          };
          this.$store.dispatch('toaster/showToast', toastData);
          //

          this.$router.replace(
            data.userType === 'gangster' ? '/jobs' : '/newjob'
          );
        })
        .catch((error) => {
          console.log(error);

          // Toast //
          const toastData = {
            type: 'error',
            message: 'Sign Up Failed!',
          };
          this.$store.dispatch('toaster/showToast', toastData);
          //

          this.isLoading = false;
        });
    },
    switchUserType(type) {
      this.typeSelect = type;
    },
  },
};
</script>

<style lang="scss">
.form-switcher-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--theme-color-dark-2);
  border-radius: 0.2rem;
  box-shadow: 0 0.01rem 0.5rem var(--theme-dark-shadow);
}

.form-switcher {
  width: 100%;
  padding: 0.3rem 0.6rem;
  font-size: 0.9rem;
  text-align: center;
  color: var(--theme-color-light-3);
  border-radius: 0.2rem;
  &:hover {
    color: var(--lm-primary-color-light);
    cursor: pointer;
  }
}

.form-switcher-active {
  color: var(--lm-primary-color);
  border: 0.06rem solid var(--lm-primary-color);
  &:hover {
    color: var(--lm-primary-color);
  }
}
</style>
