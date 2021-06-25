<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="number1"/>
      <span> + </span>
      <input type="text" v-model="number2"/>
      <span> = </span>
      <span>{{result}}</span>
    </div>
  </div>
</template>

<script>
import {computed, reactive, toRefs} from 'vue';

function plusCalculator() {
  let state = reactive({
    number1: 0,
    number2: 0,
    result: computed(() => parseInt(state.number1) + parseInt(state.number2))
  });

  return toRefs(state);
}

export default {
  name: "Calculator",
  setup() {
    let {number1, number2, result} = plusCalculator();

    return {
      number1, number2, result
    }
  }
}
</script>