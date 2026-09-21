<template>
  <div class="main">
    <Nav>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />

      <div class="NavWrapper">
        <RouterLink class="link" to="/">home</RouterLink>
        <RouterLink
          v-for="(item, index) in childrenList"
          :key="index"
          class="link"
          :to="item.path"
          @click="setTestList()"
          >{{ item.name }}</RouterLink
        >
      </div>
    </Nav>

    <div class="right">
      <RouterView class="view" />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import { childrenList } from "@/router/childlist";
import { routeChildrenListStore } from "@/stores/route";
import { js } from "@/router/js";
import { vue } from "@/router/vue";
import { computed, onMounted, watch } from "vue";


const store = routeChildrenListStore();
const { setrouteChildrenList } = store;
const route = useRoute();

const routeListMap = {
  vue: vue,
  js: js,
};
const setTestList = (path) => {
  const match = path.replace(/^\/([a-zA-Z]+)\d+$/, "$1");
  const list = routeListMap[match] ?? routeListMap.vue;
  if (list) {
    setrouteChildrenList(...list);
  }
};
watch(
  () => route.path,
  (v) => {
    setTestList(v);
  },
  { immediate: true }
);

</script>


<style scoped lang="scss">
.main {
  display: flex;
  overflow: hidden;
  Nav {
    position: fixed;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    height: 100vh;
    width: px2rem(120);
    flex-direction: column;
    padding: px2rem(10) 0;
    background: $mainColor;
    .logo {
      display: block;
      box-sizing: content-box;
      padding: 0 px2rem(10);
      width: px2rem(50);
      height: px2rem(50);
    }
    .NavWrapper {
      display: flex;
      align-items: center;
      flex-direction: column;
      color: #fff;
      width: 100%;
      .link {
        width: 85%;
        color: #fff;
        background: $mainColor;
        text-align: center;
        margin-top: px2rem(10);
        padding: px2rem(5) 0;
        border: 2px solid $borderColor;
        border-radius: 20px;
        transition: 0.3s;
        &:hover{
          background: $hoverColor;
          color: $hovertext;
          border-color: $hoverColor;
        }
        &.router-link-active{
          background: $focus;
          border-color: $focus;
          color: $focustext;
        }
      }
    }
  }
  .right {
    // padding: 10px 20px;
    flex: 1;
    margin-left: px2rem(120);
    overflow-y: auto;
  }
}
</style>
