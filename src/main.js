import Vue from "vue";
import App from "./App.vue";

import routers from './router'
// import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router: routers
}).$mount("#app");
