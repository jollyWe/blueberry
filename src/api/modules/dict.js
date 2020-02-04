/**
 * deptApi模块接口列表
 */
import base from "../base"; // 导入接口域名列表
import axios from "@/utils/http"; // 导入http中创建的axios实例
// eslint-disable-next-line no-unused-vars
import qs from "qs"; // 根据需求是否导入qs模块

const dict = {
  // 新闻列表
  findPage(params) {
    return axios.post(`${base.sq}/dict/findPage`, { params: params });
  },
  //
  save() {
    return axios.post(`${base.sq}/dept/save/`);
  },
  delete() {
    return axios.post(`${base.sq}/dept/delete/`);
  }
};
export default dict;
