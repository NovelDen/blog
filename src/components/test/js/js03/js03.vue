<template>
      <div class="testmain">
            <pre>
function makeCounter() {
      let count = 0; // 自由变量，被内部函数捕获
      return function () {
            count++;
            return count;
      };
}
const next = makeCounter();
next(); // 1
next(); // 2
next(); // 3

for (var i = 0; i ＜ 3; i++) {
  setTimeout(() => {
    console.log("var", i); //3 3 3 想打印出012，可以用闭包/自执行函数把当时的 i 传进去(function(j){})(i)
  }, 1000 * i);
}
for (let i = 0; i ＜ 3; i++) {
  setTimeout(() => {
    console.log("let", i); //0 1 2 var声明的变量只有函数作用域三次循环共用同一个 i，let声明的变量有块级作用域，每次循环都有自己的 i 副本
  }, 1000 * i);
}
            </pre>
      </div>
</template>

<script setup>
import { defineEmits, onMounted } from "vue";
function makeCounter() {
  let count = 0; // 自由变量，被内部函数捕获
  return function () {
    count++;
    console.log(count);
    return count;
  };
}

const next = makeCounter();
next(); // 1
next(); // 2
next(); // 3

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("var", i); //3 3 3 想打印出012，可以用闭包/自执行函数把当时的 i 传进去(function(j){})(i)
  }, 1000 * i);
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("let", i); //0 1 2 var声明的变量只有函数作用域三次循环共用同一个 i，let声明的变量有块级作用域，每次循环都有自己的 i 副本
  }, 1000 * i);
}
// test描述
import decretion from "./js03.json";
const emit = defineEmits(["send-data"]);
onMounted(() => {
  emit("send-data", decretion);
});
</script>

<style lang="scss" scoped>
</style>
