<template>
  <modal-layout>
    <template v-slot:header>
      <h1>헤더</h1>
    </template>
    <template #default>
      <p1>컨텐츠1</p1>
      <p1>컨텐츠2</p1>
    </template>
    <template v-slot:footer>
      <button type="button">닫기</button>
    </template>
  </modal-layout>
</template>

<script>
import SlotModalLayout from "@/views/slot/SlotModalLayout";

export default {
  components: {'modal-layout':SlotModalLayout}
}
</script>