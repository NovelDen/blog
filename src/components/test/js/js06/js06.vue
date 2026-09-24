<template>
  <div class="testmain">
    <div class="dec">
      <div class="tit">改变原数组</div>
      <div class="sub">
        <div class="li">push()：arr.push(4, 11)</div>
        <div class="li">pop()：arr.pop()</div>
        <div class="li">unshift()：arr.unshift(0,1)</div>
        <div class="li">shift()：arr.shift()</div>
        <div class="li">splice ()：arr.splice(1,2) arr.splice(1,0,99) arr.splice(2,1,66)</div>
      </div>
    </div>
    <div class="dec">
      <div class="tit">不改变原数组</div>
      <div class="sub">
        <div class="li">slice()：arr.slice(1,3) arr.slice(1) arr.slice()</div>
        <div class="li">concat()：newArr1.concat([1,2,3])</div>
        <div class="li">map()：newArr4.map((item)=>{item*2})</div>
        <div class="li">filter()：newArr4.filter((item)=>{item%2===0})</div>
        <div class="li">flat()：arr4.flat(1)</div>
      </div>
    </div>
    <div class="dec">
      <div class="tit">遍历不修改、返回其他值</div>
      <div class="sub">
        <div class="li">find()：arr.find((item)=>{return item%6===0;})</div>
        <div class="li">findIndex()：arr.findIndex((item)=>{return item%6===0;})</div>
        <div class="li">some()：arr.some((item)=>{return item%6===0;})</div>
        <div class="li">every()：arr.every((item)=>{return item%6===0;})</div>
        <div class="li">reduce()：arr.reduce((pre,cur)=>{return pre+cur;},0)</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, onMounted } from "vue";

let arr = [1, 3, 6, 8, 5, 9, 12, 20, 35, 17];

//改变数组
arr.push(4, 11);//末尾添加元素，返回新数组长度
arr.pop();//删除最后一项，返回被删除元素
arr.unshift(0,1)//数组开头添加元素，返回新长度
arr.shift()//删除开头元素，返回被删除元素
arr.splice(1,2) //从下标1删除2个元素
arr.splice(1,0,99) //下标1，删除0个，插入99
arr.splice(2,1,66) //下标2删除1个，替换成66
arr.reverse() //反转数组，返回反转后的数组
arr.sort((a,b)=>a-b) ///升序排序
arr.sort((a,b)=>b-a) ///降序排序

//不改变数组
let newArr1 = arr.slice(1,3) // 从下标1截取到下标2，不包含3
let newArr2 = arr.slice(1) //从下标1截取到末尾
let newArr3 = arr.slice() //完整拷贝数组（浅拷贝）
let newArr4 = newArr1.concat([1,2,3])//数组拼接，返回新数组
let arr2 = newArr4.map((item)=>{item*2})//遍历，对每一项做处理，返回新数组
let arr3 = newArr4.filter((item)=>{item%2===0})//过滤，返回新数组
let arr4 = [1,[2,[3]]]
let newArr5 = arr4.flat(1)//拉平一层[1,2,[3]]
let newArr6 = arr4.flat(Infinity)//全部拉平 [1,2,3]

//遍历不修改、返回其他值

arr.forEach((item,index,arr)=>{//遍历数组，无返回值
  if(item%6===0){
    console.log(item,index,arr);
  }
})
let newArr7 = arr.find((item)=>{return item%6===0;})//找到第一个满足条件的
let newArr8 = arr.findIndex((item)=>{return item%6===0;})//找到第一个满足条件的索引
let newArr9 = arr.some((item)=>{return item%6===0;})//数组中任一满足条件返回true
let newArr10 = arr.every((item)=>{return item%6===0;})//数组中每个满足条件返回true
arr.includes(1)//查询是否包含，满足返回true
arr.indexOf(1)//查询索引，没有返回-1
let newArr11 = arr.reduce((pre,cur)=>{return pre+cur;},0)//数组元素求和或求积

Array.prototype.mySort = function(fn){
  let arr = this
  if(typeof fn !== "function"){
    fn = (a,b)=>{
      a = String(a)
      b = String(b)
      if(a>b)return 1
      if(a<b)return -1
      return 0
    }
  }
  for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-1-i;j++){
      if(fn(arr[j],arr[j+1])>0){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr
}

let arrs = [3,4,2,5,1]
console.log(arrs.mySort((a,b)=>b-a));


import decretion from "./js06.json";
const emit = defineEmits(["send-data"]);
onMounted(() => {
  emit("send-data", decretion);
});
</script>

<style lang="scss" scoped>
</style>
