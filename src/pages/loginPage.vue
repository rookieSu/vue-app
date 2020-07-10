<template>
  <div id="login-container">
    <LoginNav />
    <a-card title="login" id="login-card">
      <LoginForm />
    </a-card>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import LoginNav from '@/components/LoginNav'
import { Card } from "ant-design-vue";
export default {
  name: "LoginPage",
  components: {
    LoginForm: LoginForm,
    ACard: Card,
    LoginNav: LoginNav
  },
};
</script>

<style>
#login-container {
  width: 100%;
  height: 600px;
}

#login-card {
  height: 350px;
  margin: 0 200px;
}
</style>
