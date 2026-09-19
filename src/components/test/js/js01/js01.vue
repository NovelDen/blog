<template>
  <div class="testmain"></div>
</template>

<script setup>
import { defineEmits, onMounted } from "vue";

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("var", i);//3 3 3 想打印出012，可以用闭包/自执行函数把当时的 i 传进去(function(j){})(i)
  }, 1000 * i);
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("let", i);//0 1 2 var声明的变量只有函数作用域三次循环共用同一个 i，let声明的变量有块级作用域，每次循环都有自己的 i 副本
  }, 1000 * i);
}
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
