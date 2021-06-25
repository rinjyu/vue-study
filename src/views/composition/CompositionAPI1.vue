<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="state.number1" @keyup="plusNumber"/>
      <span> + </span>
      <input type="text" v-model="state.number2" @keyup="plusNumber"/>
      <span> = </span>
      <span>{{state.result}}</span>
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue';

export default {
  name: "Calculator",
  setup() {
    let state = reactive({
      number1: 0,
      number2: 0,
      result: 0
    });

    function plusNumber() {
      state.result = parseInt(state.number1) + parseInt(state.number2);
    }

    return {
      state,
      plusNumber
    }
  }
}
</script>