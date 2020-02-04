/**
 * login模块接口列表
 */

import base from "../base"; // 导入接口域名列表
import axios from "@/utils/http"; // 导入http中创建的axios实例ba
// eslint-disable-next-line no-unused-vars
import qs from "qs"; // 根据需求是否导入qs模块

const requestLogin = {
  login(params) {
    return axios.get(`${base.sq}/login`, { params: params });
  },

  logout() {
    return axios.get(`${base.sq}/logut`);
  }
};
export default requestLogin;
