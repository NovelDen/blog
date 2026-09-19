<template>
  <div class="testmain">
    <div class="tit">父组件</div>
      <AAA>
        <!-- 具名插槽，给子组件传值 -->
        <template #header>{{ content.tit }}</template>
        <!-- 作用域插槽，渲染从子组件过来的值 -->
        <template #main="sub">
          <div
            class="contents"
            v-for="(dec, index) in sub.decretion"
            :key="index"
          >
            <div class="subtit">{{ dec.tit }}</div>
            <div class="content">{{ dec.dec1 }}</div>
          </div> </template
        >
      </AAA>
  </div>
</template>

<script setup>
import AAA from "./AAA.vue";
import { onMounted,defineEmits } from 'vue'

const content = {
  tit: "这是标题",
  decretion: [
    {
      subtit: "内容1",
      dec1: "这是内容1",
    },
    {
      subtit: "内容2",
      dec1: "这是内容2",
    },
    {
      subtit: "内容3",
      dec1: "这是内容3",
    },
  ],
};

//test描述
const decretion = {
  head: "插槽",
  dec: [{
      tit: '插槽分为三种：匿名插槽、具名插槽、作用域插槽',
      main: ['匿名插槽、具名插槽、作用域插槽'],
    },
    {
      tit: '匿名插槽：',
      main: ['插槽没有名字，将插槽全部传入'],
    },
    {
      tit: '具名插槽：',
      main: ['插槽有名字，传入特定插槽'],
    },
    {
      tit: '作用域插槽：',
      main: ['传值(传值是由子传给父)'],
    },
  ],
  intotal: [
    "子组件封装逻辑（数据获取、循环、状态管理），父组件保留表现层控制权（怎么渲染）。作用域插槽是Vue 在封装性和灵活性之间做的精妙平衡：",
    "没有插槽 → 子组件完全封闭，父组件无法定制内部",
    "只有普通插槽 → 父组件能塞内容，但只能用父组件自己的数据",
    "作用域插槽 →父组件能拿到子组件的内部数据，用父组件自己的模板语法来渲染",
    "这就是为什么说插槽（尤其是作用域插槽）是 Vue组件封装中最强大的设计之一。",
  ],
};

const emit = defineEmits(['send-data'])
onMounted(() => {
  emit('send-data', decretion)
})
</script>

<style lang="scss" scoped>
</style>