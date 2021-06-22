<template>
  <div>
    <h1 v-show="show1">show1이 true이면, 화면에 노출됨</h1>
    <h1 v-show="show2">show2가 false이면, 화면에 노출이 안됨</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: true,
      show2: false
    };
  }
}
</script>