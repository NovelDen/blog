<template>
  <div class="childmain">
    <!-- 匿名插槽 -->
    <div class="slot">
      <div class="tit">AAA组件</div>
    </div>
    <!-- 具名插槽 -->
    <div class="name">
      <slot name="header"></slot>
    </div>
    <!-- 作用域插槽 -->
    <div class="main">
      <slot name="main" :decretion="decretion"></slot>
    </div>
  </div>
</template>

<script setup>
const decretion = [
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
];
</script>

<style lang="scss" scoped>
.childmain {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 20px;
  width: fit-content;
  .main{
    padding: px2rem(10);
    border: 1px solid #000;
    border-radius: 20px;
  }
}
</style>
