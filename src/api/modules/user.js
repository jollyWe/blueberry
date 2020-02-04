/**
 * user模块接口列表
 */

// eslint-disable-next-line no-unused-vars
import base from "../base"; // 导入接口域名列表
import axios from "@/utils/http"; // 导入http中创建的axios实例ba
// eslint-disable-next-line no-unused-vars
import qs from "qs"; // 根据需求是否导入qs模块
const user = {
  // 保存用户
  save(params) {
    return axios.post(`${base.sq}/user/save`, qs.stringify(params));
  },
  // 删除
  delete(id, params) {
    return axios.post(`${base.sq}/user/delete/${id}`, qs.stringify(params));
  },
  // 分页查询
  findPage(params) {
    return axios.post(`$ {base.sq}/user/findPage`, qs.stringify(params));
  },
  // 查找用户的菜单权限标识集合
  findPermissions(params) {
    return axios.get(`${base.sq}/user/findPermissions`, params);
    // return axios.post(`$ {base.sq}/user/findPermissions`, qs.stringify(params));
  }
};

export default user;
