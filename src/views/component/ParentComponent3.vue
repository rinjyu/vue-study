<template>
  <div>
    <child-component ref="child_component"/>
    <button type="button" @click="changeChildData">Change Child Data</button>
  </div>
</template>

<script>
import ChildComponent from "@/views/component/ChildComponent3";

export default {
  components: {ChildComponent},
  methods: {
    changeChildData() {
      this.$refs.child_component.message = "부모 컴포넌트가 변경한 데이터";
    }
  }
}
</script>