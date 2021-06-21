<template>
  <div>
    <div class="container" v-bind:class="{'active': isActive, 'text-red': hasError}">
      Class Binding1
    </div>
    <br/>
    <div class="container" v-bind:class="[activeClass, errorClass]">
      Class Binding2
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
      activeClass: 'active',
      errorClass: 'text-red'
    };
  }
}
</script>
<style scoped>
  container {
    width: 100%;
    height: 200px;
  }
  .active {
    background-color: yellow;
    font-weight: bold;
  }
  .text-red {
    color: red;
  }
</style>