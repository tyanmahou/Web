<template>
    <workbase>
        <h2>どきどきメモリアル Elderly's Side</h2>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="desc">
                <div class="to-left">
                    <h3>DESCRIPTION</h3>
                </div>
                <div class="text">
                    老人ホームで繰り広げられる恋愛ゲーム!?
                    <br /><br />
                    部活動で48時間のゲームジャムで作った作品です。
                </div>
            </div>
            <div class="top-media">
                <img src="@/assets/works/program/game/DokiMemoElderlys/pic99.gif" width="600" />
            </div>
        </div>
        <media :slide="slide" />
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2015 (3日)<br /><br />
            プログラマー：mahou,negi<br />
            デザイン：rekku<br />
            音楽：rekku<br />
            シナリオ：rekku<br />
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
    name: "DokiMemoElderlys",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/DokiMemoElderlys/pic01.png"),
                require("@/assets/works/program/game/DokiMemoElderlys/pic02.png"),
                require("@/assets/works/program/game/DokiMemoElderlys/pic03.png"),
                require("@/assets/works/program/game/DokiMemoElderlys/pic04.png"),
                require("@/assets/works/program/game/DokiMemoElderlys/pic05.png"),
                require("@/assets/works/program/game/DokiMemoElderlys/pic06.png"),
            ],
            skills: [
                "C++",
                "Windows API",
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
    