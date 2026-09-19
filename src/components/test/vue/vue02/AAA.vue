<template>
  <div class="childmain">
    <div class="tit">AAA组件</div>
    <div class="sub">{{ providemsgmsg1 }}</div>
    <div class="sub">{{ propsmsg.propsmsg1 }}</div>
    <div class="button" @click="emitclick">用emit给父组件传数据</div>
    <div class="user">用户：{{ user }}</div>
    <BBB></BBB>
  </div>
</template>

<script setup>
import { inject, defineProps, defineEmits } from "vue";
import BBB from "./BBB.vue";
import { userStore } from "@/stores/user";
import { storeToRefs } from "pinia";

// inject接收
const providemsgmsg1 = inject("providemsg");
// props接收数据
const propsmsg = defineProps(["propsmsg1"]); //{propsmsg1: '父组件props提供数据'}
//emit给父组件传递数据
const emitmsg = "子组件emit数据";
const emit = defineEmits(["emitData"]);
const emitclick = () => {
  emit("emitData", emitmsg);
};
//pinia
const store = userStore()
const {user} = storeToRefs(store)
</script>

<style lang="scss" scoped>
.childmain {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 20px;
  width: fit-content;
  .button {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #000;
    width: fit-content;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: #bfa;
      color: #fff;
      border-color: #bfa;
    }
  }
}
</style>
