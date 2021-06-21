<template>
  <div>
    <textarea v-model="message"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Vue.js 스터디를 해봅시다."
    }
  }
}
</script>