/**
 * menu模块接口列表
 */

import base from "../base"; // 导入接口域名列表
import axios from "@/utils/http"; // 导入http中创建的axios实例ba
// eslint-disable-next-line no-unused-vars
import qs from "qs"; // 根据需求是否导入qs模块

const menu = {
  // 菜单列表
  findNavTree() {
    return axios.get(`${base.sq}/menu/findNavTree`);
  },
  findMenuTree() {
    return axios.get(`${base.sq}/menu/findMenuTree`);
  }
};

export default menu;
