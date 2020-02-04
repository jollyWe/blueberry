/**
 * role模块接口列表
 */

import base from "../base"; // 导入接口域名列表
import axios from "@/utils/http"; // 导入http中创建的axios实例ba
// eslint-disable-next-line no-unused-vars
import qs from "qs"; // 根据需求是否导入qs模块

const role = {
  // 保存
  save(params) {
    return axios.post(`${base.sq}/role/save`, { params: params });
  },
  // 删除
  batchDelete(params) {
    return axios.post(`${base.sq}/role/delete`, { params: params });
  },
  // 分页查询
  findPage(params) {
    return axios.post(`${base.sq}/role/findPage`, { params: params });
  },
  // 查询全部
  findAll() {
    return axios.get(`${base.sq}/role/findAll`);
  },
  // 查询角色菜单集合
  findRoleMenus(params) {
    return axios.get(`${base.sq}/role/findRoleMenus`, { params: params });
  },
  // 保存角色菜单集合
  saveRoleMenus(params) {
    return axios.post(`${base.sq}/role/saveRoleMenus`, { params: params });
  }
};
export default role;
