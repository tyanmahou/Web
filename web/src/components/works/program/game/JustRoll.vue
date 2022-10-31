<template>
    <workbase>
        <h2>JustRoll</h2>
        <div>
            <img src="@/assets/works/program/game/JustRoll/pic99.gif" width ="600"/>
            <slideshow width="900" :slide="slide" />
        </div>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="text">
            赤線の上に上手く乗るように線を引くカジュアルゲームです。<br>
            <br/>
            「Unity1week」投稿作品です。<br/>
        </div>
        <div class="to-left">
            <h3>PLAY</h3>
        </div>
        <div class="text">
            <a href="https://unityroom.com/games/just_roll" target="blank">UnityRoomへ</a>
        </div>
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2017 (1週間)
        </div>
    </workbase>
</template>
    
<script>
import workbase from "@/components/works/program/WorkBase.vue"
import autolink from "@/components/AutoLink.vue"
import skillicon from "@/components/SkillIconAutoCategory.vue"
import youtube from "@/components/widgets/Youtube/Embed.vue"
import slideshow from "@/components/Slideshow.vue"

export default {
    name: "10secDraw",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/JustRoll/pic01.png"),
                require("@/assets/works/program/game/JustRoll/pic02.png"),
                require("@/assets/works/program/game/JustRoll/pic03.png"),
            ],
            skills: [
                "C#",
                "Unity",
            ],
        };
    },
    components: {
        autolink,
        skillicon,
        slideshow,
        youtube,
        workbase
    },

};
</script>
    
<style lang="scss" scoped>

</style>
    