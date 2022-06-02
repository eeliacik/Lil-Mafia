<template>
  <form class="form-contianer" @submit.prevent="submitForm">
    <div class="form-item" :class="{ invalid: !this.firstName.isValid }">
      <label class="form-label" for="firstname">Firstname</label>
      <input
        class="form-input"
        id="firstname"
        type="text"
        v-model.trim="firstName.val"
        @blur="clearValidationError('firstName')"
      />
      <p v-show="!this.firstName.isValid">Please enter your firstname</p>
    </div>
    <div class="form-item" :class="{ invalid: !this.lastName.isValid }">
      <label class="form-label" for="lastname">Lastname</label>
      <input
        class="form-input"
        id="lastname"
        type="text"
        v-model.trim="lastName.val"
        @blur="clearValidationError('lastName')"
      />
      <p v-show="!this.lastName.isValid">Please enter your lastname</p>
    </div>
    <div class="form-item" :class="{ invalid: !this.aka.isValid }">
      <label class="form-label" for="nickname">Nickname</label>
      <input
        class="form-input"
        id="nickname"
        type="text"
        v-model.trim="aka.val"
        @blur="clearValidationError('aka')"
      />
      <p v-show="!this.lastName.isValid">Please enter your nickname</p>
    </div>
    <div class="form-item" :class="{ invalid: !this.from.isValid }">
      <label class="form-label" for="from">From</label>
      <input
        class="form-input"
        id="from"
        type="text"
        v-model.trim="from.val"
        @blur="clearValidationError('from')"
      />
      <p v-show="!this.from.isValid">Please enter your hometown</p>
    </div>
    <div class="form-description" :class="{ invalid: !this.desc.isValid }">
      <label class="form-label" for="description">Description</label>
      <textarea
        class="form-input"
        id="description"
        rows="5"
        v-model.trim="desc.val"
        @blur="clearValidationError('desc')"
      />
      <p v-show="!this.desc.isValid">Please describe yourself</p>
    </div>
    <div
      class="form-skills"
      :class="{ invalid: !this.skills.isValid }"
      @change="clearValidationError('skills')"
    >
      <div class="form-label">Skills</div>
      <div class="skills-container">
        <div class="checkbox-wrapper">
          <label class="checkbox-container" for="blackmail">
            <input
              type="checkbox"
              name="skills"
              value="blackmail"
              id="blackmail"
              v-model="skills.val"
            />
            <!-- <div class="checkbox">
              <span class="checkbox-symbol"></span>
            </div> -->
            <span class="checkbox-label">Blackmail</span>
          </label>
        </div>

        <div class="checkbox-wrapper">
          <label class="checkbox-container" for="bully">
            <input
              type="checkbox"
              name="skills"
              value="bully"
              id="bully"
              v-model="skills.val"
            />
            <span class="checkbox-label">Bully</span>
          </label>
        </div>

        <div class="checkbox-wrapper">
          <label class="checkbox-container" for="kidnap">
            <input
              type="checkbox"
              name="skills"
              value="kidnap"
              id="kidnap"
              v-model="skills.val"
            />
            <span class="checkbox-label">Kidnap</span>
          </label>
        </div>

        <div class="checkbox-wrapper">
          <label class="checkbox-container" for="launder">
            <input
              type="checkbox"
              name="skills"
              value="launder"
              id="launder"
              v-model="skills.val"
            />
            <span class="checkbox-label">Launder</span>
          </label>
        </div>

        <div class="checkbox-wrapper">
          <label class="checkbox-container" for="pickpocket">
            <input
              type="checkbox"
              name="skills"
              value="pickpocket"
              id="pickpocket"
              v-model="skills.val"
            />
            <span class="checkbox-label">Pickpocket</span>
          </label>
        </div>

        <div class="checkbox-wrapper">
          <label class="checkbox-container" for="smuggle">
            <input
              type="checkbox"
              name="skills"
              value="smuggle"
              id="smuggle"
              v-model="skills.val"
            />
            <span class="checkbox-label">Smuggle</span>
          </label>
        </div>
      </div>
      <p v-show="!this.skills.isValid">
        Please choose at least one of the skills above
      </p>
    </div>
    <div class="form-item" :class="{ invalid: !this.email.isValid }">
      <label class="form-label" for="email">E-mail</label>
      <input
        class="form-input"
        type="email"
        id="email"
        v-model.trim="email.val"
        @blur="clearValidationError('desc')"
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
        @blur="clearValidationError('desc')"
      />
      <p v-show="!this.password.isValid">
        Please enter a password (min 6 characters)
      </p>
    </div>
    <div class="form-action">
      <div class="signup-button" @click="submitForm">SIGNUP</div>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['sign-up-gangster'],
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
      aka: {
        val: '',
        isValid: true,
      },
      from: {
        val: '',
        isValid: true,
      },
      desc: {
        val: '',
        isValid: true,
      },
      skills: {
        val: [],
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
      formIsValid: true,
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
    arrayValidation(input) {
      if (this[input].val.length === 0) {
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
      this.textValidation('aka');
      this.textValidation('from');
      this.textValidation('desc');
      this.arrayValidation('skills');
      this.emailValidation('email');
      this.passwordValidation('password');

      if (!this.formIsValid) {
        return;
      }
      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        nickName: this.aka.val,
        from: this.from.val,
        description: this.desc.val,
        skills: this.skills.val,
        offers: [{ jobId: 'take this!', price: 0, status: 'zzz' }],
        email: this.email.val,
        password: this.password.val,
        userType: 'gangster',
      };

      this.$emit('sign-up-gangster', formData);
    },
  },
};
</script>

<style lang="scss">
.form-description {
  display: flex;
  flex-direction: column;
  height: 9.2rem;
}

.form-skills {
  display: flex;
  flex-direction: column;
  height: 6.4rem;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  row-gap: 0.8rem;
  column-gap: 0.6rem;
  margin-bottom: 0.2rem;
}

.checkbox-container {
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.checkbox-container input {
  position: absolute;
  height: 0;
  width: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  &:checked ~ .checkbox-label {
    background-color: var(--lm-primary-color);
    color: var(--theme-color-light);
  }
  // &:checked:hover ~ .checkbox-label {
  //   background-color: var(--lm-primary-color-light);
  // }
}
// .checkbox {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .checkbox-symbol {
//   height: 0.3rem;
//   width: 0.6rem;
//   margin-left: 1rem;
//   margin-bottom: 0.1rem ;
//   border-left: 0.1rem solid var(--theme-color-light-2);
//   border-bottom: 0.1rem solid var(--theme-color-light-2);
//   transform: rotate(-45deg);
//   opacity: 0%
// }
.checkbox-label {
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  background-color: var(--theme-color-dark-2);
  border-radius: 1rem;
  color: var(--theme-color-light-3);
  &:hover {
    // background-color: var(--theme-color-dark-3);
    // color: var(--lm-primary-color-light);
    color: var(--theme-color-light-2);
  }
}

.signup-button {
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
</style>
