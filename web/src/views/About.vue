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
                <h4>HOBBY!!</h4>
                <p class="text">創作活動 ゲーム アニメ サイクリング パン作り など</p>
              </div>

              <div class="profile-right-down-2">
                <h4>MOTTO CODE</h4>
                <mycode opt="lang-cpp">{{ mottocode }}</mycode>
              </div>

              <div class="account">
                <h4>SERVICE ACCOUNT</h4>
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
        <p class="main">
          <span class="big2"
            ><ruby>創作活動<rt>モノづくり</rt></ruby></span
          >で
          <span class="big"
            ><ruby>世界<rt>せかい</rt></ruby></span
          >をつくる
        </p>
        <div class="what">
          <h4>WHAT?</h4>
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

export default {
  name: "AboutView",
  data() {
    return {
      mottocode: `int main()
{
    constexpr I am = "C++"_er;
    constexpr I like = C++;
    constexpr I love = C++;
}`,
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
      skills: [
        // 5: 得意
        // 4: 業務使いできる
        // 3: 普段使いできる
        // 2: 何かしら自分で作ってる
        // 1: かじったことある
        {
          name:"C++", category:"lang", level:5
        },
        {
          name:"C", category:"lang", level:2
        },        
        {
          name:"DirectX", category:"framework", level:2
        },
        {
          name:"Windows API", category:"framework", level:2
        },
        {
          name:"Siv3D", category:"framework", level:5
        },
        {
          name:"HLSL", category:"lang", level:3
        },
        {
          name:"C#", category:"lang", level:4
        },
        {
          name:"Unity", category:"framework", level:3
        },
        {
          name:"GLSL", category:"lang", level:2
        },        
        {
          name:"Visual Studio", category:"tool", level:4
        },
        {
          name:"VS Code", category:"tool", level:3
        },
        {
          name:"Git", category:"system", level:4
        },
        {
          name:"GitHub", category:"service", level:4
        },
        {
          name:"SVN", category:"system", level:3
        },
        {
          name:"Docker", category:"system", level:3
        },    
        {
          name:"Vagrant", category:"system", level:1
        },             
        {
          name:"PHP", category:"lang", level:4
        },
        {
          name:"Phalcon", category:"framework", level:1
        },
        {
          name:"Laravel", category:"framework", level:1
        },
        {
          name:"Zephir", category:"lang", level:1
        },        
        {
          name:"IntelliJ", category:"tool", level:3
        },   
        {
          name:"SQL", category:"lang", level:4
        },             
        {
          name:"MySQL", category:"system", level:3
        },
        {
          name:"SQLite", category:"system", level:3
        },
        {
          name:"Redis", category:"system", level:2
        },
        {
          name:"AWS", category:"service", level:1
        },
        {
          name:"CircleCI", category:"service", level:2
        },
        {
          name:"HTML", category:"lang", level:3
        },
        {
          name:"css", category:"lang", level:3
        },
        {
          name:"sass", category:"lang", level:3
        },
        {
          name:"JavaScript", category:"lang", level:3
        },
        {
          name:"Vue.js", category:"framework", level:3
        },
        {
          name:"Go", category:"lang", level:2
        },
        {
          name:"Java", category:"lang", level:3
        },
        {
          name:"Android Studio", category:"tool", level:2
        },
        {
          name:"cocos2d-x", category:"framework", level:1
        },            
        {
          name:"XCode", category:"tool", level:2
        },            
        {
          name:"CocosCreater", category:"framework", level:2
        },
        {
          name:"Microsoft 365", category:"tool", level:3
        },       
        {
          name:"MATLAB", category:"lang", level:1
        },                  
        {
          name:"Prolog", category:"lang", level:1
        },
        {
          name:"Perl", category:"lang", level:1
        },         
      ],
    };
  },
  components: {
    myheader,
    foot,
    mycode,
    serviceicon,
    skillicon,
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
  p.main {
    padding: 0;
    font-size: 2em;

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
