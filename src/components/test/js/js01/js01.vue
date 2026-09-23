<template>
  <div class="testmain"></div>
</template>

<script setup>
import { defineEmits, onMounted } from "vue";

new Promise((resolve) => {
  console.log("promise");//new promise属于同步任务
  resolve();
}).then(() => {
  console.log("promise then");
});
Promise.resolve().then(() => {
  console.log("promise then");
});
console.log("for循环结束");

// test描述
import decretion from "./js01.json";
const emit = defineEmits(["send-data"]);
onMounted(() => {
  emit("send-data", decretion);
});
</script>

<style lang="scss" scoped>
</style>
