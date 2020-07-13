import Vue from "vue";
import Router from "vue-router";

import LoginPage from "../pages/loginPage"
import RegisterPage from "../pages/registerPage";
import HomePage from "../pages/homePage"
import Test from '@/components/Test'
import FinancialStatement from '@/components/tables/FinancialStatement'
Vue.use(Router);

var router = new Router({
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
      children: [
        {
          path: "/register/test",
          name: "test",
          component: Test
        }
      ]
    },
    {
        path: "/home",
        name: "homePage",
        component: HomePage,
        children: [
          {
            path: '/home/financialStatement',
            component: FinancialStatement,
            name: 'financialStatement'
          }
        ]
    },
    {
        path: "/",
        redirect: "/home"
    }
  ],
});

export default router;
