<template>
  <div>
    <div v-bind:style="styleObject">
      Inline Style Binding1
    </div>
    <br/>
    <div v-bind:style="[baseStyle, addStyle]">
      Inline Style Binding2
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleObject: {
        color: 'red',
        fontSize: '13px'
      },
      baseStyle: 'background-color:yellow;width:100%;height:200px;',
      addStyle: 'color:red;font-weight:bold;'
    };
  }
}
</script>