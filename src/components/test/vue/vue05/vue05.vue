<template>
  <div class="testmain">
    <div class="route"><div class="li">route：{{ route.path }}</div><div class="li">route.meta：{{ route.meta }}</div></div>
    <div class="child">
      <div class="nav">
        <RouterLink class="li" to="/vue/vue05/AAA" @click="routeTo">AAA</RouterLink>
        <RouterLink class="li" to="/vue/vue05/BBB" @click="routeTo">BBB</RouterLink>
      </div>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, onMounted } from "vue";
import { useRoute, RouterView } from "vue-router";
const route = useRoute();
const routeTo = ()=>{
  console.log(route.path);
}
// test描述
import decretion from "./vue05.json";
const emit = defineEmits(["send-data"]);
onMounted(() => {
  emit("send-data", decretion);
  // console.log(route.path);
});
</script>

<style lang="scss" scoped>
.route{
  .li{
    margin: px2rem(10) 0;
  }
  margin: px2rem(10) 0;
}
.nav{
  margin: px2rem(10) 0;
  display: flex;
}
.li{
  margin-right: px2rem(10);
  display: block;
  width: fit-content;
  padding: px2rem(20);
  box-shadow: 0 0 10px rgba(#000,0.4);
  border-radius: 20px;
}
</style>
