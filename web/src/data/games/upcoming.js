import { shallowRef } from 'vue'

// Game
import gameReAbyss from "@/components/works/program/game/ReAbyss.vue"

export default [
    {
        title: "AbyssDream",
        caption: "横スクロールアクション",
        img: require("@/assets/works/program/game/ReAbyss/pic01.png"),
        detail: shallowRef(gameReAbyss),
        playable: false,
    },
];