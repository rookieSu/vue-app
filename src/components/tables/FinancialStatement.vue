<template>
  <a-table :columns="tableList.cloumns" :data-source="tableList.data" pagination="5"></a-table>
</template>
<script>
import axios from "axios";
import { baseUrl } from "../../api";
import { Table } from "ant-design-vue";
export default {
  name: "FinancialStatement",
  components: {
    ATable: Table
  },
  data() {
    return {
      tableList: []
    };
  },
  created() {
    axios.get(`${baseUrl}/financialData`).then(res => {
      console.log(res.data);
      this.tableList = res.data;
    });
  }
};
</script>