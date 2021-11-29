<template>
    <span class="badge" :class="type">
        <slot>{{ titleText }}</slot>
    </span>
</template>

<script>
export default {
    props: ['type', 'title'],
    computed: {
        titleText() {
            return this.title.charAt(0).toUpperCase() + this.title.slice(1);
        }
    },
}
</script>

<style scoped>

.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 120px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.blackmail {
    background-color: burlywood;
    color: white;
}

.kidnap {
    background-color:cadetblue;
    color: white;
}

.bully {
    background-color:cornflowerblue;
    color: white;
}

.pickpocket {
    background-color:darkkhaki;
    color: white;
}

</style>