<template>
  <div
    class="headbar"
    :class="isCollapse ? 'position-collapse-left' : 'position-left'"
  >
    <!--导航菜单隐藏显示切换-->
    <span class="hamburger-container">
      <Hamburger :toggleClick="onCollapse" :isActive="isCollapse"></Hamburger>
    </span>
    <!--导航菜单-->
    <span class="nav-bar">
      <BreadCrumb></BreadCrumb>
    </span>
    <!-- 工具栏 -->
    <span class="toolbar" v-popover:popover-personal>
      <!-- 用户信息 -->
      <span class="user-info"><img :src="user.avatar" />{{ user.name }}</span>
      <el-popover
        ref="popover-personal"
        placement="bottom-end"
        trigger="click"
        :visible-arrow="false"
      >
        <personal-panel :user="user"></personal-panel>
      </el-popover>
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
      user: {
        name: "Louis",
        avatar: "",
        role: "超级管理员",
        registeInfo: "注册时间：2018-12-20 "
      },
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
      this.user.name = user;
      this.user.avatar = require("@/assets/images/user.png");
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
.headbar {
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
  .toolbar {
    display: flex;
    float: right;
    .user-info {
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

// .headbar {
//   position: fixed;
//   top: 0;
//   right: 0;
//   z-index: 1030;
//   height: 50px;
//   line-height: 50px;
//   border-color: rgba(180, 190, 190, 0.8);
//   border-left-width: 1px;
//   border-left-style: solid;
//   background: #4b5f6e;
// }
// .hamburg,
// .navbar {
//   float: left;
// }
// .toolbar {
//   float: right;
// }
// .lang-item {
//   font-size: 16px;
//   padding-left: 8px;
//   padding-top: 8px;
//   padding-bottom: 8px;
//   cursor: pointer;
// }
// .lang-item:hover {
//   font-size: 18px;
//   background: #b0d6ce4d;
// }
// .user-info {
//   font-size: 20px;
//   color: #fff;
//   cursor: pointer;
//   img {
//     width: 40px;
//     height: 40px;
//     border-radius: 10px;
//     margin: 10px 0px 10px 10px;
//     float: right;
//   }
// }
// .badge {
//   line-height: 18px;
// }
// .position-left {
//   left: 200px;
// }
// .position-collapse-left {
//   left: 65px;
// }
</style>
