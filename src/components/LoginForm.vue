<template>
  <a-form
    id="login-form"
    class="login-form"
    @submit="handleSubmit"
    :form="form"
  >
    <a-form-item>
      <a-input
        id="username"
        v-decorator="[
          'username',
          {
            rules: [
              {
                required: true,
                message: 'Please Input your username',
              },
            ],
          },
        ]"
        placeholder="username"
      >
        <a-icon type="user" slot="prefix" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        id="password"
        type="password"
        placeholder="password"
        v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: 'Please input your password',
              },
            ],
          },
        ]"
      >
        <a-icon type="lock" slot="prefix" style="color: rgba(0,0,0, .25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        class="login-checkbox"
        v-decorator="[
                'remember',
                {
                    valuePropName: 'checked',
                    initialValue: true,
                }
            ]"
      >
        Remember
      </a-checkbox>
      <a class="login-form-forget">
        Forgot password
      </a>
      <a-button type="primary" html-type="submit" class="login-form-button">
        Login
      </a-button>
      Or
      <a href="">
        register now
      </a>
    </a-form-item>
  </a-form>
</template>

<script>
import { Form, Input, Icon, Checkbox, Button } from "ant-design-vue";

export default {
  name: "LoginForm",
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      console.log(this.form);
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
        }
      });
    },
  },
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    AInput: Input,
    AIcon: Icon,
    ACheckbox: Checkbox,
    AButton: Button,
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "login-form" });
  },
};
</script>

<style>
#login-form .login-form {
  max-width: 300px;
}

#login-form .login-form-button {
  width: 100%;
}

#login-form .login-form-forget {
  float: right;
}

#login-form .login-checkbox{
  float: left;
}
</style>
