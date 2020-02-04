/**
 * deptApi模块接口列表
 */
import base from "../base"; // 导入接口域名列表
import axios from "@/utils/http"; // 导入http中创建的axios实例
// eslint-disable-next-line no-unused-vars
import qs from "qs"; // 根据需求是否导入qs模块

const dept = {
  // 新闻列表
  findDeptTree(params) {
    return axios.post(`${base.sq}/dept/findTree`, { params: params });
  },
  // 新闻详情,演示
  save() {
    return axios.get(`${base.sq}/dept/save/`);
  }
};
export default dept;
