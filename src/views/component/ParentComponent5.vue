<template>
  <div>
    <button type="button" @click="checkChild" ref="btn">자식 컴포넌트 데이터 조회</button>
    <child-component ref="child_component"/>
  </div>
</template>

<script>
import ChildComponent from "@/views/component/ChildComponent5";

export default {
  components: {ChildComponent},
  computed: {
    message() {
      return this.$refs.child_component.message;
    }
  },
  methods: {
    checkChild() {
      alert(this.message);
    }
  }
}
</script>