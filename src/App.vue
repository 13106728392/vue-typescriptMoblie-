<template>
  <div id="app" ontouchstart>
    <!-- ontouchstart="" 解决按钮组件ios点击没有阴影反馈效果 -->
    <Header></Header>
    <router-view />

    <div class="bottomBox">
      <van-tabbar route>
        <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/List" icon="bag-o">列表</van-tabbar-item>
        <van-tabbar-item replace to="/Classification" icon="search">分类</van-tabbar-item>
        <van-tabbar-item replace to="/another" icon="manager-o">用户</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { NavBar, Tabbar, TabbarItem } from "vant";
import GridContent from "@/components/home/GridContent.vue";
import Header from "@/components/Header.vue";
import "../public/css/icon.css";
@Component({
  components: {
    Header,
    [Tabbar.name]: Tabbar,

    [TabbarItem.name]: TabbarItem,
    GridContent
  }
})
export default class extends Vue {}
</script>


<style scoped lang="scss">
.bottomBox {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
p {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
