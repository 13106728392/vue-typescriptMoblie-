<template>
  <div class="another">
    <div class="footer">
      <van-cell-group class="top-group">
        <van-cell icon="points" title-class="title-left" title="个人中心" is-link />
        <van-cell icon="gold-coin-o" title-class="title-left" title="我的钱包" is-link />
        <van-cell icon="gift-o" title-class="title-left" title="活动中心" is-link />
      </van-cell-group>
      <van-cell-group>
        <van-cell icon="records" title-class="title-left" title="问题反馈" is-link />
      </van-cell-group>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Action, Mutation, State, Getter } from "vuex-class";

import { Grid, GridItem, Cell, CellGroup } from "vant";
@Component({
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Grid.name]: Grid
  }
})
export default class extends Vue {}
</script>
<style scoped lang="scss">
</style>
