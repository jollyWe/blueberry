import Mock from "mockjs";
// import articleAPI from "./modules/article";
// import loginAPI from "./modules/login";

const path = require("path");
const files = require.context("./modules", false, /\.js$/);
let modules = {};

files.keys().forEach(key => {
  let name = path.basename(key, ".js");
  modules[name] = files(key).default || files(key);
});
//设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
  timeout: "300-600"
});

//文章相关
Mock.mock(/\/article\/list/, "get", modules.article.getList);

// 登录相关
Mock.mock(/\/login/, "get", modules.login.loginByName);

// 机构管理模块
Mock.mock(/\/dept\/save/, "get", modules.dept.save);
Mock.mock(/\/dept\/delete/, "post", modules.dept.batchDelete);
Mock.mock(/\/dept\/findTree/, "post", modules.dept.findDeptTree);

// 菜单相关
Mock.mock(/\/menu\/findNavTree/, "get", modules.menu.findNavTree);
Mock.mock(/\/menu\/findMenuTree/, "get", modules.menu.findMenuTree);

// 用户相关
Mock.mock(/\/user\/findPage/, "post", modules.user.findPage);
Mock.mock(/\/user\/delete/, "post", modules.user.batchDelete);
Mock.mock(/\/user\/save/, "post", modules.user.save);
Mock.mock(/\/user\/edit/, "get", modules.user.updateUser);
Mock.mock(/\/user\/findPermissions/, "get", modules.user.findPermissions);

// 角色管理模块
Mock.mock(/\/role\/save/, "post", modules.role.save);
Mock.mock(/\/role\/delete/, "post", modules.role.batchDelete);
Mock.mock(/\/role\/findPage/, "post", modules.role.findPage);
Mock.mock(/\/role\/findAll/, "get", modules.role.findAll);
Mock.mock(/\/role\/findRoleMenus/, "get", modules.role.findRoleMenus);

// 字典管理模块
Mock.mock(/\/dict\/save/, "post", modules.dict.save);
Mock.mock(/\/dict\/delete/, "post", modules.dict.batchDelete);
Mock.mock(/\/dict\/findPage/, "post", modules.dict.findPage);
