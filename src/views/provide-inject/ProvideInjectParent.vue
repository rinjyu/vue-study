<template>
  <div>
    <ProvideInjectChild />
  </div>
</template>

<script>
import ProvideInjectChild from "@/views/provide-inject/ProvideInjectChild";

export default {
  components: {ProvideInjectChild},
  data() {
    return {
      items: ['A', 'B']
    };
  },
  provide() {
    return {
      itemLength: this.items.length
    }
  }
}
</script>