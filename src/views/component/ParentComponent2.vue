<template>
  <child-component ref="child_component"/>
</template>

<script>
import ChildComponent from "@/views/component/ChildComponent2";

export default {
  components: {ChildComponent},
  mounted() {
    this.$refs.child_component.fromParent();
  }
}
</script>