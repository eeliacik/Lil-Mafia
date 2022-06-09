<template>
  <form class="form-wrapper" @submit.prevent="submitForm">
    <div class="form-header form-header-login">Log In</div>
    
    <div class="form-container">
      <div class="form-item" :class="{ invalid: !this.email.isValid }">
        <label class="form-label" for="email">Email</label>
        <input
          class="form-input"
          type="email"
          id="email"
          v-model.trim="email.val"
          @blur="clearValidationError('email')"
        />
        <p v-show="!this.email.isValid">Please enter your email address</p>
      </div>
      <div class="form-item" :class="{ invalid: !this.password.isValid }">
        <label class="form-label" for="password">Password</label>
        <input
          class="form-input"
          type="password"
          id="password"
          v-model="password.val"
          @blur="clearValidationError('password')"
        />
        <p v-show="!this.password.isValid">
          Please enter a password (min 6 characters)
        </p>
      </div>
      <div class="form-action">
        <div class="login-button" @click="login">LOGIN</div>
        <router-link class="signup-link" to="/signup">SIGNUP</router-link>
      </div>
      <p v-show="isLoading">Signing In...</p>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: {
        val: '',
        isValid: true,
      },
      password: {
        val: '',
        isValid: true,
      },
      isLoading: false,
    };
  },
  methods: {
    login() {
      this.formIsValid = true;
      this.emailValidation();
      this.passwordValidation();
      if (!this.formIsValid) {
        return;
      }
      this.isLoading = true;
      const authData = { email: this.email.val, password: this.password.val };
      this.$store
        .dispatch('login', authData)
        .then((userType) => {
          this.isLoading = false;
          this.$router.push(userType === 'gangster' ? '/jobs' : '/myjobs');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    emailValidation() {
      if (this.email.val === '' || !this.email.val.includes('@')) {
        this.email.isValid = false;
        this.formIsValid = false;
      }
    },
    passwordValidation() {
      if (this.password.val.length < 6) {
        this.password.isValid = false;
        this.formIsValid = false;
      }
    },
    clearValidationError(name) {
      this[name].isValid = true;
      this.formIsValid = true;
    },
  },
};
</script>

<style lang="scss">
.form-wrapper {
  width: 100%;
  max-width: calc(var(--max-width) * 0.33);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.form-header {
  width: 100%;
  padding: 0 0.6rem;
  font-size: 1.1rem;
}

.form-header-login {
  padding-bottom: 1rem;
}

.form-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-item {
  height: 5.03rem;
  display: flex;
  flex-direction: column;
}

.form-label {
  padding-left: 0.6rem;
  padding-bottom: 0.3rem;
  font-size: 0.8rem;
  font-weight: normal;
  color: var(--theme-color-light-2);
}

.form-input {
  background-color: var(--theme-color-dark);
  border: 0.06rem solid var(--theme-color-light-3);
  color: var(--theme-color-light-2);
  border-radius: 0.2rem;
  padding: 0.6rem;
  font-size: 0.9rem;
  outline: none;
  &:hover {
    border-color: var(--theme-color-light-2)
  }
  &:focus {
    border: 0.06rem solid var(--lm-primary-color);
  }
}

.form-action {
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
}

.login-button {
  background-color: var(--lm-secondary-color-dark);
  color: var(--theme-color-light);
  padding: 0.3rem 0.6rem;
  border-radius: 0.2rem;
  font-size: 0.9rem;
  &:hover {
    background-color: var(--lm-secondary-color);
    cursor: pointer;
  }
}

.signup-link,
.signup-link:visited {
  padding: 0.3rem 0.6rem;
  color: var(--lm-primary-color);
  border-radius: 0.2rem;
  font-size: 0.9rem;
  &:hover {
    color: var(--lm-primary-color-light);
    background-color: var(--theme-color-dark-2);
  }
}

.invalid input,
.invalid textarea {
  border: 0.06rem solid var(--lm-danger-color);
}

.invalid p {
  margin: 0;
  padding: 0.1rem 0.6rem 0.3rem 0.6rem;
  font-size: 0.6rem;
  color: var(--lm-danger-color);
}
</style>
