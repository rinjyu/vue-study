<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="number1" @keyup="plusNumber"/>
      <span> + </span>
      <input type="text" v-model="number2" @keyup="plusNumber"/>
      <span> = </span>
      <span>{{result}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
    data() {
      return {
        number1: 0,
        number2: 0,
        result: 0
      }
    },
    methods: {
      plusNumber() {
        this.result = parseInt(this.number1) + parseInt(this.number2);
      }
    }
}
</script>