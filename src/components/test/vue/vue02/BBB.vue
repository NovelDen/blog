<template>
  <div class="main">
    <div class="tit">BBB组件</div>
    <div class="data">{{ providemsgmsg1 }}</div>
    <div class="button" @click="login">点击登录</div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import { userStore } from "@/stores/user";

const providemsgmsg1 = inject("providemsg");
//pinia
const store = userStore()
const {setuser} = store
const login = ()=>{
  setuser("出野")
}
</script>

<style lang="scss" scoped>
.main {
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
