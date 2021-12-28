<template>
  <form @submit.prevent="submitForm">
    <div class="form-block" :class="{ invalid: !this.firstName.isValid }">
      <label for="firstname">Firstname</label>
      <input
        id="firstname"
        type="text"
        v-model.trim="firstName.val"
        @blur="clearValidationError('firstName')"
      />
      <p v-if="!this.firstName.isValid">* Please enter your firstname</p>
    </div>
    <div class="form-block" :class="{ invalid: !this.lastName.isValid }">
      <label for="lastname">Lastname</label>
      <input
        id="lastname"
        type="text"
        v-model.trim="lastName.val"
        @blur="clearValidationError('lastName')"
      />
      <p v-if="!this.lastName.isValid">* Please enter your lastname</p>
    </div>
    <div class="form-block" :class="{ invalid: !this.nickName.isValid }">
      <label for="nickname">Nickname</label>
      <input
        type="nickname"
        id="nickname"
        v-model.trim="nickName.val"
        @blur="clearValidationError('nickName')"
      />
      <p v-if="!this.nickName.isValid">* Please enter your nickname</p>
    </div>
    <div class="form-block" :class="{ invalid: !this.email.isValid }">
      <label for="email">E-mail</label>
      <input
        type="email"
        id="email"
        v-model.trim="email.val"
        @blur="clearValidationError('email')"
      />
      <p v-if="!this.email.isValid">* Please enter your email address</p>
    </div>
    <div class="form-block" :class="{ invalid: !this.password.isValid }">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model="password.val"
        @blur="clearValidationError('password')"
      />
      <p v-if="!this.password.isValid">* Please enter a password (min 6 characters)</p>
    </div>
    <div class="form-action">
      <button>Sign Up</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['sign-up-capo'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      nickName: {
        val: '',
        isValid: true,
      },
      email: {
        val: '',
        isValid: true,
      },
      password: {
        val: '',
        isValid: true,
      },
    };
  },
  methods: {
    clearValidationError(name) {
      this[name].isValid = true;
      this.formIsValid = true;
    },
    textValidation(input) {
      if (this[input].val === '') {
        this[input].isValid = false;
        this.formIsValid = false;
      }
    },
    emailValidation(input) {
      if (this[input].val === '' || !this[input].val.includes('@')) {
        this[input].isValid = false;
        this.formIsValid = false;
      }
    },
    passwordValidation(input) {
      if (this[input].val.length < 6) {
        this[input].isValid = false;
        this.formIsValid = false;
      }
    },

    submitForm() {
      this.formIsValid = true;
      this.textValidation('firstName');
      this.textValidation('lastName');
      this.textValidation('nickName');
      this.emailValidation('email');
      this.passwordValidation('password');

      if (!this.formIsValid) {
        return;
      }
      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        nickName: this.nickName.val,
        jobs: [],
        email: this.email.val,
        password: this.password.val,
        userType: 'capo',
      }

      this.$emit('sign-up-capo', formData);

      this.$router.replace('/job-adding');
    },
  },
};
</script>

<style scoped>
.form-block {
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
}

.form-input {
  padding: 0;
  display: flex;
  flex-direction: column;
}

.form-action {
  display: flex;
  justify-content: flex-start;
}

a:visited,
a:link {
  text-decoration: none;
  color: blue;
}

label {
  font-weight: bold;
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
