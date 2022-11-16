<template>
  <h2>GAME</h2>
  <div class="contents-wrap" id="game-wrap">
    <ul id="game-ul" class="game-list">
      <li v-for="item in game">
        <mymodel>
          <template #title>
            <div class="work-img">
              <img :src="item.img" width="300" class="game-img">
            </div>
            <div class="detail">
              <p class="title">
                {{ item.title }}
              </p>
              <p class="caption">
                {{ item.caption }}
              </p>
              <p v-if="item.event" class="event">
                {{ item.event }}
              </p>
              <playableicon class="playable-icon" v-if="item.playable" />
            </div>
            <hr/>
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
    <ul id="web-ul" class="web-list">
      <li v-for="item in web">
        <mymodel>
          <template #title>
            <div class="work-img">
              <img :src="item.img" width="300" class="web-img">
            </div>
            <div class="detail">
              <p class="title">
                {{ item.title }}
              </p>
              <p class="caption">
                {{ item.caption }}
              </p>
              <p v-if="item.event" class="event">
                {{ item.event }}
              </p>
            </div>
            <hr/>
          </template>
          <template #contents>
            <component :is="item.detail" />
          </template>
        </mymodel>
      </li>
    </ul>
  </div>
  <h2>Library</h2>
  <div class="contents-wrap">
    <ul class="library-list">
      <li v-for="item in library">
        <mylink class="title" :url="item.detail" absolute target="_blank">
          {{ item.title }}
        </mylink>
        <p class="lang">{{ item.lang }}</p>
        <p class="caption">
          {{ item.caption }}
        </p>
        <hr/>
      </li>
    </ul>
  </div>
</template>
  
