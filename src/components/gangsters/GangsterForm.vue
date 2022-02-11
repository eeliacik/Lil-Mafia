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
    <div class="form-block" :class="{ invalid: !this.aka.isValid }">
      <label for="nickname">Nickname</label>
      <input
        id="nickname"
        type="text"
        v-model.trim="aka.val"
        @blur="clearValidationError('aka')"
      />
      <p v-if="!this.lastName.isValid">* Please enter your nickname</p>
    </div>
    <div class="form-block" :class="{ invalid: !this.from.isValid }">
      <label for="from">From</label>
      <input
        id="from"
        type="text"
        v-model.trim="from.val"
        @blur="clearValidationError('from')"
      />
      <p v-if="!this.from.isValid">* Please enter your hometown</p>
    </div>
    <div class="form-block" :class="{ invalid: !this.desc.isValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="desc.val"
        @blur="clearValidationError('desc')"
      />
      <p v-if="!this.desc.isValid">* Please describe yourself</p>
    </div>
    <div
      class="form-block"
      :class="{ invalid: !this.skills.isValid }"
      @change="clearValidationError('skills')"
    >
      <h4>Skills</h4>
      <div class="skill-checkbox">
        <input
          type="checkbox"
          name="skills"
          value="blackmail"
          id="blackmail"
          v-model="skills.val"
        />
        <label for="blackmail">Blackmail</label>
      </div>
      <div class="skill-checkbox">
        <input
          type="checkbox"
          name="skills"
          value="bully"
          id="bully"
          v-model="skills.val"
        />
        <label for="bully">Bully</label>
      </div>
      <div class="skill-checkbox">
        <input
          type="checkbox"
          name="skills"
          value="kidnap"
          id="kidnap"
          v-model="skills.val"
        />
        <label for="kidnap">Kidnap</label>
      </div>
      <div class="skill-checkbox">
        <input
          type="checkbox"
          name="skills"
          value="launder"
          id="launder"
          v-model="skills.val"
        />
        <label for="launder">Launder</label>
      </div>
      <div class="skill-checkbox">
        <input
          type="checkbox"
          name="skills"
          value="pickpocket"
          id="pickpocket"
          v-model="skills.val"
        />
        <label for="pickpocket">Pickpocket</label>
      </div>
      <div class="skill-checkbox">
        <input
          type="checkbox"
          name="skills"
          value="smuggle"
          id="smuggle"
          v-model="skills.val"
        />
        <label for="smuggle">Smuggle</label>
      </div>
      <p v-if="!this.skills.isValid">
        * Please choose at least one of the skills above
      </p>
    </div>
    <div class="form-block" :class="{ invalid: !this.email.isValid }">
      <label for="email">E-mail</label>
      <input type="email" id="email" v-model.trim="email.val" @blur="clearValidationError('desc')" />
      <p v-if="!this.email.isValid">* Please enter your email address</p>
    </div>
    <div class="form-block" :class="{ invalid: !this.password.isValid }">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password.val" @blur="clearValidationError('desc')" />
      <p v-if="!this.password.isValid">* Please enter a password (min 6 characters)</p>
    </div>
    <button>Sign Up</button>
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
        offers: [{jobId: 'take this!', price: 0}],
        email: this.email.val,
        password: this.password.val,
        userType: 'gangster'
      };

      this.$emit('sign-up-gangster', formData);
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

.form-block h4 {
  margin: 0;
  font-weight: bold;
}

.form-block label {
  font-weight: bold;
}
.skill-checkbox {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.skill-checkbox input {
  margin: 0;
  height: 1.15rem;
  width: 1.15rem;
}

.skill-checkbox label {
  margin-left: 0.25rem;
  font-weight: normal;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

p {
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  color: red;
}
</style>
