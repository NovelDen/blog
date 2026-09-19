<template>
  <div class="testmain">
    <pre>
      function c() {
        var b = 1;
        function a() {
          console.log(b);
          var b = 2;
          console.log(b);
        }
        a();
        console.log(b);
      }
      c();
      
      undefined
      2
      1
    </pre>
  </div>
</template>

<script setup>
import { defineEmits, onMounted } from "vue";

function c() {
  var b = 1;
  function a() {
    console.log(b);
    var b = 2;
    console.log(b);
  }
  a();
  console.log(b);
}
c();

// test描述
import decretion from "./js02.json";
const emit = defineEmits(["send-data"]);
onMounted(() => {
  emit("send-data", decretion);
});
</script>

<style lang="scss" scoped>
</style>