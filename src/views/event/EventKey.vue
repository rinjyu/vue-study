<template>
  <div>
    <input @keyup.alt.enter="clear"/>
    <br/>
    <div @click.ctrl="doSomething">Do something</div>
  </div>
</template>

<script>
export default {

}
</script>