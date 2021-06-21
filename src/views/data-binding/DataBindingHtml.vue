<template>
  <div>
    <div>{{ stringHtml }}</div>
    <div v-html="stringHtml"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stringHtml: '<p style="color:red;">This is a red value</p>'
    };
  }
}
</script>