<template>
  <div>
    <input type="text" v-model="valueModel"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueModel: "Vue.js Study"
    };
  }
}
</script>