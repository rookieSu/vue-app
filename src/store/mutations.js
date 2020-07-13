/*
 * @Author: sulaing
 * @Date: 2020-07-13 10:19:08
 * @Last Modified by: suliang
 * @Last Modified time: 2020-07-13 11:06:28
 */
import { TO_LOGIN } from "./type";

export default {
  [TO_LOGIN](state, { loginParams }) {
    state.loginParams = { ...state.loginParams, ...loginParams };
  },
};
