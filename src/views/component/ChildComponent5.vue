<template>
  <button type="button" @click="child" ref="btn">자식 컴포넌트 데이터 변경</button>
</template>

<script>
export default {
  data() {
    return {
      message: '메시지'
    }
  },
  methods: {
    child() {
      this.message = '변경된 메시지';
    }
  }
}
</script>