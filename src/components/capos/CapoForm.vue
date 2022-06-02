<template>
  <form class="form-contianer" @submit.prevent="submitForm">
    <div class="form-item" :class="{ invalid: !this.firstName.isValid }">
      <label class="form-label" for="firstname">Firstname</label>
      <input class="form-input"
        id="firstname"
        type="text"
        v-model.trim="firstName.val"
        @blur="clearValidationError('firstName')"
      />
      <p v-show="!this.firstName.isValid">Please enter your firstname</p>
    </div>
    <div class="form-item" :class="{ invalid: !this.lastName.isValid }">
      <label class="form-label" for="lastname">Lastname</label>
      <input class="form-input"
        id="lastname"
        type="text"
        v-model.trim="lastName.val"
        @blur="clearValidationError('lastName')"
      />
      <p v-show="!this.lastName.isValid">Please enter your lastname</p>
    </div>
    <div class="form-item" :class="{ invalid: !this.nickName.isValid }">
      <label class="form-label" for="nickname">Nickname</label>
      <input class="form-input"
        type="nickname"
        id="nickname"
        v-model.trim="nickName.val"
        @blur="clearValidationError('nickName')"
      />
      <p v-show="!this.nickName.isValid">Please enter your nickname</p>
    </div>
    <div class="form-item" :class="{ invalid: !this.email.isValid }">
      <label class="form-label" for="email">E-mail</label>
      <input class="form-input"
        type="email"
        id="email"
        v-model.trim="email.val"
        @blur="clearValidationError('email')"
      />
      <p v-show="!this.email.isValid">Please enter your email address</p>
    </div>
    <div class="form-item" :class="{ invalid: !this.password.isValid }">
      <label class="form-label" for="password">Password</label>
      <input class="form-input"
        type="password"
        id="password"
        v-model="password.val"
        @blur="clearValidationError('password')"
      />
      <p v-show="!this.password.isValid">Please enter a password (min 6 characters)</p>
    </div>
    <div class="form-action">
      <div class="signup-button" @click="submitForm">SIGNUP</div>
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
        email: this.email.val,
        password: this.password.val,
        userType: 'capo',
      }
      this.$emit('sign-up-capo', formData);
    },
  },
};
</script>

