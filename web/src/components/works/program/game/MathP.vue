<template>
    <workbase>
        <h2>数学P-MathP-</h2>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="desc">
                <div class="to-left">
                    <h3>DESCRIPTION</h3>
                </div>
                <div class="text">
                    マウス操作で点Pをゴールに導くゲームです。<br />

                    <br />
                    「GGJ 2019」で3人チームで制作しました。<br />
                </div>
            </div>
            <div class="top-media">
                <img src="@/assets/works/program/game/MathP/pic99.gif" width="600" />
            </div>
        </div>
        <media :slide="slide" />
        <div class="to-left">
            <h3>PLAY</h3>
        </div>
        <div class="text">
            <autolink url="https://globalgamejam.org/2019/games/%E6%95%B0%E5%AD%A6p-mathp" />
        </div>
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2019 (3日)<br /><br />
            担当：プログラマ
        </div>
    </workbase>
</template>
    
<script>
import workbase from "@/components/works/program/WorkBase.vue"
import autolink from "@/components/AutoLink.vue"
import skillicon from "@/components/SkillIconAutoCategory.vue"
import youtube from "@/components/widgets/Youtube/Embed.vue"
import media from "@/components/works/program/MediaGallery.vue"

export default {
    name: "MathP",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/MathP/pic01.png"),
                require("@/assets/works/program/game/MathP/pic02.png"),
                require("@/assets/works/program/game/MathP/pic03.png"),
                require("@/assets/works/program/game/MathP/pic04.png"),
            ],
            skills: [
                "C#",
                "Unity",
                "Visual Studio",
            ],
        };
    },
    components: {
        autolink,
        skillicon,
        media,
        youtube,
        workbase
    },

};
</script>
    
<style lang="scss" scoped>

</style>
    