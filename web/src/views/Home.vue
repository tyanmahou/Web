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
          <p>
            <span class="big2"
              ><ruby>創作活動<rt>モノづくり</rt></ruby></span
            >で
            <span class="big"
              ><ruby>世界<rt>せかい</rt></ruby></span
            >をつくる
          </p>
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
                <changelog/>
                </template>
              </modal>         
            </div>
          </div>
          <h2>WORKS</h2>
          <div class="contents-wrap">Comming Soon</div>
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
import news from "@/components/News.vue"
import changelog from "@/components/ChangeLog.vue";
export default {
  name: "home-view",
  data() {
    return {};
  },
  components: {
    myheader,
    foot,
    mylink,
    modal,
    news,
    changelog,
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
  p {
    padding: 50px 0 60px 40px;
    font-size: 2.5em;

    span.big {
      font-size: 2em;
    }
    span.big2 {
      padding: 0 0 0 0px;
      font-size: 2em;
    }
  }
  rt {
    font-size: 0.3em;
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

.changelog::v-deep {
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
</style>