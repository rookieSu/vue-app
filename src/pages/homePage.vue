<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header" :style="{ padding: '0 0' }">
      <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item> Welcome {{ username }} </a-menu-item>
        <a-menu-item> 当前时间： {{ nowTime }} </a-menu-item>
        <a-menu-item style="float: right">
          <a-button @click="handleLogout">
            logout
          </a-button>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu mode="inline" :style="{ height: '100%', borderRight: 0 }">
          <a-sub-menu key="userOperationList.key">
            <span slot="title">
              <a-icon type="user" />{{ userOperationList.parent }}
            </span>
            <a-menu-item
              v-for="list in userOperationList.children"
              :key="list.key"
              >
              <router-link :to="list.path">{{ list.name }}</router-link>
              </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="laptop" />subnav 2</span>
            <a-menu-item key="5">
              option5
            </a-menu-item>
            <a-menu-item key="6">
              option6
            </a-menu-item>
            <a-menu-item key="7">
              option7
            </a-menu-item>
            <a-menu-item key="8">
              option8
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="notification" />subnav 3</span>
            <a-menu-item key="9">
              option9
            </a-menu-item>
            <a-menu-item key="10">
              option10
            </a-menu-item>
            <a-menu-item key="11">
              option11
            </a-menu-item>
            <a-menu-item key="12">
              option12
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '280px',
          }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import { Layout, Menu, Icon, Button } from "ant-design-vue";
import { mapActions, mapState } from "vuex";
import { userOperationList } from "../config/side-menu-data";
import axios from "axios";
export default {
  name: "HomePage",
  components: {
    ALayout: Layout,
    ALayoutHeader: Layout.Header,
    ALayoutSider: Layout.Sider,
    ALayoutContent: Layout.Content,
    AMenu: Menu,
    ASubMenu: Menu.SubMenu,
    AMenuItem: Menu.Item,
    AIcon: Icon,
    AButton: Button,
  },
  methods: {
    ...mapActions(["toLogout"]),
    handleLogout: function() {
      this.toLogout();
    },
    getTime: function() {
      var date = new Date();
      this.nowTime = `${date.getFullYear()}年${Number(date.getMonth()) +
        1}月${date.getDate()}日:
                ${Number(date.getHours()) +
                  1}点${date.getMinutes()}分${date.getSeconds()}秒`;
    },
  },
  data() {
    return {
      collapsed: false,
      username: localStorage.getItem("user"),
      nowTime: null,
      timer: null,
      userOperationList,
    };
  },
  created: function() {
    let user = localStorage.getItem("user");
    console.log(!user);
    if (!user) {
      this.$router.replace("login");
    } else {
      this.timer = setInterval(this.getTime, 1000);
    }
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>
