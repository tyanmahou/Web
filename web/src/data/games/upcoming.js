import { shallowRef } from 'vue'

// Game
import gameReAbyss from "@/components/works/program/game/ReAbyss.vue"

export default [
    {
        title: "Abyss Dream",
        caption: "横スクロール",
        img: require("@/assets/works/program/game/ReAbyss/pic01.png"),
        detail: shallowRef(gameReAbyss),
        playable: false,
    },
];