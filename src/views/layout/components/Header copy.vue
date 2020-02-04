<template>
  <div
    class="head-container"
    :class="isCollapse ? 'position-collapse-left' : 'position-left'"
  >
    <!--导航菜单隐藏显示切换-->
    <!-- <span class="hamburg">
      <i class="el-icon-menu" @click="onCollapse"></i>
    </span> -->
    <!--导航菜单隐藏显示切换-->
    <span class="hamburger-container">
      <Hamburger :toggleClick="onCollapse" :isActive="isCollapse"></Hamburger>
    </span>
    <!--导航菜单-->
    <span class="nav-bar">
      <BreadCrumb></BreadCrumb>
      <!-- <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb> -->
    </span>
    <!-- <BreadCrumb></BreadCrumb> -->
    <span class="tool-bar">
      <!--用户信息-->
      <el-dropdown class="user-info-dropdown" trigger="hover">
        <span class="el-dropdown-link"
          ><img :src="this.userAvatar" />{{ userName }}</span
        >
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的消息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item @click.native="logout">
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Hamburger from "@/components/Hamburger";
import BreadCrumb from "@components/BreadCrumb";
import PersonalPanel from "@/views/Core/PersonalPanel";
export default {
  components: {
    Hamburger,
    BreadCrumb,
    PersonalPanel
  },
  data() {
    return {
      userName: "Louis",
      userAvatar: "",
      activeIndex: 1
    };
  },
  methods: {
    // 折叠导航栏
    onCollapse: function() {
      this.$store.commit("onCollapse");
    },
    //退出登录
    logout() {
      this.$confirm("确认退出吗?", "提示", {
        type: "warning"
      })
        .then(() => {
          sessionStorage.removeItem("user");
          this.$router.push("/login");
        })
        .catch(() => {});
    }
  },
  mounted() {
    var user = sessionStorage.getItem("user");
    if (user) {
      this.userName = user;
      this.userAvatar = require("@/assets/images/user.png");
    }
  },
  computed: {
    ...mapState({
      isCollapse: state => state.app.isCollapse
    })
  }
};
</script>

<style scoped lang="scss">
.head-container {
  position: fixed;
  top: 0;
  right: 0px;
  z-index: 1020;
  height: 50px;
  line-height: 50px;
  background: #4b5f6e;
  border-color: rgba(180, 190, 190, 0.8);
  border-left-width: 1px;
  border-left-style: solid;
  .hamburger-container {
    width: 32px;
    height: 32px;
    float: left;
    cursor: pointer;
    border-color: rgba(180, 190, 190, 0.8);
    // border-left-width: 1px;
    // border-left-style: solid;
    border-right-width: 1px;
    border-right-style: solid;
    // color: white;
    padding-top: 18px;
    padding-left: 18px;
    // background: #4b5f6e;
  }
  .nav-bar {
    // margin-left: auto;
    margin-left: 20px;
    float: left;
    .el-breadcrumb {
      height: 50px;
      line-height: 50px;
      // background: #4b5f6e;
      // padding-left: 15px;
    }
  }
  .tool-bar {
    float: right;
    .theme-picker {
      padding-right: 10px;
    }
    .lang-selector {
      padding-right: 10px;
      font-size: 15px;
      color: #fff;
      cursor: pointer;
    }
    .user-info-dropdown {
      font-size: 12px;
      padding-left: 15px;
      padding-right: 20px;
      color: #fff;
      cursor: pointer;
      img {
        width: 30px;
        height: 30px;
        border-radius: 2px;
        margin: 10px 0 0 10px;
        float: right;
      }
    }
  }
}
.position-left {
  left: 200px;
}
.position-collapse-left {
  left: 65px;
}
</style>
