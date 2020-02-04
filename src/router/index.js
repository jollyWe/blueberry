import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import api from "@/api";
import store from "@/store";
import { isURL } from "@/utils/validate";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "首页",
    redirect: "/home",
    component: () => import("../views/layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "welcom",
        component: () => import("../views/Home.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () => import("../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  // 登录界面登录成功之后，会把用户信息保存在会话
  // 存在时间为会话生命周期，页面关闭即失效。
  let user = sessionStorage.getItem("user");
  if (to.path === "/login") {
    // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
    if (user) {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    // 如果访问非登录界面，且户会话信息不存在，代表未登录，则跳转到登录界面
    if (!user) {
      next({ path: "/login" });
    } else {
      // 加载动态菜单和路由
      addDynamicMenuAndRoutes();
      next();
    }
  }
});

/**
 * 加载动态菜单和路由
 */
function addDynamicMenuAndRoutes() {
  if (store.state.app.menuRouteLoaded) {
    console.log("动态菜单和路由已经存在.");
    return;
  }
  api.modules.menu
    .findNavTree()
    .then(res => {
      // console.log(res.data.data);
      // store.commit("setMenuTree", res.data);
      // 添加动态路由
      let dynamicRoutes = addDynamicRoutes(res.data);
      router.options.routes[0].children = router.options.routes[0].children.concat(
        dynamicRoutes
      );
      router.selfaddRoutes(router.options.routes);
      // 保存加载状态
      store.commit("menuRouteLoaded", true);
      // 保存菜单树
      store.commit("setNavTree", res.data);
    })
    .then(res => {
      api.modules.user.findPermissions().then(res => {
        // 保存用户权限标识集合
        store.commit("setPerms", res.data);
      });
    })
    .catch(function(res) {
      alert(res);
    });
}

/**
 * 添加动态(菜单)路由
 * @param {*} menuList 菜单列表
 * @param {*} routes 递归创建的动态(菜单)路由
 */
function addDynamicRoutes(menuList = [], routes = []) {
  var temp = [];
  for (var i = 0; i < menuList.length; i++) {
    if (menuList[i].children && menuList[i].children.length >= 1) {
      temp = temp.concat(menuList[i].children);
    } else if (menuList[i].url && /\S/.test(menuList[i].url)) {
      menuList[i].url = menuList[i].url.replace(/^\//, "");
      // 创建路由配置
      var route = {
        path: menuList[i].url,
        component: null,
        name: menuList[i].name,
        meta: {
          menuId: menuList[i].menuId,
          title: menuList[i].name,
          isDynamic: true,
          isTab: true,
          iframeUrl: ""
        }
      };
      // url以http[s]://开头, 通过iframe展示
      if (isURL(menuList[i].url)) {
        route["path"] = menuList[i].url;
        route["name"] = menuList[i].name;
        route["meta"]["iframeUrl"] = menuList[i].url;
      } else {
        try {
          // 根据菜单URL动态加载vue组件，这里要求vue组件须按照url路径存储
          // 如url="sys/user"，则组件路径应是"@/views/sys/user.vue",否则组件加载不到
          let array = menuList[i].url.split("/");
          let url =
            array[0].substring(0, 1).toUpperCase() +
            array[0].substring(1) +
            "/" +
            array[1].substring(0, 1).toUpperCase() +
            array[1].substring(1);
          route["component"] = resolve => require([`@/views/${url}`], resolve);
          // eslint-disable-next-line no-empty
        } catch (e) {}
      }
      routes.push(route);
    }
  }
  if (temp.length >= 1) {
    addDynamicRoutes(temp, routes);
  } else {
    // console.log(routes);
  }
  return routes;
}

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
router.selfaddRoutes = function(params) {
  router.matcher = new VueRouter().matcher;
  router.addRoutes(params);
};

export default router;
