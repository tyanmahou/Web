<template>
    <workbase>
        <h2>KanCore</h2>
        <div>
            <img src="@/assets/works/program/game/KanCore/pic99.gif" width ="600"/>
            <slideshow width="900" :slide="slide" />
        </div>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="text">
            アルミ缶の中心をクリックするゲーム
            <br /><br/>
            初めてSiv3Dで作ったゲームです。<br/>
            缶のより中心をクリックすることで高得点を狙えるので時間内でどれだけクリックしてスコアを稼げるか競います。
        </div>
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2015 (数時間)<br />
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
    name: "KanCore",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/KanCore/pic01.png"),
                require("@/assets/works/program/game/KanCore/pic02.png"),
                require("@/assets/works/program/game/KanCore/pic03.png"),
            ],
            skills: [
                "C++",
                "Siv3D",
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
    