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
import {plusCalculator} from '../../common.js';

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