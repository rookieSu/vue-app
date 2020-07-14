/*
 * @Author: suliang
 * @Date: 2020-07-13 11:28:59
 * @Last Modified by: suliang
 * @Last Modified time: 2020-07-14 11:45:04
 */

import { TO_LOGIN, TO_LOGOUT } from "../type";
import router from "../../router";
import { message } from "ant-design-vue";
import axios from "axios";
import { baseUrl } from "../../api";
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
      axios({
        url: `${baseUrl}/login`,
        data: loginParams,
        method: "POST",
      })
        .then((res) => {
          console.log("toLogin -> res", res);
          const { code } = res.data;
          localStorage.setItem("user", username);
          localStorage.setItem("password", password);
          if (code === 200) {
            router.push("/home");
            commit(TO_LOGIN, { loginParams });
          } else {
            message.error("登陆失败");
          }
        })
        .catch((err) => {
          message.error("网络错误");
          console.log("toLogin -> err", err);
        });
    },

    toLogout({ commit }) {
      localStorage.clear();
      commit(TO_LOGOUT);
      router.push("/login");
    },
  },
};
