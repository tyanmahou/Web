import { shallowRef } from 'vue'

// Game
import gameColorfulTone from "@/components/works/program/game/ColorfulTone.vue"

export default [
    {
        title: "ColorfulTone",
        caption: "音楽ゲーム",
        img: require("@/assets/works/program/game/ColorfulTone/Screenshot1.png"),
        detail: shallowRef(gameColorfulTone),
        playable: true,
    },
];