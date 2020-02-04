<template>
  <div class="page">
    <el-container>
      <!--导航菜单-->
      <Aside></Aside>
      <el-container>
        <!-- 头部区域 -->
        <Header></Header>
        <!-- 主内容区域 -->
        <Main></Main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";
export default {
  components: {
    Aside,
    Header,
    Main
  }
};
</script>

<style scoped lang="scss">
.page {
  height: 100%;
}
.container {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 100%;
  background: rgba(224, 234, 235, 0.1);
}
</style>
