import Vue from "vue";
import Router from "vue-router";

import LoginPage from "../pages/loginPage"
import RegisterPage from "../pages/registerPage";
import HomePage from "../pages/homePage"
Vue.use(Router);

var routers = new Router({
  routes: [
    {
      path: "/login",
      name: "loginPage",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "registerPage",
      component: RegisterPage,
    },
    {
        path: "/home",
        name: "homePage",
        component: HomePage
    },
    {
        path: "/",
        redirect: "/home"
    }
  ],
});

export default routers;
