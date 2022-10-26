<template>
  <myheader current="0" />
  <div class="main">
    <header class="home-header">
      <div class="header-container">
        <div class="profile">
          <div class="profile-right">
            <div class="profile-right-wrap">
              <mylink url="/about">
                <div class="profile-icon">
                  <img src="../assets/commons/avatar.png" width="200" />
                </div>
              </mylink>
              <div class="profile-text">
                <h3>TYANMAHOU</h3>
                <span>GAME PROGRAMMER</span>
              </div>
            </div>
          </div>
          <div class="profile-left">
            <h1>MISSION</h1>
            <mymission class="word" />
          </div>
        </div>
      </div>
    </header>
    <div class="home-container-outer">
      <div class="home-container">
        <div class="main-container">
          <h2>NEWS</h2>
          <div class="contents-wrap">
            <news />
            <div class="changelog">
              <modal id="modal-changelog">
                <template #title> 更新履歴 </template>
                <template #contents>
                  <changelog />
                </template>
              </modal>
            </div>
          </div>
          <h2>WORKS</h2>
          <div class="contents-wrap">
            <ul class="works">
              <li>
                <h3>GAME</h3>
                <img class="icon" src="@/assets/home/icon/mahou.png" width="64">
                <div class="text">
                  <workgame />
                </div>
              </li>
              <li>
                <h3>Illust</h3>
                <img class="icon" src="@/assets/home/icon/mahou2.png" width="64">
                <div class="text">
                  <workillust />
                </div>
              </li>
              <li>
                <h3>MUSIC</h3>
                <img class="icon" src="@/assets/home/icon/mahou3.png" width="64">
                <div class="text">
                  <workmusic width="250" />
                </div>
              </li>
            </ul>
            <span class="and-more">
              <mylink url="/works">
                AND MORE...
              </mylink><img class="icon" src="@/assets/home/icon/slime.png" width="64">
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <foot />
</template>

<script>
import myheader from "@/components/Header.vue";
import foot from "@/components/Foot.vue";
import mylink from "@/components/Link.vue";
import modal from "@/components/Modal.vue";
import news from "@/components/home/News.vue";
import changelog from "@/components/home/ChangeLog.vue";
import mymission from "@/components/home/MyMission.vue";
import workgame from "@/components/home/WorkGame.vue";
import workillust from "@/components/home/WorkIllust.vue";
import workmusic from "@/components/home/WorkMusic.vue";

