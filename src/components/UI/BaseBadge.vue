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
  border-radius: 10px;
  padding: 0.3rem 0.5rem;
  display: inline-block;
  margin-right: 0.3rem;
}

.blackmail {
    background-color: burlywood;
    color: white;
}

.kidnap {
    background-color:cadetblue;
    color: white;
}

.launder {
    background-color: rosybrown;
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

.robbery {
    background-color:darkkhaki;
    color: white;
}

.smuggle {
    background-color: slategray;
    color: white;
}

</style>