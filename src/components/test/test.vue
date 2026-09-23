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
import { ref,toRaw,watch } from "vue";
import { RouterView,useRoute } from "vue-router";
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
  activeIndex.value = parseInt(route.meta.index)-1;
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
  font-size: px2rem(24);
  text-align: center;
}
.wrapper {
  margin: px2rem(10) 0;
  display: flex;
  flex-wrap: wrap;
  .nav {
    margin-right: px2rem(10);
    border-radius: 20px;
    border:2px solid $borderColor;
    padding:px2rem(5) px2rem(10);
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: $hoverColor;
      border-color: $hoverColor;
      color: $hovertext;
    }
    &.active {
      border-color: $focus;
      background-color: $focus;
      color: $focustext;
    }
  }
}
.decretion {
  .head {
    font-size: px2rem(24);
    text-align: center;
    cursor: text;
  }

  .dec {
    padding: 0 px2rem(20);
    font-size: px2rem(18);

    .li {
      margin-top: px2rem(5);
      display: flex;
      .dectit{
        width: fit-content;
      }
      &::before {
        content: "⭐️";
        margin-right: px2rem(5);
      }
    }

    .all {
      margin-top: px2rem(10);
      padding: 0 px2rem(20);
      .sub {
        color: #41B883;
      }
    }

  }
}
</style>

