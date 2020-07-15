<template>
  <div>
    <a-form
      id="financialForm"
      layout="inline"
      @submit="handleSubmit"
      :form="form"
    >
      <a-form-item label="id">
        <a-input v-decorator="['id']"></a-input>
      </a-form-item>
      <a-form-item label="name">
        <a-input v-decorator="['name']"></a-input>
      </a-form-item>
      <a-form-item label="address">
        <a-input v-decorator="['address']"></a-input>
      </a-form-item>
      <a-button type="primary" html-type="submit">
        提交
      </a-button>
    </a-form>
    <a-table
      :columns="tableList.cloumns"
      :data-source="tableList.data"
      :pagination="paginationOpt"
    ></a-table>
  </div>
</template>
<script>
import axios from "axios";
import { baseUrl } from "../../api";
import { Table, Form, Input, Button } from "ant-design-vue";
import { countBy } from "lodash/collection"
export default {
  name: "FinancialStatement",
  components: {
    ATable: Table,
    AForm: Form,
    AFormItem: Form.Item,
    AInput: Input,
    AButton: Button,
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        this.params = {...values};
        console.log("handleSubmit -> this.params", this.params)
        console.log(Object.keys(this.params));
        for (let k of Object.keys(this.params)) {
          if (!this.params[k]) {
            console.log(k, this.params[k]);
            delete this.params.k;
          }
        }
        console.log("handleSubmit -> this.params", this.params)
        console.log("handleSubmit -> values", values);
        axios
          .get(`${baseUrl}/financialData`, {
            params: this.params,
          })
          .then((res) => {
            console.log(res.data);
            this.tableList = res.data;
          });
      });
    },
  },
  data() {
    return {
      tableList: [],
      paginationOpt: {
        defaultCurrent: 1, //默认页面
        defaultPageSize: 10, //默认每页限时多少数据
        total: 0,
        showTotal: (total) => `共 ${total} 条`,
      },
      params: {},
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "financialForm" });
  },
  created() {
      console.log(countBy([1,2,3,4,4,5],))
    axios
      .get(`${baseUrl}/financialData`, {
        params: this.params,
      })
      .then((res) => {
        console.log(res.data);
        this.tableList = res.data;
      });
  },
};
</script>
