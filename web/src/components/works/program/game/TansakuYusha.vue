<template>
    <workbase>
        <h2>探索勇者</h2>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="desc">
                <div class="to-left">
                    <h3>DESCRIPTION</h3>
                </div>
                <div class="text">
                    探索アルゴリズムダンジョンゲーム
                    <br /><br />
                    「幅優先探索」「深さ優先探索」を指定して自動でマップを進めていく運ゲーです。<br />
                    ダンジョンの迷路も自動生成しています。<br />
                    敵にぶつかるとダメージ。薬草をとると回復します。<br />
                    学校の課題で勝手に作ったゲームです。
                </div>
            </div>
            <div class="top-media">
                <img src="@/assets/works/program/game/TansakuYusha/pic99.gif" width="600" />
            </div>
        </div>
        <media :slide="slide" />
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2015 (2日程度)<br />
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
    name: "TansakuYusha",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/TansakuYusha/pic01.png"),
                require("@/assets/works/program/game/TansakuYusha/pic02.png"),
                require("@/assets/works/program/game/TansakuYusha/pic03.png"),
            ],
            skills: [
                "C++",
                "Siv3D",
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
    