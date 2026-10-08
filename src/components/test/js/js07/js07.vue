<template>
      <div class="testmain">
            <pre>
function Parent(){
  this.a=1
}
Parent.prototype.fn=function(){}

function Child(){}
// 让Child的原型指向Parent实例，实现继承
Child.prototype = new Parent()
Child.prototype.constructor = Child // 修复constructor指向
            </pre>
      </div>
</template>

<script setup>
import { defineEmits, onMounted } from "vue";

function Parent(){
  this.a=1
}
Parent.prototype.fn=function(){}

function Child(){}
// 让Child的原型指向Parent实例，实现继承
Child.prototype = new Parent()
Child.prototype.constructor = Child // 修复constructor指向

import decretion from "./js07.json";
const emit = defineEmits(["send-data"]);
onMounted(() => {
  emit("send-data", decretion);
});
</script>

<style lang="scss" scoped>

</style>
