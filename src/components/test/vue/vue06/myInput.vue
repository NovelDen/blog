<template>
  <!-- 透传属性、事件给底层el-input -->
  <!-- <pre>{{ $slots }}</pre> -->
  
  <div class="child">
    <el-input v-bind="$attrs" :clearable="clearable" >
    <!-- <el-input :clearable="clearable"> -->
      <template v-for="(slot, name) in $slots" #[name]="scopeData">
        <slot :name="name" v-bind="scopeData"></slot>
      </template>
    </el-input>
  </div>
</template>
<script setup>
import { defineProps, ref, useAttrs, useSlots } from "vue";

const attrs = useAttrs();
const slots = useSlots();
console.log("attrs对象", attrs);
console.log("slots对象", slots);
const props = defineProps({
  clearable: {
    type: Boolean,
    default: true, //项目默认全部带清除按钮
  },
});
</script>