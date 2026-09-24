<template>
  <div class="testmain">
    <div class="dec">
      <div class="tit">浅拷贝</div>
      <div class="sub">
        <div class="li">const newObj = Object.assign({}, obj)</div>
        <div class="li">const newObj = {...obj}</div>
      </div>
    </div>
    <div class="dec">
      <div class="tit">深拷贝</div>
      <div class="sub">
        <div class="li">JSON.parse(JSON.stringify(obj))</div>
        <div class="li">
          <pre>
function deepClone(obj) {
  // 判断是否为空或对象
  if (obj === null || typeof obj !== "object") return obj;
  // 根据对象类型创建新的对象
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    //判断是否有原型属性
    if (obj.hasOwnProperty(key)) {
      //判断key当前值是否为对象，是则递归拷贝
      newObj[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
}
          </pre>
        </div>
        <div class="li">const newObj = structuredClone(obj)</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, onMounted } from "vue";

const sym = Symbol("test");
let obj1 = {
  a: "a1",
  b: { c: "c1" },
  // d:Symbol("d1"),
  [sym]: "d1",
  // f:function(){
  // console.log("f1")
  // }
};
//赋值
let obj2 = obj1;
obj2.a = "a2";
console.log("obj1.b.c：", obj1.b.c);
console.log("赋值", obj1, obj2); //obj1和obj2都改变了

//Object.assign
let obj3 = Object.assign({}, obj1);
obj3.a = "a3";
obj3.b.c = "c2";
console.log("Object.assign", obj1, obj3); //obj1.a没有改变obj1.b.c改变了

//展开运算符
let obj4 = { ...obj1 };
obj4.a = "a4";
console.log("展开运算符", obj1, obj4); //obj1没有改变

//JSON.parse
let obj5 = JSON.parse(JSON.stringify(obj1));
obj5.a = "a5";
obj5.b.c = "c5";
console.log("JSON.parse", obj1, obj5); //obj1没有改变但obj5没有symbol属性

//structuredClone
let obj6 = structuredClone(obj1); //原对象symbol()作为值、有函数、WeakMap / WeakSet时会报错并无法拷贝
obj6.b.c = "c6";
console.log("structuredClone", obj1, obj6); //obj1没有改变obj6.b.c改变了

//手写递归
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
}
let obj7 = deepClone(obj1);
obj7.b.c = "c7";
console.log("deepClone", obj1, obj7);

// test描述
import decretion from "./js04.json";
const emit = defineEmits(["send-data"]);
onMounted(() => {
  emit("send-data", decretion);
});
</script>

<style lang="scss" scoped>
</style>
