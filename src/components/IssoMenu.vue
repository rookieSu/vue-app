<template>
  <a-menu mode="horizontal" class="menu-height">
    <a-menu-item>menu1</a-menu-item>
    <a-menu-item>menu2</a-menu-item>
    <a-sub-menu>
      <a-menu-item>1</a-menu-item>
      <a-menu-item>2</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
import Vue from "vue";
import { Menu, SubMenu } from "ant-design-vue";
Vue.use([Menu, SubMenu]);
export default {
  name: "IssoMenu",
};
</script>

<style scoped>
    .menu-height {
        height: 200px;
    }
</style>
