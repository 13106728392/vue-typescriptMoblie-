<template>
  <div class="home">
    <div class="header">
      <swiper :imgs="swiperImgsData"></swiper>
    </div>
    <div class="body">
      <!-- 当首页的数据是通过api获取的时候。可以使用骨架屏来提高用户体验 -->
      <div class="skeleton" v-show="skeletonShow">
        <van-skeleton :row="3" row-width="160" />
        <van-skeleton :row="3" row-width="160" />
        <van-skeleton :row="3" row-width="160" />
      </div>
      
    </div>
   
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Action, Mutation, State, Getter } from "vuex-class";
import {
  Toast,
  Row,
  Col,
  Icon,
  Skeleton,
  Cell,
  CellGroup,
  Grid,
  GridItem
} from "vant";
import GridContent from "@/components/home/GridContent.vue";
import Swiper from "@/components/Swiper.vue";
import { SwiperType } from "@/interface";


@Component({
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Grid.name]: Grid,
    [Skeleton.name]: Skeleton,
    [GridItem.name]: GridItem,
    GridContent,
    Swiper
  }
})
export default class extends Vue {
  private skeletonShow: boolean = true;
  private swiperImgsData = null;
  //全局调用vuex的方法
  @Action("swiperImgs") private actionSwiperImgs;
  @Getter("swiperImgs") private getterSwiperImgs;



  private async getSwiperImgs() {
    if (this.getterSwiperImgs.length === 0) {
      try {
        await this.actionSwiperImgs({ type: 2 } as SwiperType); // 传参时进行类型检查
        this.swiperImgsData = this.getterSwiperImgs;
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("store中已储存swiperImgs数据");
      this.swiperImgsData = this.getterSwiperImgs;
    }
  }
  //
  private async skeletonNotShow() {
    this.skeletonShow = false;
  }
  private async created() {
    this.getSwiperImgs();
    setTimeout(this.skeletonNotShow, 1000); // api获取首页数据
  }
}
</script>
<style scoped lang="scss">
.header-swipe {
  
  margin-bottom: 10px;
  img {
    width: 100%;
    display: block;
    height: 240px;
  }
}
.body {
  i {
    display: block;
    font-size: 23px; // grid中icon和字体大小
  }
}
.top-group {
  margin-bottom: 15px;
}
.title-left {
  margin-right: 190px;
  span {
    width: 200px;
    
  }
}
.skeleton {
  .van-skeleton {
    display: inline-block;
    width: 50px;
    margin: 0px 22px;
    .van-skeleton__content {
      width: 50px;
    }
    .van-skeleton__row {
      height: 50px;
      margin: 17px 0px;
    }
  }
}
</style>
