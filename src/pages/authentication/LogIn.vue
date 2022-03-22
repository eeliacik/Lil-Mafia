<template>
  <section>
    <base-card><h2>Log In</h2></base-card>
    <base-card class="container">
      <form @submit.prevent="submitForm">
        <div class="form-block">
          <div class="form-input" :class="{ invalid: !this.email.isValid }">
            <label for="email">E-mail</label>
            <input
              type="email"
              id="email"
              v-model.trim="email.val"
              @blur="clearValidationError('email')"
            />
            <p v-show="!this.email.isValid">
              * Please enter your email address
            </p>
          </div>
          <div class="form-input" :class="{ invalid: !this.password.isValid }">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password.val"
              @blur="clearValidationError('password')"
            />
            <p v-show="!this.password.isValid">
              * Please enter a password (min 6 characters)
            </p>
          </div>
          <div class="form-action">
            <div class="form-action">
              <button @click="login">Log In</button>
              <p>
                New to Lil'Mafia?
                <router-link to="/signup">Sign up</router-link> now.
              </p>
            </div>
          </div>
          <p v-show="isLoading">Signing In...</p>
        </div>
      </form>
    </base-card>
  </section>
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

<style scoped>
.form-block {
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-input {
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
}

.form-action {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}

/* .form-action a:hover{
  color: orange;
} */

a:visited,
a:link {
  text-decoration: none;
  color: blue;
}

label {
  font-weight: bold;
}

p {
  margin: 0;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

.invalid p {
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  color: red;
}
</style>
