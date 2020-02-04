export default {
  state: {
    appName: "Kitty Platform", //应用名称
    isCollapse: false, //导航栏收缩状态
    menuRouteLoaded: false //菜单和路由是否已经加载
  },
  mutations: {
    onCollapse(state) {
      //改变收缩状态
      state.isCollapse = !state.isCollapse;
    },
    menuRouteLoaded(state, menuRouteLoaded) {
      // 改变菜单和路由的加载状态
      state.menuRouteLoaded = menuRouteLoaded;
    }
  },
  actions: {}
};
