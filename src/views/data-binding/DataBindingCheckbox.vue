<template>
  <div>
    <label><input type="checkbox" v-model="checked1">{{ checked1 }}</label>
    <br/>
    <label><input type="checkbox" v-model="checked2" true-value="yes" false-value="no">{{ checked2 }}</label>
    <br/>
    <label><input type="checkbox" value="서울" v-model="checked3">서울</label>
    <label><input type="checkbox" value="부산" v-model="checked3">부산</label>
    <label><input type="checkbox" value="제주" v-model="checked3">제주</label>
    <br/>
    <span>체크한 지역 : {{ checked3 }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked1: true,
      checked2: false,
      checked3: []
    };
  }
}
</script>