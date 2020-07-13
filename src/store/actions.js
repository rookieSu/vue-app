/*
 * @Author: suliang
 * @Date: 2020-07-13 10:46:27
 * @Last Modified by: suliang
 * @Last Modified time: 2020-07-13 11:05:13
 */
import { TO_LOGIN } from "./type";
//发送登陆action
export default {
  toLogin({ commit }, loginParams) {
    console.log("toLogin -> loginParams", loginParams);
    commit(TO_LOGIN, { loginParams });
  },
};
