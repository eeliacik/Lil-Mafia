<template>
  <teleport to="body">
    <div v-if="showDialog" @click="closeDialog" class="backdrop"></div>
    <dialog open v-if="showDialog">
      <div>
        <label for="bid">Place your bid ($) </label>
        <input id="bid" type="number" min="1" max="1000000" v-model="price" />
      </div>
      <div>
        <button @click="placeBid">Bid</button>
        <button @click="closeDialog">Close</button>
      </div>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: ['showDialog'],
  emits: ['close-dialog', 'place-bid'],
  data() {
    return {
      price: 1,
    };
  },
  methods: {
    closeDialog() {
      this.$emit('close-dialog');
    },
    placeBid() {
      this.$emit('place-bid', this.price);
      this.closeDialog();
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
}

dialog {
  width: 375px;
  top: 250px;
  z-index: 100;
  padding: 15px;
  margin: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: white;
}
</style>
