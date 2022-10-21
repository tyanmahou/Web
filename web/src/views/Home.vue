<template>
  <myheader current="0" />
  <div class="main">
    <header class="home-header">
      <div class="header-container">
        <div class="profile">
          <div class="profile-core">
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
        <div class="mission">
          <h1>MISSION</h1>
          <mymission class="word"/>
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
                <img src="https://colorfultone.tyanmahou.com/web/img/slide/Screenshot1.png" width="400">
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
            <span>
            <mylink url="/works">
            AND MORE...
            </mylink>
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
    workillust,
    workmusic,
  },
};
</script>
<style lang="scss" scoped>
.header-container {
  position: fixed;

  padding: 100px 0 0 0;
  width: 100%;
  color: #ffffff;
}
.home-header {
  width: 100%;
  height: 100vh;
  position: relative;
}

.home-header:before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background: url("../assets/commons/home_top.jpg") no-repeat center;
  background-size: cover;
}

.profile {
  display: flex;
  justify-content: flex-end;
  text-align: center;
  padding: 20px 200px 0 0;
  margin: 0 0;
  float: right;
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

.mission {
  margin: 0 0 0 100px;
  padding: 20px;
  background: #00000080;
  h1 {
    text-decoration: underline;
  }
  .word {
    padding: 50px 0 60px 40px;
    font-size: 2.5em;    
  }
}
.home-container-outer {
  position: relative;
  z-index: 1;
  background: #f5f5dc;
  margin: -120px 0 0 0;
  padding: 40px 0 0 0;
}
.home-container {
  background: #f5f5dc;
  margin: 0 0 -20px 0;
}

.changelog :deep() {
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
  & > li {
    width: 70%;
    &:nth-child(1) {
      margin-top: 0;
    }
    &:nth-child(odd) {
      margin-left: 5%;
    }
    &:nth-child(even) {
      margin-left: 100% - 70 - 5;
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
    border-radius: 25px;
    text-align: center;
  }
}
</style>
