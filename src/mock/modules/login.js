// eslint-disable-next-line no-unused-vars
import Mock from "mockjs";
// eslint-disable-next-line no-unused-vars
import { param2Obj } from "@/utils/mUtils";
/*
 * 用来存放一些模拟用户的数据
 * */

// import Mock from 'mockjs'
// eslint-disable-next-line no-unused-vars
const users = [
  {
    id: 1,
    username: "admin",
    password: "123456",
    email: "123456@qq.com",
    name: "搬砖者"
  },
  {
    id: 2,
    username: "lytton",
    password: "123456",
    email: "yyyyy@163.com",
    name: "混子"
  }
];

export default {
  loginByName: config => {
    const { password, account } = param2Obj(config.url);
    console.log(config);
    // if (account === "admin") {
    if (account === "admin" && password === "123456") {
      return {
        code: 200,
        message: "登录成功！",
        data: {
          id: null,
          userId: 1,
          token: "77ae89be36504adfb5c09ef71409ea0e",
          expireTime: "2018-09-01T16:24:50.473+0000",
          createBy: null,
          createTime: null,
          lastUpdateBy: null,
          lastUpdateTime: "2018-09-01T04:24:50.473+0000"
        }
      };
    } else {
      return {
        code: 0,
        message: "登录失2255败！"
      };
    }
  }
};
