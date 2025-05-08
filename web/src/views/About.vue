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
            <span class="name">TYANMAHOU</span> <span class="aka">a.k.a mahou</span>
            <p class="text">
              本業はゲームプログラマ―。家庭用ゲームソフトの開発やモバイル向けのソーシャルゲーム開発など経験。<br />
              モノづくりが好きで、趣味でもプログラミングをしたりDTM作曲やイラストを描いたりしている。<br />
              愛する言語は「C++」。<br />
              アイコンのキャラクターは、うちのこの「まほうくん」。
            </p>
            <div class="profile-right-down">
              <div class="profile-right-down-1">
                <h3>HOBBY!!</h3>
                <p class="text">創作活動 ゲーム アニメ サイクリング など</p>
              </div>

              <div class="profile-right-down-2">
                <h3>MOTTO CODE</h3>
                <mycode opt="lang-cpp">{{ mottocode }}</mycode>
              </div>

              <div class="account">
                <h3>SERVICE ACCOUNT</h3>
                <ul class="service">
                  <li v-for="item in services">
                    <serviceicon :url="item.url" :icon="item.icon" :width="40" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="skill">
          <h2>SKILL</h2>
          <div>
            <ul>
              <li v-for="item in filteredSkills">
                <skillicon :name="item.name" :level="item.level" />
              </li>
            </ul>
          </div>
          <hr>
          <div class="skillgraph">
            <mymodal>
              <template #title>詳細スキルグラフ</template>
                <template #contents>
                  <skillgraph/>
                </template>
            </mymodal>
          </div>
        </div>
      </div>
      <h2>MISSION</h2>
      <div class="mission">
        <mymission class="word" />
        <div class="what">
          <h3>WHAT?</h3>
          <p class="text">
            さっき考えたスローガン。創作活動を通して実現したいこと。<br />
            自分の中にある「世界」を作品を通して表現していきたい。
          </p>
        </div>
      </div>
      <h2>CONTACT</h2>
      <div class="contact">
        <table v-for="(item, index) in contacts" :key="item.title">
          <tr>
            <th>{{ item.title }}</th>
            <td>：</td>
            <td>
              <a :href="item.url" :target="item.mail ? '' : '_blank'">
                {{ item.name }}
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <foot />
</template>

<script>
import myheader from "@/components/Header.vue";
import foot from "@/components/Foot.vue";
import mycode from "@/components/Code.vue";
import serviceicon from "@/components/ServiceIcon.vue";
import skillicon from "@/components/SkillIconAutoCategory.vue";
import skillsets from "@/data/skillsets";
import mottocode from "@/data/mottocode";
import mymission from "@/components/home/MyMission.vue";
import mymodal from "@/components/Modal.vue";
import skillgraph from "@/components/about/SkillGraph.vue";

export default {
  name: "AboutView",
  data() {
    return {
      mottocode: mottocode,
      services: [
        {
          url: "https://twitter.com/tyanmahou",
          icon: "web/twitter.png",
        },
        {
          url: "https://github.com/tyanmahou",
          icon: "web/github.png",
        },
        {
          url: "https://qiita.com/tyanmahou",
          icon: "web/qiita.png",
        },
        {
          url: "https://www.pixiv.net/users/15137779",
          icon: "web/pixiv.png",
        },
        {
          url: "https://soundcloud.com/tyanmahou",
          icon: "web/soundcloud.png",
        },
        {
          url: "https://www.youtube.com/user/tyanmahou",
          icon: "web/youtube.png",
        },
        {
          url: "https://speakerdeck.com/tyanmahou",
          icon: "web/speakerdeck.png",
        },
      ],
      contacts: [
        {
          title: "Twitter",
          name: "@tyanmahou",
          url: "https://twitter.com/tyanmahou",
        },
        {
          title: "Gmail",
          name: "tyanmahou@gmail.com",
          url: "mailto:tyanmahou@gmail.com?subject=件名",
          mail: true,
        },
      ],
      skills: skillsets,
    };
  },
  computed: {
    filteredSkills() {
      return this.skills
      .filter(skill => skill.level >= 3)
      .sort((a, b) => b.level - a.level);
    },
  },  
  components: {
    myheader,
    foot,
    mycode,
    serviceicon,
    skillicon,
    mymission,
    mymodal,
    skillgraph,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/common";

.profile {
  position: relative;
  display: block;
  text-align: initial;
  padding: 20px;

  &-left {
    width: 300px;
    position: absolute;
    top: 0;
    bottom: 0;

    @media only screen and (max-width: $layout-mid-width) {
      position: relative;
      width: 100%;
    }
  }

  &-right {
    margin: 0 0 0 300px;

    @media only screen and (max-width: $layout-mid-width) {
      margin: 0;
    }

    &-down {
      &-1 {
        width: 45%;
        float: left;

        @media only screen and (max-width: $layout-mid-width) {
          width: 100%;
          float: none;
        }

        .text {
          min-height: 65px;
        }
      }

      &-2 {
        margin: 0 0 0 50%;

        @media only screen and (max-width: $layout-mid-width) {
          margin: 0;
          float: none;
        }
      }
    }
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

    @media only screen and (max-width: $layout-mid-width) {
      position: relative;
      top: initial;
      left: initial;
      transform: translate(0%, 0%);
    }
  }

  span {
    &.name {
      font-size: 60px;
      padding: 10px 0 0 0;

    
      @media only screen and (max-width: $layout-mobile) {
        text-align: center;
        display: block;
        font-size: 40px;
      }       
    }

    &.aka {
      font-size: 30px;
      padding: 10px 0 0 0;

      @media only screen and (max-width: $layout-mobile) {
        text-align: center;
        display: block;
        font-size: 25px;
        margin-top: -20px;
      }        
    }
  }
}

.account {
  ul.service {
    list-style: none;

    li {
      display: inline-block;
      margin: 0 2px;

      transition: all 0.3s;

      &:hover {
        transform: scale(0.9);
      }
    }
  }
}

.skill {
  ul {
    padding: 20px 0;
    list-style: none;

    li {
      margin: 2px;
      display: inline-block;
    }
  }
}

.mission {
  padding: 20px;

  .word {
    padding: 0;
    font-size: 2em;
  }

  .what {
    text-align: initial;
    margin-left: 50%;
    transform: translateX(-50%);
    width: min(100%, max(50%, 500px));
  }
}

.contact {
  margin-left: 50%;
  transform: translateX(-50%);
  width: min(100%, max(50%, 500px));

  table {
    font-size: 25px;
    @media only screen and (max-width: $layout-mobile) {
      font-size: 20px;
    }
    th {
      text-align: left;
      width: 100px;
    }

    td {
      text-align: left;
    }

    @include normal-link;
  }
}

:deep(.skillgraph) {
  margin: 10px 0;
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
