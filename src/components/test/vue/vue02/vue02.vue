<template>
  <div class="testmain">
    <div class="parent">父组件</div>
    <div class="data">子组件数据：{{ emitmsg }}</div>
    <div class="child">
      <AAA :propsmsg1="propsmsg" @emitData="handlemit"></AAA>
    </div>
  </div>
</template>

<script setup>
import { onMounted, provide, ref } from "vue";
import AAA from "./AAA.vue";

const propsmsg = "父组件props提供数据";
const providemsg = "父组件provide提供数据";
// provide提供
provide("providemsg", providemsg);

//emit接收数据
const emitmsg = ref("");
const handlemit = (val) => {
  emitmsg.value = val;
};

// test描述
const decretion = {
  head: "组件传值",
  dec: [
    {
      tit: "组件间传值的方法有三种：",
      main: ["依赖注入、props、emit、vuex(pinia)"],
    },
    {
      tit: "依赖注入：",
      main: [
        '父组件：provide("providemsg",providemsg)',
        '子组件：const providemsgmsg1 = inject("providemsg");',
      ],
    },
    {
      tit: "props：",
      main: [
        '父组件：<AAA :propsmsg1="propsmsg"></AAA>',
        '子组件：const propsmsg = defineProps(["propsmsg1"]); //{propsmsg1: "父组件props提供数据"}',
      ],
    },
    {
      tit: "emit：",
      main: [
        '父组件：<AAA @emitData="handlemit">',
        'const emitmsg = ref("");',
        "const handlemit = (val) => {emitmsg.value = val;};",
        '子组件：<div @click="emitclick">用emit给父组件传数据</div> ',
        'const emit = defineEmits(["emitData"]);',
        'const emitclick = () => {emit("emitData", emitmsg);};',
      ],
    },
    {
      tit: "pinia：",
      main: [
        "store：",
        'export const useStore = defineStore("counter", () => {',
        ' const user = ref("")',
        " const getuser = computed(() => user) //pinia组合式中computed相当于getter",
        " const setuser = (name) => {user.value = name} //function相当于action",
        " return { user, getuser, setuser } //组合式需return数据和方法",
        "})",
        "A组件：",
        "const store = useStore()",
        "const {setuser} = store //对于解构方法无需用方法包裹",
        'const login = ()=>{setuser("出野")}',
        "B组件： ",
        "const store = useStore()",
        "const {user} = storeToRefs(store)//对于值和getter需用storeToRefs包裹",
      ],
    },
  ],
  intotal: [
    "为了从 store 中提取属性时保持其响应性，需要使用 storeToRefs()。它将为每一个响应式属性创建引用,否则解构出来的数据将保持解构出来时的值不会变化。当只使用 store 的状态而不调用任何 action 时，它会非常有用。",
    "pinia可以定义任意多的 store，但为了让使用 pinia 的益处最大化，应该在不同的文件中去定义 store",
    "要让 pinia 正确识别 state，必须在 setup store 中返回 state 的所有属性。这意味着，不能在 store 中使用私有属性。不完整返回会影响 SSR ，开发工具和其他插件的正常运行。",
    "Setup store 比 Option Store 带来了更多的灵活性，因为可以在一个 store 内创建侦听器，并自由地使用任何组合式函数。但使用组合式函数会让 SSR 变得更加复杂。",
    "Setup store 也可以依赖于全局提供的属性，比如路由。任何应用层面提供的属性都可以在 store 中使用 inject() 访问，就像在组件中一样",
  ],
};
const emit = defineEmits(["send-data"]);
onMounted(() => {
  emit("send-data", decretion);
});
</script>

<style lang="scss" scoped>
</style>
