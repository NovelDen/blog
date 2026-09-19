<template>
  <div class="wrapper">
    <div
      v-for="(item, index) in childrenList"
      :key="index"
      class="nav"
      :class="{ active: activeIndex === index }"
      @click="Totest(index,item.path)"
    >
      {{ item.name }}
    </div>
  </div>
  <div class="decretion" v-if="decretion">
    <div class="head">{{ decretion.head }}</div>
    <div class="dec">
      <div class="li" v-for="(dec, index) in decretion.dec" :key="index">
        <div class="dectit">{{ dec.tit }}</div>
        <div class="decmain">
          <div class="main" v-for="(decmain, index) in dec.main" :key="index">
            {{ decmain }}
          </div>
        </div>
      </div>
      <div class="all">
        <div
          class="sub"
          v-for="(intotal, index) in decretion.intotal"
          :key="index"
        >
          {{ intotal }}
        </div>
      </div>
    </div>
  </div>
  <RouterView v-slot="{ Component }">
    <component :is="Component" @send-data="handleData" />
  </RouterView>
</template>

<script setup>
import router from "@/router";
import { ref, onMounted, reactive, toRaw,watch } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import {routeChildrenListStore} from "@/stores/route";
import { storeToRefs } from "pinia";

const activeIndex = ref(0);
const decretion = ref({});
const store = routeChildrenListStore()
const {routeChildrenList} = storeToRefs(store)
const childrenList = toRaw(routeChildrenList)
const Totest = (index,path) => {
  activeIndex.value = index;
  localStorage.setItem("navActiveIndex", index);
  router.push(path);
};
const route = useRoute();
const initActiveIndex = () => {
  const path = route.path;
  const match = path.match(/\/*0(\d+)$/);
  activeIndex.value = parseInt(match[1])-1;
};

watch(
  () => route.path,
  () => {
    initActiveIndex();
  },
  { immediate: true }
);
const handleData = (val) => {
  decretion.value = val;
};
</script>

<style lang="scss" scoped>
.test {
  font-size: 24px;
  text-align: center;
}
.wrapper {
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  .nav {
    margin-right: 10px;
    border-radius: 20px;
    border:2px solid #38BBB3;
    padding:5px 10px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: #38BBB3;
      color: #fff;
    }
    &.active {
      border-color: #409eff;
      background-color: #409eff;
      color: #fff;
    }
  }
}
.decretion {
  .head {
    font-size: 24px;
    text-align: center;
    cursor: text;
  }

  .dec {
    padding: 0 20px;
    font-size: 18px;

    .li {
      margin-top: 5px;
      display: flex;
      &::before {
        content: "⭐️";
        margin-right: 5px;
      }
    }

    .all {
      margin-top: 10px;
      padding: 0 20px;
      .sub {
        color: #41B883;
      }
    }

  }
}
</style>

