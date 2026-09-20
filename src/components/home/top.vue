<template>
  <div class="main">
    <div class="left">
      <div class="leftmain">
        <div class="tit">前端知识合集</div>
        <div class="sub">
          整理HTML、CSS、JavaScript、Vue等核心前端知识体系、以及自身研究的小功能
        </div>
        <div class="button">
          <div class="learn">开始学习</div>
          <div class="more">了解更多</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="nav">
        <div class="li"></div>
        <div class="li"></div>
        <div class="li"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;
  padding: px2rem(20);
  // background: $mainColor;
  display: flex;
  .left {
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 4%;
    align-items: center;
    justify-content: center;
    text-align: left;
    .leftmain {
      transform: translate(0, -50%);
      .tit {
        font-size: px2rem(36);
        width: 100%;
      }
      .sub {
        margin-top: px2rem(10);
        font-size: px2rem(20);
        width: 100%;
      }
      .button{
        margin-top: px2rem(10);
        display: flex;
        .learn,.more{
          padding: px2rem(10) px2rem(20);
          background: $mainColor;
          border-radius: 20px;
          margin-right: px2rem(10);
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
  .right {
    flex: 1;
    background: rgba($mainColor, 0.5);
  }
}
</style>
