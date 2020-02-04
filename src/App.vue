<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  height: 100%;
}
.el-menu-item,
.el-submenu__title {
  height: 50px !important;
  line-height: 50px !important;
  font-size: 12px !important;
}
.el-dropdown-menu__item,
.el-breadcrumb,
.el-form-item__label,
.el-pagination span,
.el-tabs__item,
.el-tree-node__content {
  font-size: 12px !important;
}
/* .el-pagination {
  //margin-top: 15px;
  float: right;
} */
.el-breadcrumb__inner.is-link,
.el-breadcrumb__inner a,
.el-breadcrumb__inner {
  color: #eaeef6 !important;
}
.el-tabs__item {
  height: 30px !important;
  line-height: 30px !important;
  padding: 0 10px !important;
}
</style>