export default {
  name: "home-view",
  data() {
    return {
    };
  },
  components: {
    myheader,
    foot,
    mylink,
    modal,
    news,
    changelog,
    mymission,
    workgame,
    workillust,
    workmusic,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/common.scss";
$fix-height: 480px;
$bg-height: min(100vh, 1000px);
.header-container {
  position: fixed;
  padding: 0 0 0 0;
  min-width: $layout-min-width;
  width: 100%;
  @media only screen and (max-width: $layout-min-width), (max-height: $fix-height) {

    position: relative;
    padding: 0 0;
    min-width: initial;
  }

  color: $color-text-light;
}

.home-header {
  width: 100%;
  height: $bg-height;

  @media only screen and (max-width: $layout-min-width), (max-height: $fix-height) {
    height: 100%;
  }

  position: relative;
}

.home-header:before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: $bg-height;
  background: url("../assets/commons/home_top.jpg") no-repeat center;
  background-size: cover;
}

.profile {
  position: relative;
  transform: translateY(max(30px, calc(-20px + $bg-height * 0.4 - 50%)));
  $margin-left: layout-px-lerp(20, 100);
  margin: 0 0 0 $margin-left;
  width: calc(max($layout-min-width, 100%) - ($margin-left + 40));
  padding: 20px;
  background: #00000080;
  @media only screen and (max-height: $fix-height) {
    top: 30px;
    margin-bottom: 40px;
    transform: initial;    
  }  
  @media only screen and (max-width: $layout-min-width) {
    top:0;
    transform: initial;
    margin: 0;
    margin-top: -20px;
    width: 100%;
    padding-right: 0;
    padding-left: 0;
  }

  @media only screen and (max-width: $layout-mobile) {
    margin-top: 10px;
    width: 100vw;
  }

  &-right {
    position: absolute;
    top: 0;
    bottom: 0;
    right: layout-px-lerp(50, 200);
    text-align: center;

    @media only screen and (max-width: $layout-min-width) {
      position: relative;
      right: initial;
      width: 100%;
    }

    &-wrap {
      position: relative;
      top: 50%;
      transform: translateY(-50%);

      @media only screen and (max-width: $layout-min-width) {
        transform: initial;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
      }
    }

    .profile-icon {
      margin: auto;
      background: #fffafa;
      min-width: 200px;
      width: 200px;
      min-height: 200px;
      height: 200px;
      border-radius: 100px;
      overflow: hidden;

      transition: all 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }

    .profile-text {
      margin: 10px 0 0 0;
      background: #00000080;
    }
  }

  &-left {
    width: layout-px-lerp(500, 850);

    @media only screen and (max-width: $layout-min-width) {
      padding: 20px;
      width: calc(100% - 40px);
    }

    h1 {
      text-decoration: underline;

      @media only screen and (max-width: $layout-mobile) {
        font-size: 25px;
      }
    }

    .word {
      padding: 50px 0 60px 40px;
      font-size: 2.5em;

      @media only screen and (max-width: $layout-min-width) {
        font-size: 2.3em;
      }

      @media only screen and (max-width: $layout-mobile) {
        padding: 20px 30px;
        font-size: 100%;
      }
    }
  }
}

.home-container-outer {
  position: relative;
  z-index: 1;
  background: #f5f5dc;
  margin: -120px 0 0 0;
  padding: 40px 0 0 0;
  @media only screen and (max-width: $layout-min-width), (max-height: $fix-height) {
    margin: 0px 0 0 0;
  }
}

.home-container {
  background: #f5f5dc;
  margin: 0 0 -20px 0;
}

:deep(.changelog) {
  font-weight: bold;
  display: inline-block;

  a {
    display: block;
    padding: 0 10px;
    text-decoration: none;
    color: #2e8b57;

    /*線の基点とするためrelativeを指定*/
    position: relative;
  }

  a::after {
    content: "";
    /*絶対配置で線の位置を決める*/
    position: absolute;
    bottom: 0;
    left: 10%;
    /*線の形状*/
    width: 80%;
    height: 2px;
    background: #2e8b57;
    /*アニメーションの指定*/
    transition: all 0.3s;
    transform: scale(0, 1);
    /*X方向0、Y方向1*/
    transform-origin: center top;
    /*上部中央基点*/
  }

  /*現在地とhoverの設定*/
  &.current a::after,
  a:hover::after {
    transform: scale(1, 1);
    /*X方向にスケール拡大*/
  }
}

ul.works {
  list-style: none;
  text-align: initial;
  position: relative;

  &>li {
    width: 70%;

    @media only screen and (max-width: $layout-min-width) {
      width: min(450px, 100%);
    }

    &:nth-child(1) {
      margin-top: 0;
    }

    &:nth-child(odd) {
      margin-left: 5%;

      @media only screen and (max-width: $layout-min-width) {
        margin-left: 0%;
      }
    }

    &:nth-child(even) {
      margin-left: 100% - 70 - 5;

      @media only screen and (max-width: $layout-min-width) {
        margin-left: calc(100% - min(450px, 100%));
      }
    }
  }

  h3 {
    font-size: 40px;
  }

  .icon {
    position: relative;
    top: 15px;
  }

  .text {
    margin: 0 20px;
    text-align: center;

    @media only screen and (max-width: $layout-mobile) {
      all:initial;
    }

    @media only screen and (max-width: $layout-min-width) {
      img {
        width: 100%;
      }
    }
  }

}

.and-more {
  font-weight: bold;
  display: inline-block;

  margin: 20px 0 0 0;
  font-size: 40px;

  a {
    display: block;
    padding: 0 10px;
    text-decoration: none;
    color: #2e8b57;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 10%;
      width: 80%;
      height: 4px;
      background: #2e8b57;
      transition: all 0.3s;
      transform: scale(0, 1);
      transform-origin: center top;
    }

    &:hover::after {
      transform: scale(1, 1);
    }
  }

}
</style>
