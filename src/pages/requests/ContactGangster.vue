<template>
  <form @submit.prevent="submitForm">
    <base-card>
      <h2>Send message to "{{ gangster.nickName }}"</h2>
      <div class="form-block">
        <div class="form-input" :class="{ invalid: !this.email.isValid }">
          <label for="email">Your Email</label>
          <input
            id="email"
            type="email"
            v-model.trim="email.val"
            @blur="clearValidationError('email')"
          />
          <p v-if="!this.email.isValid">* Please enter your email address</p>
        </div>
        <div class="form-input" :class="{ invalid: !this.message.isValid }">
          <label for="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            v-model.trim="message.val"
            @blur="clearValidationError('message')"
          />
          <p v-if="!this.message.isValid">* Message area must not be empty</p>
        </div>
        <div class="form-action">
          <base-button mode="flat">Send</base-button>
        </div>
      </div>
    </base-card>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      email: {
        val: '',
        isValid: true,
      },
      message: {
        val: '',
        isValid: true,
      },
      formIsValid: true,
    };
  },

  computed: {
    gangster() {
      return this.$store.getters['gangsters/gangsters'].find(
        (gangster) => gangster.id === this.id
      );
    },
  },
  methods: {
    clearValidationError(name) {
      this[name].isValid = true;
    },
    emailValidation() {
      if (this.email.val === '' || !this.email.val.includes('@')) {
        this.email.isValid = false;
        this.formIsValid = false;
      }
    },
    textValidation(input) {
      if (this[input].val === '') {
        this[input].isValid = false;
        this.formIsValid = false;
      }
    },

    submitForm() {
      this.formIsValid = true;
      this.emailValidation();
      this.textValidation('message');
      if (!this.formIsValid) {
        return;
      }

      const formData = {
        gangsterId: this.id,
        email: this.email.val,
        message: this.message.val,
      };

      this.$store.dispatch('requests/saveRequest', formData);
      this.$router.replace({
        name: 'gangster-detail',
        params: {
          id: this.id,
        },
      });
    },
  },
};
</script>

<style scoped>
.form-block {
  border: 1px solid gray;
  border-radius: 10px;
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
  justify-content: center;
}

label {
  font-weight: bold;
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
