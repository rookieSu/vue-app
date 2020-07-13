/*
 * @Author: suliang
 * @Date: 2020-07-13 11:28:59
 * @Last Modified by: suliang
 * @Last Modified time: 2020-07-13 17:41:56
 */

import { TO_LOGIN, TO_LOGOUT } from "../type";
import router from "../../router";
import { message } from "ant-design-vue";
export const user = {
  state: {
    loginParams: {
      username: "",
      password: "",
      checkd: "",
    },
  },
  mutations: {
    [TO_LOGIN](state, { loginParams }) {
      state.loginParams = { ...state.loginParams, ...loginParams };
    },
    [TO_LOGOUT](state) {
      state.loginParams = {};
    },
  },
  actions: {
    toLogin({ commit }, loginParams) {
      const { username, password } = loginParams;
      localStorage.setItem("user", username);
      localStorage.setItem("password", password);
      commit(TO_LOGIN, { loginParams });
      if (localStorage.getItem("user")) {
        router.push("/home");
      } else {
        message.info("登陆失败");
      }
    },
    toLogout({ commit }) {
      localStorage.clear();
      commit(TO_LOGOUT);
      router.push("/login");
    },
  },
};
