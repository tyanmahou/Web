<template>
  <h2>GAME</h2>
  <div class="contents-wrap" id="game-wrap">
    <ul id="game-ul">
      <li v-for="item in game">
        <mymodel>
          <template #title>
            <mycaption :title="item.title" :caption="item.caption">
              <div class="work">
                <img :src="item.img" width="300">
              </div>
            </mycaption>
          </template>
          <template #contents>
            <component :is="item.detail" />
          </template>
        </mymodel>
      </li>
    </ul>
  </div>
  <h2>WEB</h2>
  <div class="contents-wrap" id="web-wrap">
    <ul id="web-ul">
      <li v-for="item in web">
        <mymodel>
          <template #title>
            <mycaption :title="item.title" :caption="item.caption">
              <div class="work">
                <img :src="item.img" width="300">
              </div>
            </mycaption>
          </template>
          <template #contents>
            <component :is="item.detail" />
          </template>
        </mymodel>
      </li>
    </ul>
  </div>
  <h2>Library</h2>
  <div class="contents-wrap" id="library-wrap">
    <ul id="library-ul">
      <li v-for="item in library">
        <mylink :url="item.detail" absolute target="_blank">
          <mycaption :title="item.lang" :caption="item.caption">
            <div class="work-library">
              <img v-if="item.img" :src="item.img" width="300">
              <p v-else>{{item.title}}</p>
            </div>
          </mycaption>
        </mylink>
      </li>
    </ul>
  </div>
</template>
  
<script>
import mylink from "@/components/Link.vue"
import mymodel from "@/components/Modal.vue"
import mycaption from "@/components/FigCaption.vue"

// Game
import gamei19vsi8 from "@/components/works/program/game/i19vsi8.vue"
import gameOdinCard from "@/components/works/program/game/OdinCard.vue"
import gameTimeTravelerHohei from "@/components/works/program/game/TimeTravelerHohei.vue"
import gamePercent5 from "@/components/works/program/game/Percent5.vue"
import gameAbyssDream from "@/components/works/program/game/AbyssDream.vue"
import gameSoldGrow from "@/components/works/program/game/SoldGrow.vue"
import gameMoguMoguSTG from "@/components/works/program/game/MoguMoguSTG.vue"
import gameColorfulTone from "@/components/works/program/game/ColorfulTone.vue"

// Web
import webHomePage from "@/components/works/program/web/HomePage.vue"
import webColorfulTone from "@/components/works/program/web/ColorfulTone.vue"

export default {
  name: "Program",
  data() {
    return {
      game: [
        {
          title: "ColorfulTone",
          caption: "音楽ゲーム",
          img: require("@/assets/works/program/game/ColorfulTone/Screenshot1.png"),
          detail: gameColorfulTone,
        },
        {
          title: "【未完成】もぐもぐSTG",
          caption: "縦シューティングゲーム",
          img: require("@/assets/works/program/game/MoguMoguSTG/pic01.png"),
          detail: gameMoguMoguSTG,
        },        
        {
          title: "【未完成】SoldGrow",
          caption: "放置ゲーム",
          img: require("@/assets/works/program/game/SoldGrow/pic01.png"),
          detail: gameSoldGrow,
        },  
        {
          title: "AbyssDream",
          caption: "横スクロールアクションゲーム",
          img: require("@/assets/works/program/game/AbyssDream/pic01.png"),
          detail: gameAbyssDream,
        },         
        {
          title: "%5",
          caption: "落ちものパズルゲーム",
          img: require("@/assets/works/program/game/%5/pic01.png"),
          detail: gamePercent5,
        },               
        {
          title: "タイムトラベラー歩兵",
          caption: "縦スクロールクソゲー",
          img: require("@/assets/works/program/game/TimeTravelerHohei/pic01.png"),
          detail: gameTimeTravelerHohei,
        },        
        {
          title: "OdinCard",
          caption: "テーブルゲーム",
          img: require("@/assets/works/program/game/OdinCard/pic01.png"),
          detail: gameOdinCard,
        },
        {
          title: "伊19VS伊8",
          caption: "クソゲー",
          img: require("@/assets/works/program/game/i19vsi8/pic01.png"),
          detail: gamei19vsi8,
        },
      ],
      web: [
        {
          title: "チャンマホウのHP",
          caption: "ホームページ",
          img: require("@/assets/commons/web_logo.png"),
          detail: webHomePage,
        },
        {
          title: "ColorfulTone",
          caption: "公式サイト",
          img: require("@/assets/works/program/web/ColorfulTone/logo.png"),
          detail: webColorfulTone,
        },
      ],
      library: [
        {
          title: "Mkanta",
          lang: "C++20",
          caption: "Reflection Library",
          detail: "https://github.com/tyanmahou/Mkanta",
        },
        {
          title: "Emaject",
          lang: "C++20",
          caption: "Dependency Injection Library",
          detail: "https://github.com/tyanmahou/Emaject",
        },
        {
          title: "Magico",
          lang: "C++17",
          caption: "Concept Library",
          detail: "https://github.com/tyanmahou/Magico",
        },
        {
          title: "S3DTiled",
          lang: "C++/OpenSiv3D",
          caption: "Tiled Support",
          detail: "https://github.com/tyanmahou/S3DTiled",
        },
        {
          title: "SQLite-for-Siv3D",
          lang: "C++/OpenSiv3D",          
          caption: "SQLite Support",
          detail: "https://github.com/tyanmahou/SQLite-for-Siv3D",
        },
      ],
    };
  },
  components: {
    mylink,
    mymodel,
    mycaption,
  },
  mounted() {
    const updateContentMargin = (id) => {
      if (window.matchMedia('(max-width: 420px)').matches) {
        document.getElementById(`${id}-ul`).setAttribute("style", `margin-left: 0px`);
        return;
      }
      const width = document.getElementById(`${id}-wrap`).clientWidth - 20;
      const itemNum = Math.floor(width / 310);
      const left = (width - itemNum * 310) / 2;
      document.getElementById(`${id}-ul`).setAttribute("style", `margin-left: ${left}px`);
    };

    {
      updateContentMargin('game');
      updateContentMargin('web');
      updateContentMargin('library');
    }

    window.addEventListener('resize', () => {
      updateContentMargin('game');
      updateContentMargin('web');
      updateContentMargin('library');
    });
  }
};
</script>
  
<style lang="scss" scoped>
@import "@/scss/common";

ul {
  text-align: left;
  list-style: none;
  //transition: all .3s;

  @media only screen and (max-width: $layout-mobile) {
    text-align: center;
  }

  li {
    display: inline-block;
    margin: 5px;
  }
}

.work {
  display: table-cell;
  vertical-align: middle;
  width: 300px;
  height: 225px;
  overflow: hidden;
  text-align: center;

  img {
    max-width: 100%;
    max-height: 100%;    
  }
}

.work-library {
  display: table-cell;
  vertical-align: middle;
  width: 300px;
  height: 125px;
  text-align: center;
  background: $color-text;
  p {
    color: $color-text-light;
    font-weight: bold;
    font-size: 30px;
  }
}
</style>
  