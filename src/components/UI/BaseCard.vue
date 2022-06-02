<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style>
.base-card {
  width: auto;
  padding: 0.6rem;
  background-color: var(--theme-color-dark-2);
  color: var(--theme-color-light-2);
  border-radius: 0.2rem;
  box-shadow: 0 0.12rem 0.2rem var(--theme-dark-shadow);
}
</style>
