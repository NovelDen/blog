<template>
  <div class="my-table-wrap">
    <!-- el-table 透传所有属性事件 -->
    <el-table v-bind="$attrs" :data="tableData" v-loading="loading" row-key>
      <!-- 渲染列配置 -->
      <el-table-column
        v-for="item in columns"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :min-width="item.minWidth"
        :align="item.align || 'left'"
      >
        <!-- 自定义插槽：如果配置里有slot，开启具名插槽 -->
        <template #default="{ row, column, index }" v-if="item.slot">
          <slot
            :name="item.slot"
            :row="row"
            :column="column"
            :index="index"
          ></slot>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页组件 -->
    <div
      class="pagination-wrap"
      style="margin-top: 12px; display: flex; justify-content: flex-end"
    >
      <el-pagination
        v-model:current-page="pageInfo.currentPage"
        v-model:page-size="pageInfo.pageSize"
        :total="pageInfo.total"
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handlePageChange"
        @current-change="handlePageChange"
      />
    </div>
  </div>
</template>
    
<script setup>
const props = defineProps({
  // 表格数据源
  tableData: {
    type: Array,
    default: () => [],
  },
  // 列配置
  columns: {
    type: Array,
    default: () => [],
  },
  // loading加载状态
  loading: {
    type: Boolean,
    default: false,
  },
  // 分页信息
  pageInfo: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update:pageInfo", "page-change"]);

// 分页改变事件，通知父组件重新请求数据
const handlePageChange = () => {
  emit("update:pageInfo", { ...props.pageInfo });
  emit("page-change");
};
</script>
    
<style scoped lang="scss">
.my-table-wrap {
  width: 100%;
}
</style>