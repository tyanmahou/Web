<template>
    <workbase>
        <h2>ブロック崩し</h2>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="desc">
                <div class="to-left">
                    <h3>DESCRIPTION</h3>
                </div>
                <div class="text">
                    ブロック崩しを作っていたのですが…<br/>
                    せっかくUnityの練習作品だったので物理処理を入れて遊んでいました。<br/>
                    全3ステージです。
                </div>
            </div>
            <div class="top-media">
                <img src="@/assets/works/program/game/BlockKuzusi/pic99.gif" width="600" />
            </div>
        </div>
        <media :slide="slide" />
        <div>
            <div class="to-left">
                <h3>DEVELOP</h3>
            </div>
            <div class="text">
                2016 (数日)
            </div>
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
    name: "BlockKuzusi",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/BlockKuzusi/pic01.png"),
                require("@/assets/works/program/game/BlockKuzusi/pic02.png"),
                require("@/assets/works/program/game/BlockKuzusi/pic03.png"),
                require("@/assets/works/program/game/BlockKuzusi/pic04.png"),
                require("@/assets/works/program/game/BlockKuzusi/pic05.png"),
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
    