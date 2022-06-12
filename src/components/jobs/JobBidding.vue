<template>
  <teleport to="body">
    <div v-if="showDialog" @click="closeDialog" class="backdrop"></div>
    <dialog class="bid-wrapper" open v-if="showDialog">
      <div class="bid-container" v-if="!sendingBid">
        <div class="bid-title">Enter Bid</div>
        <div class="bid-input-container">
          <label class="bid-label" for="bid">Price ($)</label>
          <input
            class="bid-input"
            id="bid"
            type="number"
            min="1000"
            max="1000000"
            step="1000"
            placeholder="$"
            v-model="price"
          />
        </div>
        <div class="bid-action">
          <div class="send-button" @click="placeBid">SEND</div>
          <div class="close-button" @click="closeDialog">CLOSE</div>
        </div>
      </div>
      <div v-else>
        <p>Bidding...</p>
      </div>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: ['showDialog', 'sendingBid'],
  emits: ['close-dialog', 'place-bid'],
  data() {
    return {
      price: 1000,
    };
  },
  methods: {
    closeDialog() {
      this.$emit('close-dialog');
    },
    placeBid() {
      this.$emit('place-bid', this.price);
    },
  },
};
</script>

<style lang="scss">
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: var(--theme-color-dark);
  opacity: 70%;
  z-index: var(--z-index-3);
}

.bid-wrapper {
  width: 30%;
  top: 10rem;
  z-index: var(--z-index-4);
  padding: 1.2rem;
  background-color: var(--theme-color-dark-2);
  color: var(--theme-color-light-2);
  border-radius: 0.2rem;
  box-shadow: 0 0.12rem 0.2rem var(--theme-dark-shadow-3);
  border: none;
  display: flex;
  flex-direction: column;
}

.bid-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.bid-title {
  font-size: 1.6rem;
}

.bid-input-container {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.bid-label {
  font-size: 0.8rem;
  padding-left: 0.6rem;
}

.bid-input {
  background-color: var(--theme-color-dark-2);
  border: 0.06rem solid var(--theme-color-light-4);
  color: var(--theme-color-light-3);
  border-radius: 0.2rem;
  padding: 0.6rem;
  font-size: 1.6rem;
  outline: none;
  &:hover {
    border-color: var(--theme-color-light-3);
  }
  &:focus {
    border: 0.06rem solid var(--lm-primary-color);
  }
}

.bid-action {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 0;
}

.send-button {
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


.close-button {
  padding: 0.3rem 0.6rem;
  color: var(--lm-primary-color);
  border-radius: 0.2rem;
  font-size: 0.9rem;
  &:hover {
    cursor: pointer;
    color: var(--lm-primary-color-light);
    background-color: var(--theme-color-dark-3);
  }
}
</style>
