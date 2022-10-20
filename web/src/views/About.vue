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
              1995.12.31日生まれ 愛知出身。<br />
              本業はゲームプログラマ―。家庭用ゲームソフトの開発やモバイル向けのソーシャルゲーム開発など経験。<br />
              モノづくりが好きで、趣味でもプログラミングをしたりDTM作曲やイラストを描いたりしている。<br />
              愛する言語は「C++」。<br />
              アイコンのキャラクターは、うちのこの「まほうくん」。
            </p>
            <div class="profile-right-down">
              <div class="profile-right-down-1">
                <h3>HOBBY!!</h3>
                <p class="text">創作活動 ゲーム アニメ サイクリング パン作り など</p>
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
              <li v-for="item in skills">
                <skillicon :category="item.category" :level="item.level">
                  {{item.name}}
                </skillicon>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h2>MISSION</h2>
      <div class="mission">
        <mymission class="word"/>
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
import skillicon from "@/components/SkillIcon.vue";
import skillsets from "@/views/data/skillsets";
import mottocode from "@/views/data/mottocode";
import mymission from "@/components/home/MyMission.vue";

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
  components: {
    myheader,
    foot,
    mycode,
    serviceicon,
    skillicon,
    mymission,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/common.scss";
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

    &-down {
      &-1 {
        width: 45%;
        float: left;
        .text {
          min-height: 65px;
        }
      }
      &-2 {
        margin: 0 0 0 50%;
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
      margin:2px;
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
    width: max(50%, 500px);
  }
  .text {
    border-radius: 25px;
  }
}
.contact {
  margin-left: 50%;
  transform: translateX(-50%);
  width: max(50%, 500px);
  table {
    font-size: 25px;
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
</style>
