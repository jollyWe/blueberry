<template>
  <div class="home">
    欢迎使用Vue项目
    <el-button @click="login">login</el-button>
  </div>
</template>
<script>
import { messages } from "@assets/js/common.js"; //封装的提示文件
export default {
  name: "home",
  components: {},
  methods: {
    // login() {
    //   this.$api.modules.login
    //     .login({ name: "admin" })
    //     .then(res => {
    //       this.loading = false;
    //       console.log(res);
    //       messages("success", res.message);
    //     })
    //     .catch(err => {
    //       this.logining = false;
    //       console.log(err);
    //     });
    // }
    login() {
      this.$api.modules.dept
        .findDeptTree({ name: "admin" })
        .then(res => {
          console.log(res);
          messages("success", res.message);
        })
        .catch(err => {
          this.logining = false;
          console.log(err);
        });
    }
  },
  mounted() {
    // this.$api.modules.article.articleList().then(res => {
    //   messages("success", res.message);
    //   console.log(res);
    // });
    // this.$api.modules.dept.save().then(res => {
    //   // messages("success", res.message);
    //   console.log(res);
    // });
    // this.$api.modules.menu.findNavTree().then(res => {
    //   // messages("success", res.message);
    //   console.log(res);
    // });
    // this.$api.modules.menu.findMenuTree().then(res => {
    //   // messages("success", res.message);
    //   console.log(res);
    // });
    // this.$api.modules.user.findPermissions().then(res => {
    //   // messages("success", res.message);
    //   console.log(res);
    // });
    // this.$api.modules.user.findPage({ pageNnm: 1, pageSize: 10 }).then(res => {
    //   // messages("success", res.message);
    //   console.log(res);
    // });
    // this.$api.modules.role.findPage({ pageNnm: 1, pageSize: 10 }).then(res => {
    //   // messages("success", res.message);
    //   console.log(res);
    // });
    // this.$api.modules.role.findAll().then(res => {
    //   // messages("success", res.message);
    //   console.log(res);
    // });
  }
};
</script>
