<template>
  <div class="aside-container">
    <div
      class="logo"
      :class="isCollapse ? 'aside-collapse-width' : 'aside-width'"
    >
      <img :src="this.logo" />
      <div>{{ sysName }}</div>
    </div>
    <!-- 导航菜单 -->
    <el-menu
      ref="navmenu"
      default-active="1"
      class="el-menu-vertical-demo"
      :class="isCollapse ? 'aside-collapse-width' : 'aside-width'"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :collapse-transition="false"
      :unique-opened="true"
    >
      <!-- 导航菜单树组件，动态加载菜单 -->
      <menu-tree
        v-for="item in navTree"
        :key="item.id"
        :menu="item"
      ></menu-tree>
      <!-- <el-submenu index>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MenuTree from "@/components/MenuTree/index";
export default {
  components: {
    MenuTree
  },
  data() {
    return {
      sysName: "Apple",
      logo: ""
    };
  },
  computed: {
    ...mapState({
      appName: state => state.app.appName,
      isCollapse: state => state.app.isCollapse,
      navTree: state => state.menu.navTree
    }),
    mainTabs: {
      get() {
        return this.$store.state.tab.mainTabs;
      },
      set(val) {
        this.$store.commit("updateMainTabs", val);
      }
    },
    mainTabsActiveName: {
      get() {
        return this.$store.state.tab.mainTabsActiveName;
      },
      set(val) {
        this.$store.commit("updateMainTabsActiveName", val);
      }
    }
  },
  watch: {
    $route: "handleRoute"
  },
  created() {
    this.handleRoute(this.$route);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 路由操作处理
    handleRoute(route) {
      // tab标签页选中, 如果不存在则先添加
      var tab = this.mainTabs.filter(item => item.name === route.name)[0];
      if (!tab) {
        tab = {
          name: route.name,
          title: route.name,
          icon: route.meta.icon
        };
        this.mainTabs = this.mainTabs.concat(tab);
      }
      this.mainTabsActiveName = tab.name;
      // 切换标签页时同步更新高亮菜单
      if (this.$refs.navmenu != null) {
        this.$refs.navmenu.activeIndex = "" + route.meta.index;
        this.$refs.navmenu.initOpenedMenu();
      }
    }
  },
  mounted() {
    this.sysName = "Apple";
    this.logo = require("@/assets/logo.png");
  }
};
</script>
<style scoped lang="scss">
.aside-container {
  position: fixed;
  top: 0px;
  left: 0;
  bottom: 0;
  z-index: 1020;
  .el-menu {
    position: absolute;
    top: 60px;
    bottom: 0px;
    // text-align: left;
  }
  .logo {
    position: absolute;
    top: 0px;
    height: 50px;
    line-height: 50px;
    background: #4b5f6e;
    width: 200px;
    cursor: pointer;
    img {
      width: 35px;
      height: 35px;
      border-radius: 0px;
      margin-top: 10px;
      margin-left: 10px;
      float: left;
    }
    div {
      display: inline-block;
      font-size: 22px;
      color: white;
      padding-left: 20px;
    }
  }
  .aside-width {
    width: 200px;
  }
  .aside-collapse-width {
    width: 65px;
  }
}
</style>
