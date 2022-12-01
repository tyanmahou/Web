import { shallowRef } from 'vue'

// Game
import gameMoneyWars from "@/components/works/program/game/MoneyWars.vue"
import gameEggAndShark from "@/components/works/program/game/EggAndShark.vue"
import game10secDraw from "@/components/works/program/game/10secDraw.vue"
import gameJustRoll from "@/components/works/program/game/JustRoll.vue"
import gameHakoniA from "@/components/works/program/game/HakoniA.vue"

export default [
    {
        title: "箱にア",
        caption: "詰みミニゲーム",
        img: require("@/assets/works/program/game/HakoniA/pic01.png"),
        detail: shallowRef(gameHakoniA),
        event: "unity1week",
        playable: true,
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
        title: "Siv3Dくん版 深夜のお絵かき10秒一本勝負",
        caption: "高速お絵描きゲーム",
        img: require("@/assets/works/program/game/10secDraw/pic01.png"),
        detail: shallowRef(game10secDraw),
        event: "Siv3D Game Jam",
        playable: true,
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
];