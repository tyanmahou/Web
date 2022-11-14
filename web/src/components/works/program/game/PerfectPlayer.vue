<template>
    <workbase>
        <h2>PerfectPlayer</h2>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="desc">
                <div class="to-left">
                    <h3>DESCRIPTION</h3>
                </div>
                <div class="text">
                    「ペン」の先を左右に振ることで、飛んでくる「りんご」や「パイナップル」などの果物を刺すゲームです。<br>
                    <br />
                    企業開催のゲームジャムで制作した作品です。<br />
                    プログラマ3人のチームです。
                </div>
            </div>
            <div class="top-media">
                <img src="@/assets/works/program/game/PerfectPlayer/pic99.gif" width="600" />
            </div>
        </div>
        <media :slide="slide" />
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2017 (2日)<br />
            <br />
            担当：プログラマ、サウンド、デザイン
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
    name: "PerfectPlayer",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/PerfectPlayer/pic01.png"),
                require("@/assets/works/program/game/PerfectPlayer/pic02.png"),
                require("@/assets/works/program/game/PerfectPlayer/pic03.png"),
                require("@/assets/works/program/game/PerfectPlayer/pic04.png"),
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
        media,
        youtube,
        workbase
    },

};
</script>
    
<style lang="scss" scoped>

</style>
    