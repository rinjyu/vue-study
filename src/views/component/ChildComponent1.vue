<template>
  <button type="button" @click="child" ref="btn">click</button>
</template>

<script>
export default {
  methods: {
    child() {
      console.log("부모 컴포넌트에서 직접 발생시킨 이벤트");
    }
  }
}
</script>