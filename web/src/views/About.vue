<template>
  <myheader current="4" />
  <div class="main">
    <div class="main-container">
      <h1>ABOUT</h1>
      <div>
        <h2>PROFILE</h2>
        <div class="profile">
          <div class="profile-left">
            <div class="profile-icon">
              <img src="../assets/commons/avatar.png" width="200" />
            </div>
          </div>
          <div class="profile-right">
            <span class="name">TYANMAHOU</span> <span class="aka">a.k.a マホウ</span>
            <p class="text">
              1995.12.31日生まれ 愛知出身<br />
              本業はゲームプログラマ―。家庭用ゲームソフトの開発からモバイル向けのソーシャルゲーム開発など経験。<br />
              モノづくりが好きで、趣味でもプログラミングをしたりDTM作曲やイラストを描いたりしている。<br />
              愛する言語は「C++」<br />
              アイコンのキャラクターは、うちのこの「まほうくん」
            </p>
            <h4>HOBBY!!</h4>
            <p class="text">創作活動 ゲーム アニメ サイクリング パン作り など</p>
            <h4>MOTTO CODE</h4>
            <mycode opt="lang-cpp">{{ mottocode }}</mycode>
          </div>
        </div>
      </div>
      <div>
        <h2>SKILL</h2>
        <div></div>
      </div>
      <h2>MISSION</h2>
      <div></div>
      <h2>CONTACT</h2>
      <div></div>
    </div>
  </div>
  <foot />
</template>

<script>
import myheader from "@/components/Header.vue";
import foot from "@/components/Foot.vue";
import mycode from "@/components/Code.vue";

export default {
  name: "about-view",
  data() {
    return {
      mottocode: `int main()
{
    constexpr I am = "C++"_er;
    constexpr I like = C++;
    constexpr I love = C++;
}`,
    };
  },
  components: {
    myheader,
    foot,
    mycode,
  },
};
</script>

<style lang="scss" scoped>
h4 {
  font-size: 24px;
  display: inline-block;
  padding: 0 5px 0 0;
  margin: 10px 0 -10px 0;
  background: linear-gradient(transparent 70%, #8eae8e 70%);
}
.profile {
  position: relative;
  display: block;
  text-align: initial;
  padding: 20px;
  &-left {
    position: relative;
    float: left;
    width: 300px;

    position: absolute;
    top: 0;
    bottom: 0;
  }
  &-right {
    margin: 0 0 0 300px;
  }
  &-icon {
    margin: auto;
    background: #fffafa;
    min-width: 200px;
    width: 200px;
    min-height: 200px;
    height: 200px;
    border-radius: 100px;
    overflow: hidden;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  span.name {
    font-size: 60px;
    padding: 10px 0 0 0;
  }
  span.aka {
    font-size: 30px;
    padding: 10px 0 0 0;
  }

  .text {
    border-radius: 25px;
  }
}
</style>
