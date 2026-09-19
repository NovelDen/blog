<template>
  <div class="testmain">
    <div class="dec">点击编辑时可弹出input框并聚焦到编辑框</div>
    <button class="button" @click="startEdit">编辑</button>
    <input class="input" v-if="showEdit" ref="inputRef" />
  </div>
</template>

<script setup>
import { onMounted, defineEmits, ref, nextTick } from "vue";

const showEdit = ref(false);
const inputRef = ref(null);

async function startEdit() {
  showEdit.value = true;
  await nextTick(); //若无nextTick则inputRef.value为null
  inputRef.value?.focus();
}

// test描述
const decretion = {
  head: "nextTick",
  dec: [
    {
      tit: "nextTick：",
      main: ["用于dom更新循环结束后执行回调，或者在mounted或computed时获取dom",
      '基本用法：',
      'await / async：await nextTick()',
      'Promise：nextTick().then(() => {  })',
      '回调：nextTick(() => {  })'
    ],
    },
  ],
  intotal: ['原理：','在promise.resolve().then()中执行回调',"$nextTick(callback){return promise.resolve().then(()=>{callback()})}"],
};
const emit = defineEmits(["send-data"]);
onMounted(() => {
  emit("send-data", decretion);
});
</script>

<style lang="scss" scoped>
.button {
    margin-top: 10px;
    padding: 5px;
    border: 1px solid #000;
    width: 80px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: #bfa;
      color: #fff;
      border-color: #bfa;
    }
  }
  .input{
    margin-top: 10px;
    margin-left: 10px;
    padding: 5px;
    border: 1px solid #000;
  }
</style>
