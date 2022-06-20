<template>
  <teleport to="body">
    <div v-if="showDialog" @click="closeDialog" class="backdrop"></div>
    <dialog class="bid-wrapper" open v-if="showDialog">
      <div class="bid-container" v-if="!sendingBid">
        <div class="bid-title">Enter Bid</div>
        <div class="bid-input-container">
          <input
            class="bid-input"
            id="bid"
            type="number"
            min="1000"
            max="1000000"
            step="1000"
            v-model="price"
            @blur="clearValidationError"
          />
          <label class="bid-label" for="bid">$</label>
          <div class="bid-spinners-container">
            <div class="bid-spinner-down" @click="priceDown">-</div>
            <div class="bid-spinner-up" @click="priceUp">+</div>
          </div>
          <span class="bid-invalid" v-show="!bidIsValid"
            >MIN 10.000 / MAX 1.000.000</span
          >
        </div>
        <div class="bid-action">
          <div class="send-button" @click="placeBid">SEND</div>
          <div class="close-button" @click="closeDialog">CLOSE</div>
        </div>
      </div>
      <div v-else>
        <p>Sending...</p>
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
      price: 10000,
      bidIsValid: true,
    };
  },
  methods: {
    priceUp() {
      this.price += 10000;
    },
    priceDown() {
      this.price -= 10000;
    },
    closeDialog() {
      this.$emit('close-dialog');
    },
    placeBid() {
      this.price < 10000 || this.price > 1000000
        ? (this.bidIsValid = false)
        : this.$emit('place-bid', this.price);
    },
    clearValidationError() {
      this.bidIsValid = true;
    },
  },
  watch: {
    price() {
      0 > this.price ? (this.price = 0) : this.price;
      1000000 < this.price ? (this.price = 1000000) : this.price;
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
  width: 100%;
  max-width: calc(var(--max-width) * 0.24);
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
  width: 100%;
  height: 4.25rem;
  position: relative;
  display: flex;
  flex-direction: column;
}

.bid-input {
  width: 100%;
  background-color: var(--theme-color-dark-2);
  border: 0.06rem solid var(--theme-color-light-4);
  color: var(--theme-color-light-3);
  border-radius: 0.2rem;
  padding: 0.6rem;
  padding-left: 2rem;
  font-size: 1.6rem;
  outline: none;
  &:hover {
    border-color: var(--theme-color-light-3);
    color: var(--theme-color-light-2);
  }
  &:hover + .bid-label {
    color: var(--theme-color-light-2);
  }
  &:focus {
    border: 0.06rem solid var(--lm-primary-color);
  }
}

.bid-label {
  position: absolute;
  top: 0.24rem;
  left: 0.6rem;
  font-size: 1.8rem;
  color: var(--theme-color-light-3);
}

input::-webkit-inner-spin-button {
  display: none;
}

.bid-spinners-container {
  position: absolute;
  top: 0.66rem;
  right: 0.66rem;
  display: flex;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.bid-spinner-up {
  width: 1.85rem;
  height: 1.85rem;
  font-size: 1.3rem;
  text-align: center;
  color: var(--theme-color-light-2);
  background-color: var(--lm-primary-color);
  border-left: 0.03rem solid var(--lm-primary-color-dark);
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  &:hover {
    color: var(--theme-color-light);
    background-color: var(--lm-primary-color-light);
    cursor: pointer;
  }
}

.bid-spinner-down {
  width: 1.85rem;
  height: 1.85rem;
  font-size: 1.2rem;
  text-align: center;
  color: var(--theme-color-light-2);
  background-color: var(--lm-primary-color);
  border-right: 0.03rem solid var(--lm-primary-color-dark);
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
  &:hover {
    color: var(--theme-color-light);
    background-color: var(--lm-primary-color-light);
    cursor: pointer;
  }
}
.bid-invalid {
  padding-top: 0.1rem; 
  font-size: 0.7rem;
  color: var(--lm-danger-color);
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
