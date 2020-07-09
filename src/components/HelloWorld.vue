<template>
  <div>
    <a-radio-group :size="size" @change="handleSizeChange">
      <a-radio-button value="large">Large</a-radio-button>
      <a-radio-button value="default">default</a-radio-button>
      <a-radio-button value="small">small</a-radio-button>
    </a-radio-group>
    <a-button-group>
      <a-button :size="size"> ge<a-icon type="left" /> </a-button>
    </a-button-group>
    <a-button-group>
      <a-button>Cancel</a-button>
      <a-button type="primary">
        OK
      </a-button>
    </a-button-group>
  </div>
</template>

<script>
import Vue from "vue";
import { Button, Radio, Icon } from "ant-design-vue";

// import "ant-design-vue/dist/antd.css";

Vue.use([Button, Radio, Icon]);
export default {
  name: "HelloWorld",
  data: function() {
    return {
      size: "default",
    };
  },
  methods: {
    handleSizeChange(event) {
      this.size = event.target.value;
    },
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
