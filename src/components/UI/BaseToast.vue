<template>
  <div>
    <button @click="showToast()">SHOW TOAST</button>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification';
export default {
  setup() {
    // Get toast interface
    const toast = useToast();

    // // // Use it!
    // toast("I'm a toast!");

    // // or with options
    // toast.success('My toast content', {
    //   timeout: 2000,
    // });
    // // These options will override the options defined in the "app.use" plugin registration for this specific toast

    // // Make it available inside methods
    return { toast };
  },

  methods: {
    showToast() {
      // Since you returned `toast` from setup(), you can access it now
      this.toast.info("Info", {
        timeout: 3000
      })
      this.toast.success("Success", {
        timeout: 2000
      })
      this.toast.warning("Warning", {
        timeout: 1000
      })
      this.toast.error("Error", {
        timeout: 4000
      })
    },
  },
};
</script>
