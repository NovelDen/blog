<template>
  <div class="testmain">
    <div class="input">自动聚焦：<input v-focus /></div>
    <div class="content" v-click-outside="closeDropdown">
      <div class="tit">下拉内容</div>
      <div class="main">
        <div class="li">内容1</div>
        <div class="li">内容2</div>
      </div>
    </div>
    <div class="Drag" v-Draggable>拖拽内容</div>
  </div>
</template>

<script setup>
import { defineEmits, onMounted } from "vue";
//自动聚焦
const vFocus = { mounted: (el) => el.focus() };
//点击外部关闭
const vClickOutside = {
  mounted(el, binding) {
    el._clickOutside = (e) => {
      if (!el.contains(e.target))
        binding.value(
          el
        ); //binding.value(el)绑定的是自定义指令后的closeDropdown方法
      else if (el.classList.contains("close")) el.classList.remove("close");
    };
    document.addEventListener("click", el._clickOutside);
  },
  unmounted(el) {
    document.removeEventListener("click", el._clickOutside);
  },
};
const closeDropdown = (el) => {
  el.classList.add("close");
};

// 权限控制:根据用户角色/权限，无权限时隐藏或禁用元素。
const vPermission = {
  mounted(el, binding) {
    if (!hasPermission(binding.value)) {
      el.parentNode?.removeChild(el); // 或者 el.style.display = 'none'
    }
  },
};

// 输入框格式化:自动格式化手机号、银行卡号、金额等。
const vPhoneFormat = {
  mounted(el) {
    el.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\D/g, "");
      val = val.replace(/(\d{3})(?=\d)/g, "$1 ");
      e.target.value = val;
    });
  },
};

// 拖拽:让元素可拖拽移动。
const vDraggable = {
  mounted(el) {
    el.style.position = "absolute";
    el.onmousedown = (e) => {
      const disX = e.clientX - el.offsetLeft;
      const disY = e.clientY - el.offsetTop;
      document.onmousemove = (e) => {
        el.style.left = e.clientX - disX + "px";
        el.style.top = e.clientY - disY + "px";
      };
      document.onmouseup = () => {
        document.onmousemove = document.onmouseup = null;
      };
    };
  },
};

// 图片懒加载:图片进入视口才加载，节省带宽。
const vLazy = {
  mounted(el, binding) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.src = binding.value;
        observer.disconnect();
      }
    });
    observer.observe(el);
  },
};

// test描述
import decretion from "./vue04.json";
const emit = defineEmits(["send-data"]);
onMounted(() => {
  emit("send-data", decretion);
});
</script>

<style lang="scss" scoped>
.content {
  border: 1px solid #000;
  margin-top: 10px;
  padding: 10px;
  border-radius: 20px;
  width: fit-content;
  &.close {
    .main {
      display: none;
    }
  }
  .main {
    border: 1px solid #000;
    margin-top: 10px;
    padding: 10px;
    border-radius: 20px;
    width: fit-content;
  }
}
.Drag {
  border: 1px solid #000;
  margin-top: 10px;
  padding: 10px;
  border-radius: 20px;
  width: fit-content;
  cursor: pointer;
}
</style>