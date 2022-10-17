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
        <div class="catch-copy">
          <h1>MISSION</h1>
          <p>
            <span class="big2"
              ><ruby>創作活動<rt>モノづくり</rt></ruby></span
            >で
            <span class="big"
              ><ruby>世界<rt>せかい</rt></ruby></span
            >つくる
          </p>
        </div>
      </div>
    </header>
    <div class="home-container-outer">
      <div class="home-container">
        <div class="main-container">
          <h2>NEWS</h2>
          <div class="news-contents">
            <ul class="news">
              <li>
                <span class="date">2022.10.17</span>
                <h3>ホームページリニューアル！</h3>
                <div class="text">
                  ホームページをリニューアルしました。<br />
                  今後ともよろしくお願いいたします。
                </div>
              </li>
              <li>
                <span class="date">2020.11.16</span>
                <h3>LINEスタンプ販売開始</h3>
                <div class="text">ああああああ</div>
              </li>
              <li>
                <span class="date">2020.7.23</span>
                <h3>ColorfulTone v3.1.0 リリース</h3>
                <div class="text">ああああああ</div>
              </li>
            </ul>
            <div class="update-history">過去の更新を見る</div>
          </div>
          <h2>WORKS</h2>
          <div class="news-contents">
          Comming Soon
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
export default {
  name: "home-view",
  data() {
    return {};
  },
  components: {
    myheader,
    foot,
    mylink
  },
};
</script>

<style lang="scss">
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

.catch-copy {
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
  margin: -160px 0 0 0;
  padding: 40px 0 0 0;
}
.home-container {
  background: #f5f5dc;
  margin: 0 0 -20px 0;
}
</style>
