/*
 * 用户管理模块
 */

// 保存
export function save() {
  return {
    code: 200,
    msg: null,
    data: 1
  };
}
// 批量删除
export function batchDelete() {
  return {
    code: 200,
    msg: null,
    data: 1
  };
}
// 分页查询
export function findPage(params) {
  let findPageData = {};
  let pageNum = 1;
  let pageSize = 8;
  if (params !== null) {
    // pageNum = params.pageNum
  }
  if (params !== null) {
    // pageSize = params.pageSize
  }
  let content = getContent(pageNum, pageSize);
  findPageData.pageNum = pageNum;
  findPageData.pageSize = pageSize;
  findPageData.totalSize = 50;
  findPageData.content = content;
  return {
    code: 200,
    msg: null,
    data: findPageData
  };
}
export function getContent(pageNum, pageSize) {
  let content = [];
  for (let i = 0; i < pageSize; i++) {
    let obj = {};
    let index = (pageNum - 1) * pageSize + i + 1;
    obj.id = index;
    obj.name = "kitty" + index;
    obj.password =
      "9ec9750e709431dad22365cabc5c625482e574c74adaebba7dd02f1129e4ce1d";
    obj.salt = "YzcmCZNvbXocrsz9dm8e";
    obj.email = "kitty" + index + "@qq.com";
    obj.mobile = "18688982323";
    obj.status = 1;
    obj.deptId = 12;
    obj.deptName = "技术部";
    obj.status = 1;
    if (i % 2 === 0) {
      obj.deptId = 13;
      obj.deptName = "市场部";
    }
    obj.createBy = "admin";
    obj.createTime = "2018-08-14 11:11:11";
    obj.createBy = "admin";
    obj.createTime = "2018-09-14 12:12:12";
    content.push(obj);
  }
  return content;
}
// 查找用户的菜单权限标识集合
export function findPermissions() {
  let permsData = [
    null,
    "sys:user:view",
    "sys:menu:delete",
    "sys:dept:edit",
    "sys:dict:edit",
    "sys:dict:delete",
    "sys:menu:add",
    "sys:user:add",
    "sys:log:view",
    "sys:dept:delete",
    "sys:role:edit",
    "sys:role:view",
    "sys:dict:view",
    "sys:user:edit",
    "sys:user:delete",
    "sys:dept:view",
    "sys:dept:add",
    "sys:role:delete",
    "sys:menu:view",
    "sys:menu:edit",
    "sys:dict:add",
    "sys:role:add"
  ];
  return {
    code: 200,
    msg: null,
    data: permsData
  };
}
