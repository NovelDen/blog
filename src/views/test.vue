<template>
  <div class="test"><RouterView> </RouterView></div>
</template>

<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
</script>

<style lang="scss" scoped>
.test {
  padding: 10px 20px;
}
</style>

