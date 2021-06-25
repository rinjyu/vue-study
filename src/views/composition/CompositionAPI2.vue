<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="state.number1"/>
      <span> + </span>
      <input type="text" v-model="state.number2"/>
      <span> = </span>
      <span>{{state.result}}</span>
    </div>
  </div>
</template>

<script>
import {computed, reactive} from 'vue';

export default {
  name: "Calculator",
  setup() {
    let state = reactive({
      number1: 0,
      number2: 0,
      result: computed(() => parseInt(state.number1) + parseInt(state.number2))
    });

    return {
      state
    }
  }
}
</script>