<script>
import mylink from "@/components/Link.vue"
import mymodel from "@/components/Modal.vue"
import playableicon from "@/components/works/program/PlayableIcon.vue"
// Game
import gamei19vsi8 from "@/components/works/program/game/i19vsi8.vue"
import gameOdinCard from "@/components/works/program/game/OdinCard.vue"
import gameTimeTravelerHohei from "@/components/works/program/game/TimeTravelerHohei.vue"
import gamePercent5 from "@/components/works/program/game/Percent5.vue"
import gameAbyssDream from "@/components/works/program/game/AbyssDream.vue"
import gameSoldGrow from "@/components/works/program/game/SoldGrow.vue"
import gameFishGame from "@/components/works/program/game/FishGame.vue"
import gameplane from "@/components/works/program/game/plane.vue"
import gameDokiMemoElderlys from "@/components/works/program/game/DokiMemoElderlys.vue"
import gameMoguMoguSTG from "@/components/works/program/game/MoguMoguSTG.vue"
import gameDiceDeveloper from "@/components/works/program/game/DiceDeveloper.vue"
import gameKanCore from "@/components/works/program/game/KanCore.vue"
import gameTansakuYusha from "@/components/works/program/game/TansakuYusha.vue"
import gameNITMicBrothers from "@/components/works/program/game/NITMicBrothers.vue"
import gameTakaraSagashi from "@/components/works/program/game/TakaraSagashi.vue"
import gameSeiseki from "@/components/works/program/game/Seiseki.vue"
import gameOtomeNoTome from "@/components/works/program/game/OtomeNoTome.vue"
import gameMoneyWars from "@/components/works/program/game/MoneyWars.vue"
import gameEggAndShark from "@/components/works/program/game/EggAndShark.vue"
import gameToyboxAndLava from "@/components/works/program/game/ToyboxAndLava.vue"
import game10secDraw from "@/components/works/program/game/10secDraw.vue"
import gamebabekyaaaaaa from "@/components/works/program/game/babekyaaaaaa.vue"
import gameGoatGhost from "@/components/works/program/game/GoatGhost.vue"
import gamePerfectPlayer from "@/components/works/program/game/PerfectPlayer.vue"
import gameSAGASUTyping from "@/components/works/program/game/SAGASUTyping.vue"
import gameJustRoll from "@/components/works/program/game/JustRoll.vue"
import gameFuFuFuFu from "@/components/works/program/game/FuFuFuFu.vue"
import gameMathP from "@/components/works/program/game/MathP.vue"
import gameHakoniA from "@/components/works/program/game/HakoniA.vue"
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
          playable: true,
        },
        {
          title: "箱にア",
          caption: "詰みミニゲーム",
          img: require("@/assets/works/program/game/HakoniA/pic01.png"),
          detail: gameHakoniA,
          event: "unity1week",
          playable: true,
        },
        {
          title: "数学P",
          caption: "ミニゲーム",
          img: require("@/assets/works/program/game/MathP/pic01.png"),
          detail: gameMathP,
          event: "GGJ",
          playable: true,
        },
        {
          title: "ふふふふ",
          caption: "カジュアルゲーム",
          img: require("@/assets/works/program/game/FuFuFuFu/pic01.jpg"),
          detail: gameFuFuFuFu,
          event: "ハッカソン",
          playable: false,
        },
        {
          title: "JustRoll",
          caption: "転がすミニゲーム",
          img: require("@/assets/works/program/game/JustRoll/pic01.png"),
          detail: gameJustRoll,
          event: "unity1week",
          playable: true,
        },
        {
          title: "saがsuタイピング",
          caption: "脳トレタイピング",
          img: require("@/assets/works/program/game/SAGASUTyping/pic01.png"),
          detail: gameSAGASUTyping,
          playable: false,
        },
        {
          title: "PerfectPlayer",
          caption: "ミニゲーム",
          img: require("@/assets/works/program/game/PerfectPlayer/pic01.png"),
          detail: gamePerfectPlayer,
          event: "企業ゲームジャム",
          playable: false,
        },
        {
          title: "GoatGhost",
          caption: "横スクロールアクション",
          img: require("@/assets/works/program/game/GoatGhost/pic01.jpg"),
          detail: gameGoatGhost,
          playable: false,
        },
        {
          title: "バーベきゃ～",
          caption: "ミニゲーム",
          img: require("@/assets/works/program/game/babekyaaaaaa/pic01.png"),
          detail: gamebabekyaaaaaa,
          event: "企業ハッカソン",
          playable: false,
        },
        {
          title: "Siv3Dくん版 深夜のお絵かき10秒一本勝負",
          caption: "高速お絵描きゲーム",
          img: require("@/assets/works/program/game/10secDraw/pic01.png"),
          detail: game10secDraw,
          event: "Siv3D Game Jam",
          playable: true,
        },
        {
          title: "おもちゃ箱と溶岩",
          caption: "ミニゲーム",
          img: require("@/assets/works/program/game/ToyboxAndLava/pic01.png"),
          detail: gameToyboxAndLava,
          event: "ハッカソン",
          playable: false,
        },
        {
          title: "ゆでたまごとさめ",
          caption: "ミニゲーム",
          img: require("@/assets/works/program/game/EggAndShark/pic01.png"),
          detail: gameEggAndShark,
          event: "Siv3D Game Jam",
          playable: true,
        },
        {
          title: "お年玉うぉーず",
          caption: "タワーディフェンス",
          img: require("@/assets/works/program/game/MoneyWars/pic01.png"),
          detail: gameMoneyWars,
          playable: true,
        },
        {
          title: "乙女のトメ",
          caption: "横スクロール",
          img: require("@/assets/works/program/game/OtomeNoTome/pic01.png"),
          detail: gameOtomeNoTome,
          event: "ゲームジャム",
          playable: false,
        },
        {
          title: "不可を見るな(仮)",
          caption: "視線操作ゲーム",
          img: require("@/assets/works/program/game/Seiseki/pic01.png"),
          detail: gameSeiseki,
          event: "ハッカソン",
          playable: false,
        },
        {
          title: "宝さがし",
          caption: "視線操作ゲーム",
          img: require("@/assets/works/program/game/TakaraSagashi/pic01.png"),
          detail: gameTakaraSagashi,
          playable: false,
        },
        {
          title: "NITMicじゃんぷばとらーず",
          caption: "乱闘アクション",
          img: require("@/assets/works/program/game/NITMicBrothers/pic01.jpg"),
          detail: gameNITMicBrothers,
          playable: false,
        },
        {
          title: "探索勇者",
          caption: "探索アルゴリズム",
          img: require("@/assets/works/program/game/TansakuYusha/pic01.png"),
          detail: gameTansakuYusha,
          playable: false,
        },
        {
          title: "KanCore",
          caption: "クリックゲーム",
          img: require("@/assets/works/program/game/KanCore/pic01.png"),
          detail: gameKanCore,
          playable: false,
        },
        {
          title: "DiceDeveloper",
          caption: "パズル",
          img: require("@/assets/works/program/game/DiceDeveloper/pic01.png"),
          detail: gameDiceDeveloper,
          playable: false,
        },
        {
          title: "どきどきメモリアル Elderly's Side",
          caption: "恋愛ノベル",
          img: require("@/assets/works/program/game/DokiMemoElderlys/pic01.png"),
          detail: gameDokiMemoElderlys,
          event: "ゲームジャム",
          playable: false,
        },
        {
          title: "もぐもぐSTG",
          caption: "縦シューティング",
          img: require("@/assets/works/program/game/MoguMoguSTG/pic01.png"),
          detail: gameMoguMoguSTG,
          event: "未完成",
          playable: false,
        },
        {
          title: "くうこう",
          caption: "横スクロール",
          img: require("@/assets/works/program/game/plane/pic01.png"),
          detail: gameplane,
          event: "ハッカソン",
          playable: false,
        },
        {
          title: "FishGame",
          caption: "横スクロール",
          img: require("@/assets/works/program/game/FishGame/pic01.png"),
          detail: gameFishGame,
          event: "ハッカソン",
          playable: false,
        },
        {
          title: "SoldGrow",
          caption: "放置ゲーム",
          img: require("@/assets/works/program/game/SoldGrow/pic01.png"),
          detail: gameSoldGrow,
          event: "未完成",
          playable: false,
        },
        {
          title: "AbyssDream",
          caption: "横スクロールアクション",
          img: require("@/assets/works/program/game/AbyssDream/pic01.png"),
          detail: gameAbyssDream,
          playable: false,
        },
        {
          title: "%5",
          caption: "落ちものパズル",
          img: require("@/assets/works/program/game/%5/pic01.png"),
          detail: gamePercent5,
          playable: false,
        },
        {
          title: "タイムトラベラー歩兵",
          caption: "縦スクロールクソゲー",
          img: require("@/assets/works/program/game/TimeTravelerHohei/pic01.png"),
          detail: gameTimeTravelerHohei,
          playable: false,
        },
        {
          title: "OdinCard",
          caption: "テーブルゲーム",
          img: require("@/assets/works/program/game/OdinCard/pic01.png"),
          detail: gameOdinCard,
          playable: false,
        },
        {
          title: "伊19VS伊8",
          caption: "クソゲー",
          img: require("@/assets/works/program/game/i19vsi8/pic01.png"),
          detail: gamei19vsi8,
          playable: false,
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
    playableicon,
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
    }

    window.addEventListener('resize', () => {
      updateContentMargin('game');
      updateContentMargin('web');
    });
  }
};
</script>
  
