<template>
  <div class="testmain">
    <pre>
new Promise((resolve) => {
  console.log("promise");①
  resolve();
}).then(() => {
  console.log("promise then1");③
});
Promise.resolve().then(() => {
  console.log("promise then2");④
});
console.log("for循环结束");②
    </pre>
  </div>
</template>

<script setup>
import { defineEmits, onMounted } from "vue";

new Promise((resolve) => {
  console.log("promise");//new promise属于同步任务
  resolve();
}).then(() => {
  console.log("promise then1");
});
Promise.resolve().then(() => {
  console.log("promise then2");
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
