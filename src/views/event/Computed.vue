<template>
  <h1>Full Name : {{fullName}}</h1>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'Rinjyu',
      lastName: 'Choi'
    };
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
}
</script>

<style scoped>

</style>