<template>
  <div class="testmain">
    <pre>
let type = (obj) => {
  // typeof可区分值类型和引用类型，首先判断是否是值类型
  if (typeof obj !== "object") {
    return typeof obj;
  }
  // typeof null === "object"这是一个特殊情况
  else if (obj === null) {
    return "null";
  }
  // Array.isArray()判断是否是数组
  else if (Array.isArray(obj)) {
    return "array";
  }
  // 剩下的便是对象
  else {
    return "object";
  }
};
    </pre>
  </div>
</template>

<script setup>
import { defineEmits, onMounted } from "vue";
let s = "hello";
let n = 10;
let nan = NaN;
let b = true;
let a;
let o = null;
const sym = Symbol("sym");
let big = 123n;
let arr = [1, 2, 3, 4, 5];
let obj = { a: 1, b: 2, c: 3 };

let type = (obj) => {
  // typeof可区分值类型和引用类型，首先判断是否是值类型
  if (typeof obj !== "object") {
    return typeof obj;
  }
  // typeof null === "object"这是一个特殊情况
  else if (obj === null) {
    return "null";
  }
  // Array.isArray()判断是否是数组
  else if (Array.isArray(obj)) {
    return "array";
  }
  // 剩下的便是对象
  else {
    return "object";
  }
};
console.log(Object.prototype.toString.call(o));
console.log(Object.prototype.toString.call(arr));
console.log(Object.prototype.toString.call(obj));

// test描述
import decretion from "./js05.json";
const emit = defineEmits(["send-data"]);
onMounted(() => {
  emit("send-data", decretion);
});
</script>

<style lang="scss" scoped>
</style>
