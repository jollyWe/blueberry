<template>
  <div class="page">
    <div class="login-box">
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="ruleForm"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm login-container"
        status-icon
      >
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
          <el-input
            type="text"
            v-model="loginForm.account"
            auto-complete="off"
            placeholder="账号"
            id="loginEmail"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            auto-complete="off"
            placeholder="密码"
            id="loginPassword"
          ></el-input>
          <label id="showPasswordToggle">
            <el-checkbox v-model="checked" id="showPasswordCheck"
              >显示密码</el-checkbox
            >
          </label>
          <router-link to="/" style="float: right; color: #bbbbbb"
            >忘记密码？</router-link
          >
        </el-form-item>
        <el-form-item style="width:100%;">
          <el-button
            type="primary"
            plain
            style="width:48%;"
            @click.native.prevent="reset"
            :loading="logining"
          >
            重置
          </el-button>
          <el-button
            type="primary"
            plain
            style="width:48%;"
            @click.native.prevent="handleSubmit"
            :loading="logining"
            class="f-r"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import sha256 from "crypto-js/sha256";
// import { requestLogin } from "@/api/user";
import { messages } from "@assets/js/common.js"; //封装的提示文件
export default {
  name: "login",
  data() {
    return {
      logining: false,
      fromUrl: "/",
      // 登录表单数据绑定对象
      loginForm: {
        account: "admin",
        password: "123456"
      },
      // 表单验证规则对象
      loginRules: {
        // 用户名是否合法
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        // 密码是否合法
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      checked: false
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.logining = true;
          // eslint-disable-next-line no-unused-vars
          const loginParams = {
            account: this.loginForm.account,
            password: this.loginForm.password
            // password: sha256(this.ruleForm.password)
          };
          this.$api.modules.login
            .login(loginParams)
            .then(res => {
              this.loading = false;
              messages("success", res.message);
              sessionStorage.setItem("token", res.data.token);
              sessionStorage.setItem("user", loginParams.account);
              this.$router.push(this.fromUrl);
            })
            .catch(err => {
              this.logining = false;
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    reset() {
      this.$refs.ruleForm.resetFields();
    }
  },
  mounted() {}
};
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 15px;
}

.page {
  background-color: #eff3f4;
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: block;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  margin: 0;
  padding: 2.25em;
  box-sizing: border-box;
  border: solid 1px #ddd;
  border-radius: 0.5em;
  font-family: "Source Sans Pro", sans-serif;
}
</style>