<style lang="scss" scoped>
@import "@/scss/common";

ul.game-list,
ul.web-list {
  list-style: none;
  text-align: left;

  li {

    display: inline-block;
    margin: 5px;

    width: 300px;
    vertical-align: top;

    .work-img {
      display: table-cell;
      vertical-align: middle;
      width: 300px;
      height: 225px;
      overflow: hidden;
      text-align: center;
      background-color: #fff;

      img {
        object-fit: cover;
        vertical-align: middle;
        transition: .2s;
      }

      img.game-img {
        width: 100%;
        height: 100%;
      }

      img.web-img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    .detail {
      position: relative;
      height: 70px;
      text-align: left;

      .title {
        font-size: 15px;
        font-weight: bold;
        transition: .2s;
      }

      .caption {
        font-size: 12px;
      }

      .event {
        display: inline;
        color: #fff;
        background-color: #aaa;
        font-size: 10px;
        padding: 2px;
        border-radius: 7px;
      }

      .playable-icon {
        position: absolute;
        top: 28px;
        right: 5px;
        z-index: 3;
      }
    }

    &:hover {
      .work-img {
        img {
          opacity: 0.7;
          scale: 105%;
        }
      }

      .detail {
        .title {
          color: $color-theme;
        }
      }
    }
  }
  hr {
    border-top: 1px solid $color-theme;
  }  
}

ul.library-list {
  text-align: left;

  @include normal-link;

  .title {
    //color: $color-theme;
    font-size: 30px;
    font-weight: bold;
  }

  .lang {
    font-size: 15px;
    font-weight: bold;
    transition: .2s;
  }

  .caption {
    font-size: 12px;
  }
  hr {
    border-top: 1px solid $color-theme;
  }
}
</style>
  