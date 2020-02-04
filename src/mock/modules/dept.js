/*
 * 机构管理模块
 */

// 保存
export function save() {
  return {
    code: 200,
    // msg: null,
    message: "获取数据成功！",
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

// eslint-disable-next-line no-unused-vars
export function findDeptTree(params) {
  // 查询机构树
  let findTreeData = {};
  let content = [];
  for (let i = 0; i < 3; i++) {
    let obj = {};
    obj.id = i + 1;
    obj.parentId = 0;
    obj.name = "机构部门  " + obj.id;
    obj.parentName = "顶级机构";
    obj.children = [];
    content.push(obj);
  }
  for (let i = 0; i < content.length; i++) {
    let parent = content[i];
    for (let j = 0; j < 5; j++) {
      let obj = {};
      obj.id = i + 1 + "" + (j + 1);
      obj.parentId = parent.id;
      obj.parentName = parent.name;
      obj.name = "机构部门  " + (i + 1) + "-" + (j + 1);
      parent.children.push(obj);
    }
  }
  findTreeData = content;
  return {
    code: 200,
    message: "获取数据成功！",
    data: findTreeData
  };
}
