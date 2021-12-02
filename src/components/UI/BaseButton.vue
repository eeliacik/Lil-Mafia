<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :class="mode" :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: [String, Object],
      required: false,
      default: '/',
    },
  }
};
</script>

<style scoped>
button,
a {
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 12px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.26);
  }

.flat {
  background-color: seagreen;
  color: white;
  border: none;

}

.frame {
  background-color: transparent;
  color: mediumpurple;
  border: 1px solid mediumpurple;
}
</style>
