import { shallowRef } from 'vue'

// Game
import game10secDraw from "@/components/works/program/game/10secDraw.vue"

export default [
    {
        title: "Siv3Dくん版 深夜のお絵かき10秒一本勝負",
        caption: "高速お絵描きゲーム",
        img: require("@/assets/works/program/game/10secDraw/pic01.png"),
        detail: shallowRef(game10secDraw),
        event: "Siv3D Game Jam",
        playable: true,
      },    
];