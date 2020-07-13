/*
 * @Author: suliang
 * @Date: 2020-07-13 09:45:00
 * @Last Modified by: suliang
 * @Last Modified time: 2020-07-13 11:44:01
 */

import Vue from "vue";
import Vuex from "vuex";

// import mutations from "./mutations";
// import actions from "./actions";
import { user } from "./modules/user"
Vue.use(Vuex);

const store = new Vuex.Store({
  // state: {
  //   loginParams: {},
  // },
  // actions,
  // mutations
  modules:{
    user
  }
});

export default store;
