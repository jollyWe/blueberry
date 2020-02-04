/**
 * api接口的统一出口
 */

// 文章模块接口
// import article from "@/api/modules/article";
// 其他模块的接口……
// import requestLogin from "@/api/modules/login";

const path = require("path");
const files = require.context("./modules", false, /\.js$/);
let modules = {};

files.keys().forEach(key => {
  let name = path.basename(key, ".js");
  modules[name] = files(key).default || files(key);
});
// console.log(modules);
// 导出接口
export default {
  modules
  // article,
  // requestLogin
  // ……
};
