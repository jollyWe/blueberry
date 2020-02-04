import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import tab from "./modules/tab";
import iframe from "./modules/iframe";
import user from "./modules/user";
import menu from "./modules/menu";
// import tab from "@components/TabView/TabCtrl.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    tab,
    iframe,
    user,
    menu
  }
});
