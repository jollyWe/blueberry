/*
 * 角色管理模块
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
// 查询全部
export function findAll() {
  let allData = [
    {
      id: 1,
      createBy: "admin",
      createTime: "2018-08-14T03:11:11.000+0000",
      lastUpdateBy: "admin",
      lastUpdateTime: "2018-08-14T03:11:11.000+0000",
      name: "admin",
      remark: "超级管理员",
      delFlag: 0
    },
    {
      id: 2,
      createBy: "admin",
      createTime: "2018-08-14T03:11:11.000+0000",
      lastUpdateBy: "admin",
      lastUpdateTime: "2018-08-14T03:11:11.000+0000",
      name: "dev",
      remark: "开发人员",
      delFlag: 0
    },
    {
      id: 3,
      createBy: "admin",
      createTime: "2018-08-14T03:11:11.000+0000",
      lastUpdateBy: "admin",
      lastUpdateTime: "2018-08-14T03:11:11.000+0000",
      name: "test",
      remark: "测试人员",
      delFlag: 0
    }
  ];
  return {
    code: 200,
    data: allData
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
    obj.name = "role" + index;
    obj.remark = "remark role" + index;
    // eslint-disable-next-line prettier/prettier
    // if (i % 2 === 0) {}
    obj.createBy = "admin";
    obj.createTime = "2018-08-14 11:11:11";
    obj.createBy = "admin";
    obj.createTime = "2018-09-14 12:12:12";
    content.push(obj);
  }
  return content;
}
// 查询角色菜单集合
// eslint-disable-next-line no-unused-vars
export function findRoleMenus(params) {
  let findRoleMenuData = { sys: "系统管理" };
  return {
    code: 200,
    msg: null,
    data: findRoleMenuData
  };
}
