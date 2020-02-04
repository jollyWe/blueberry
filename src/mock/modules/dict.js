/*
 * 字典管理模块
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
    obj.value = "value" + index;
    obj.label = "label" + index;
    obj.type = "type" + index;
    obj.description = "description" + index;
    obj.sort = 0;
    obj.name = "dict" + index;
    obj.name = "dict" + index;
    obj.name = "dict" + index;
    obj.name = "dict" + index;
    obj.remarks = "remarks" + index;
    if (i % 2 === 0) {
    }
    obj.createBy = "admin";
    obj.createTime = "2018-08-14 11:11:11";
    obj.createBy = "admin";
    obj.createTime = "2018-09-14 12:12:12";
    content.push(obj);
  }
  return content;
}
