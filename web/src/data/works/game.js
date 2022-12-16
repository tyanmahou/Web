import { shallowRef } from 'vue'

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
import gameBlockKuzusi from "@/components/works/program/game/BlockKuzusi.vue"
import gamebabekyaaaaaa from "@/components/works/program/game/babekyaaaaaa.vue"
import gameGoatGhost from "@/components/works/program/game/GoatGhost.vue"
import gamePerfectPlayer from "@/components/works/program/game/PerfectPlayer.vue"
import gameSAGASUTyping from "@/components/works/program/game/SAGASUTyping.vue"
import gameJustRoll from "@/components/works/program/game/JustRoll.vue"
import gameFuFuFuFu from "@/components/works/program/game/FuFuFuFu.vue"
import gameMathP from "@/components/works/program/game/MathP.vue"
import gameHakoniA from "@/components/works/program/game/HakoniA.vue"
import gameColorfulTone from "@/components/works/program/game/ColorfulTone.vue"

export default [
  {
    title: "ColorfulTone",
    caption: "音楽ゲーム",
    img: require("@/assets/works/program/game/ColorfulTone/Screenshot1.png"),
    detail: shallowRef(gameColorfulTone),
    playable: true,
  },
  {
    title: "箱にア",
    caption: "詰みミニゲーム",
    img: require("@/assets/works/program/game/HakoniA/pic01.png"),
    detail: shallowRef(gameHakoniA),
    event: "unity1week",
    playable: true,
  },
  {
    title: "数学P",
    caption: "ミニゲーム",
    img: require("@/assets/works/program/game/MathP/pic01.png"),
    detail: shallowRef(gameMathP),
    event: "GGJ",
    playable: true,
  },
  {
    title: "ふふふふ",
    caption: "カジュアルゲーム",
    img: require("@/assets/works/program/game/FuFuFuFu/pic01.jpg"),
    detail: shallowRef(gameFuFuFuFu),
    event: "ハッカソン",
    playable: false,
  },
  {
    title: "JustRoll",
    caption: "転がすミニゲーム",
    img: require("@/assets/works/program/game/JustRoll/pic01.png"),
    detail: shallowRef(gameJustRoll),
    event: "unity1week",
    playable: true,
  },
  {
    title: "saがsuタイピング",
    caption: "脳トレタイピング",
    img: require("@/assets/works/program/game/SAGASUTyping/pic01.png"),
    detail: shallowRef(gameSAGASUTyping),
    playable: false,
  },
  {
    title: "PerfectPlayer",
    caption: "ミニゲーム",
    img: require("@/assets/works/program/game/PerfectPlayer/pic01.png"),
    detail: shallowRef(gamePerfectPlayer),
    event: "企業ゲームジャム",
    playable: false,
  },
  {
    title: "GoatGhost",
    caption: "横スクロールアクション",
    img: require("@/assets/works/program/game/GoatGhost/pic01.jpg"),
    detail: shallowRef(gameGoatGhost),
    playable: false,
  },
  {
    title: "バーベきゃ～",
    caption: "ミニゲーム",
    img: require("@/assets/works/program/game/babekyaaaaaa/pic01.png"),
    detail: shallowRef(gamebabekyaaaaaa),
    event: "企業ハッカソン",
    playable: false,
  },
  {
    title: "ブロック崩し",
    caption: "クソゲー",
    img: require("@/assets/works/program/game/BlockKuzusi/pic01.png"),
    detail: shallowRef(gameBlockKuzusi),
    playable: false,
  },  
  {
    title: "Siv3Dくん版 深夜のお絵かき10秒一本勝負",
    caption: "高速お絵描きゲーム",
    img: require("@/assets/works/program/game/10secDraw/pic01.png"),
    detail: shallowRef(game10secDraw),
    event: "Siv3D Game Jam",
    playable: true,
  },
  {
    title: "おもちゃ箱と溶岩",
    caption: "ミニゲーム",
    img: require("@/assets/works/program/game/ToyboxAndLava/pic01.png"),
    detail: shallowRef(gameToyboxAndLava),
    event: "ハッカソン",
    playable: false,
  },
  {
    title: "ゆでたまごとさめ",
    caption: "ミニゲーム",
    img: require("@/assets/works/program/game/EggAndShark/pic01.png"),
    detail: shallowRef(gameEggAndShark),
    event: "Siv3D Game Jam",
    playable: true,
  },
  {
    title: "お年玉うぉーず",
    caption: "タワーディフェンス",
    img: require("@/assets/works/program/game/MoneyWars/pic01.png"),
    detail: shallowRef(gameMoneyWars),
    playable: true,
  },
  {
    title: "乙女のトメ",
    caption: "横スクロール",
    img: require("@/assets/works/program/game/OtomeNoTome/pic01.png"),
    detail: shallowRef(gameOtomeNoTome),
    event: "ゲームジャム",
    playable: false,
  },
  {
    title: "不可を見るな(仮)",
    caption: "視線操作ゲーム",
    img: require("@/assets/works/program/game/Seiseki/pic01.png"),
    detail: shallowRef(gameSeiseki),
    event: "ハッカソン",
    playable: false,
  },
  {
    title: "宝さがし",
    caption: "視線操作ゲーム",
    img: require("@/assets/works/program/game/TakaraSagashi/pic01.png"),
    detail: shallowRef(gameTakaraSagashi),
    playable: false,
  },
  {
    title: "NITMicじゃんぷばとらーず",
    caption: "乱闘アクション",
    img: require("@/assets/works/program/game/NITMicBrothers/pic01.jpg"),
    detail: shallowRef(gameNITMicBrothers),
    playable: false,
  },
  {
    title: "探索勇者",
    caption: "探索アルゴリズム",
    img: require("@/assets/works/program/game/TansakuYusha/pic01.png"),
    detail: shallowRef(gameTansakuYusha),
    playable: false,
  },
  {
    title: "KanCore",
    caption: "クリックゲーム",
    img: require("@/assets/works/program/game/KanCore/pic01.png"),
    detail: shallowRef(gameKanCore),
    playable: false,
  },
  {
    title: "DiceDeveloper",
    caption: "パズル",
    img: require("@/assets/works/program/game/DiceDeveloper/pic01.png"),
    detail: shallowRef(gameDiceDeveloper),
    playable: false,
  },
  {
    title: "どきどきメモリアル Elderly's Side",
    caption: "恋愛ノベル",
    img: require("@/assets/works/program/game/DokiMemoElderlys/pic01.png"),
    detail: shallowRef(gameDokiMemoElderlys),
    event: "ゲームジャム",
    playable: false,
  },
  {
    title: "もぐもぐSTG",
    caption: "縦シューティング",
    img: require("@/assets/works/program/game/MoguMoguSTG/pic01.png"),
    detail: shallowRef(gameMoguMoguSTG),
    event: "未完成",
    playable: false,
  },
  {
    title: "くうこう",
    caption: "横スクロール",
    img: require("@/assets/works/program/game/plane/pic01.png"),
    detail: shallowRef(gameplane),
    event: "ハッカソン",
    playable: false,
  },
  {
    title: "FishGame",
    caption: "横スクロール",
    img: require("@/assets/works/program/game/FishGame/pic01.png"),
    detail: shallowRef(gameFishGame),
    event: "ハッカソン",
    playable: false,
  },
  {
    title: "SoldGrow",
    caption: "放置ゲーム",
    img: require("@/assets/works/program/game/SoldGrow/pic01.png"),
    detail: shallowRef(gameSoldGrow),
    event: "未完成",
    playable: false,
  },
  {
    title: "AbyssDream",
    caption: "横スクロールアクション",
    img: require("@/assets/works/program/game/AbyssDream/pic01.png"),
    detail: shallowRef(gameAbyssDream),
    playable: false,
  },
  {
    title: "%5",
    caption: "落ちものパズル",
    img: require("@/assets/works/program/game/%5/pic01.png"),
    detail: shallowRef(gamePercent5),
    playable: false,
  },
  {
    title: "タイムトラベラー歩兵",
    caption: "縦スクロールクソゲー",
    img: require("@/assets/works/program/game/TimeTravelerHohei/pic01.png"),
    detail: shallowRef(gameTimeTravelerHohei),
    playable: false,
  },
  {
    title: "OdinCard",
    caption: "テーブルゲーム",
    img: require("@/assets/works/program/game/OdinCard/pic01.png"),
    detail: shallowRef(gameOdinCard),
    playable: false,
  },
  {
    title: "伊19VS伊8",
    caption: "クソゲー",
    img: require("@/assets/works/program/game/i19vsi8/pic01.png"),
    detail: shallowRef(gamei19vsi8),
    playable: false,
  },
];