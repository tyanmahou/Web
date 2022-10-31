<template>
    <workbase>
        <h2>宝さがし</h2>
        <div>
            <img src="@/assets/works/program/game/TakaraSagashi/pic99.gif" width="600" />
            <slideshow width="900" :slide="slide" />
        </div>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="text">
            アイトラッキング「TobiiEyeX」を使用して視線操作で宝を探すゲームです。
        </div>
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2015 (1日程度)<br />
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
    name: "TakaraSagashi",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/TakaraSagashi/pic01.png"),
                require("@/assets/works/program/game/TakaraSagashi/pic02.png"),
                require("@/assets/works/program/game/TakaraSagashi/pic03.png"),
            ],
            skills: [
                "C++",
                "Siv3D",
                "Tobii EyeX"
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
    