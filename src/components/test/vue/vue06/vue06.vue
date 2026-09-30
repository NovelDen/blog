<template>
  <div class="testmain">
    <div class="test01">
      <div class="tit">小测试</div>
      <MyInput v-model="val" placeholder="请输入">
        <template #prepend>
          <el-select placeholder="select" style="width: 100px" v-model="val">
            <el-option label="国家" value="1"></el-option>
            <el-option label="省份" value="2"></el-option>
            <el-option label="城市" value="3"></el-option>
          </el-select>
        </template>
        <template #append>
          <el-button @click="click">按钮</el-button>
        </template>
      </MyInput>
    </div>
    <div class="test02">
      <div class="tit">表格组件封装</div>
      <MyTable
        :table-data="list"
        :columns="tableColumns"
        :loading="tableLoading"
        v-model:page-info="pageInfo"
        @page-change="fetchData"
        border
        stripe
      >
        <!-- 自定义插槽示例：操作列，slot名称和columns配置slot字段对应 -->
        <template #operate="{ row }">
          <el-button type="primary" link @click="handleEdit(row)"
            >编辑</el-button
          >
          <el-button type="danger" link @click="handleDel(row)">删除</el-button>
        </template>
      </MyTable>
    </div>
  </div>
</template>
<script setup>
import MyInput from "./myInput.vue";
import MyTable from "./myTable.vue";
import { ref, onMounted, defineEmits, reactive } from "vue";
let val = ref("");
let click = () => {
  console.log("点击了");
};
// console.log(val);

// 表格数据
const list = ref([]);
const tableLoading = ref(false);

//分页
const pageInfo = reactive({
  currentPage: 1,
  pageSize: 10,
  total: 0,
});

//列配置
const tableColumns = ref([
  { label: "ID", prop: "id", width: 80, align: "center" },
  { label: "姓名", prop: "name", minWidth: 120 },
  { label: "年龄", prop: "age", width: 100 },
  { label: "操作", slot: "operate", width: 150, align: "center" },
]);

//模拟请求接口
const fetchData = async () => {
  tableLoading.value = true;
  console.log("请求参数", pageInfo);

  //模拟数据
  setTimeout(() => {
    list.value = [
      { id: 1, name: "张三", age: 20 },
      { id: 2, name: "李四", age: 22 },
    ];
    pageInfo.total = 100;
    tableLoading.value = false;
  }, 600);
};

const handleEdit = (row) => {
  console.log("编辑", row);
};
const handleDel = (row) => {
  console.log("删除", row);
};

//页面初始化
fetchData();

// test描述
import decretion from "./vue06.json";
const emit = defineEmits(["send-data"]);
onMounted(() => {
  emit("send-data", decretion);
  // console.log(route.path);
});
</script>
<style scoped lang="scss">
.test01,
.test02 {
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #000;
  width: 100%;
  .tit {
    margin-bottom: 20px;
    text-align: center;
  }
}
</style>