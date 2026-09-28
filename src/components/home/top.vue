<template>
  <div class="main">
    <div class="left">
      <div class="leftmain">
        <div class="tit">前端知识合集</div>
        <div class="sub">
          整理HTML、CSS、JavaScript、Vue等核心前端知识体系、以及自身研究的小功能
        </div>
        <div class="button">
          <RouterLink class="learn" to="/vue"><span>开始学习</span></RouterLink>
          <div class="more"><span>了解更多</span></div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="nav">
        <div class="li">
          <i class="iconfont">&#xe87d;</i>
          <div class="tit">HTML</div>
          <div class="sub">标签及渲染</div>
        </div>
        <div class="li">
          <i class="iconfont">&#xe63b;</i>
          <div class="tit">CSS</div>
          <div class="sub">样式及特效</div>
        </div>
        <div class="li">
          <i class="iconfont">&#xec68;</i>
          <div class="tit">JavaScript</div>
          <div class="sub">JS及ES知识</div>
        </div>
        <div class="li">
          <i class="iconfont">&#xe69a;</i>
          <div class="tit">Vue</div>
          <div class="sub">API、原理、扩展</div>
        </div>
      </div>
      <div class="bottom">
        <div class="li"><span>页面结构</span></div>
        <div class="li"><span>视觉效果</span></div>
        <div class="li"><span>交互逻辑</span></div>
        <div class="li"><span>功能实现</span></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
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
    width: 35%;
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
      .button {
        margin-top: px2rem(10);
        display: flex;
        .learn,
        .more {
          padding: px2rem(10) px2rem(20);
          background: $mainColor;
          border-radius: 20px;
          border: 2px solid $mainColor;
          margin-right: px2rem(10);
          color: #fff;
          cursor: pointer;
          transition: all 0.3s;
          overflow: hidden;
          position: relative;
          span {
            position: relative;
            z-index: 1;
            cursor: pointer;
          }
        }
        .learn::before {
          content: "";
          position: absolute;
          height: 100%;
          width: 0;
          top: 0;
          left: 0;
          background: #fff;
          transition: 0.3s;
          border-radius: 20px;
        }
        .more {
          background: #fff;
          color: $mainColor;
        }
        .more:hover {
          background: $mainColor;
          color: #fff;
        }
        .learn:hover {
          // background: #fff;
          color: $mainColor;
          &::before {
            width: 100%;
          }
        }
      }
    }
  }
  .right {
    flex: 1;
    position: relative;
    overflow: hidden;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 px2rem(40);
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 0;
      background-image: radial-gradient(
          circle at 90% 85%,
          $sub 0%,
          transparent 80%
        ),
        radial-gradient(circle at 10% 15%, #fff 0%, transparent 100%);
      filter: blur(100px);
      opacity: 0.85;
    }
    .nav {
      z-index: 1;
      display: flex;
      justify-content: space-between;
      width: 100%;
      .li {
        $limargin: px2rem(30);
        padding: px2rem(40) px2rem(20);
        width: calc(100% / 4 - 2 * $limargin);
        height: px2rem(300);
        border-radius: 20px;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin:0 $limargin;
        transition: all 0.5s;
        cursor: pointer;
        position: relative;
        flex-shrink: 0;
        overflow: hidden;
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: px2rem(20);
          height: px2rem(20);
          background: $sub;
          border-radius: 50%;
          z-index: 1;
          transition: all 0.5s;
        }
        &:hover {
          transform: translate(0, -10%);
          &::before {
            width: 100%;
            height: 100%;
            border-radius: 20px;
          }
          i,
          .tit,
          .sub {
            color: #fff;
          }
        }
        i,
        .tit,
        .sub {
          cursor: pointer;
          margin-bottom: px2rem(10);
          z-index: 1;
          transition: all 0.5s;
        }
        i {
          font-size: px2rem(54);
          color: $sub;
        }
        .tit {
          font-size: px2rem(28);
        }
        .sub {
          font-size: px2rem(20);
        }
      }
    }
    .bottom {
      height: px2rem(250);
      margin: px2rem(40) 0;
      width: 100%;
      z-index: 2;
      position: relative;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        // inset: -10px;
        top: -5px;
        left: -5px;
        border-radius: 20px;
        z-index: -2;
        background: $sub;
      }
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 20px;
        z-index: -1;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 1);
      }
      .li{
        padding: px2rem(20) px2rem(40);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        border-radius: 20px;
        margin-right: px2rem(20);
        font-size: px2rem(20);
        position: relative;
        overflow: hidden;
        cursor: pointer;
        &::before{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: $sub;
          border-radius: 20px;
          z-index: 0;
          transition: all 0.5s;
        }
        span{
          position: relative;
          z-index: 1;
          transition: all 0.5s;
          cursor: pointer;
        }
        &:hover{
          &::before{
            width: 100%;
          }
          span{
            color: #fff;
          }
        }
        &:last-child{
          margin-right: 0;
        }
      }
    }
  }
  @media (max-width:1600px) {
    .right{
      .nav{
        .li{
          $limargin1600: px2rem(20);
          width: calc(100% / 4 - 2 * $limargin1600);
          margin:0 $limargin1600;
        }
      }
    }
      
    }
    @media (max-width:1280px){

    }
    @media (max-width:960px){
      flex-direction: column;
      height: auto;
      .left{
        height: auto;
        width: auto;
        padding: px2rem(20) 0 px2rem(10) 0;
        .leftmain{
          transform: translate(0, 0);
        }
      }
      .right{
        padding: 0;
        padding-top: px2rem(30);
        overflow: initial;
        &::before{
          display: none;
        }
        .nav{
          flex-wrap: wrap;
          background: rgba($sub,0.6);
          border-radius: 20px;
          box-shadow: 0 0 10px rgba(#000,0.4);
          .li{
            $limargin960: px2rem(10);
            width: calc(100% / 2 - $limargin960*2);
            margin: $limargin960;
            box-shadow: 0 0 10px rgba(#000,0.4);
            padding: px2rem(20);
            height: auto;
            &:first-child{
              margin-left: $limargin960;
            }
            &:last-child{
              margin-right: $limargin960;
            }
            i{
              margin-bottom: 0;
            }
            .tit,.sub{
              display: none;
            }
          }
        }
        .bottom{
          height: auto;
          flex-wrap: wrap;
          padding: px2rem(20);
          justify-content: space-between;
          .li{
            margin-top: px2rem(10);
            margin-right: 0;
            padding: px2rem(20);
            width: calc(100% / 2 - px2rem(20)/2);
            &:nth-child(1),&:nth-child(2){
              margin-top: 0;
            }
            span{
              width: 100%;
              font-size: px2rem(24);
              text-align: center;
              display: block;
            }
          }
        }
      }
    }
}
</style>
