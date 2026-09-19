<template>
  <div class="childmain">
    <div class="tit">AAA组件</div>
    <slot name="header"></slot>
    <slot name="main" :decretion="decretion"></slot>
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
}
</style>
