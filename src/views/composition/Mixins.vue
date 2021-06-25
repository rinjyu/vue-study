<template>
  <div></div>
</template>

<script>
import Mixins from '../../api.js';

export default {
  mixins: [Mixins], //사용할 믹스인 파일을 배열로 등록
  data() {
    return {
      productList: []
    };
  },
  async mounted() {
    this.productList = await this.$callAPI("https://f1684b31-9bf1-4302-a3e5-c0dd0a4a701d.mock.pstmn.io/list","get");
    console.log(this.productList);
  }
}
</script>