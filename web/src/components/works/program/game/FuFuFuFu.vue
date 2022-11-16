<template>
    <workbase>
        <h2>ふふふふ</h2>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="to-left">
                <h3>DESCRIPTION</h3>
            </div>
            <div class="text">
                ふってくるものが<br>
                ふるものか<br>
                ふるじゃないものか<br>
                ふり分けるゲーム<br>
                <br />
                8時間ハッカソンで作成したものです。<br />
                「優勝」作品です。
            </div>
        </div>
        <media :slide="slide" :width="400" portrait />
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2017 (8時間)<br /><br />
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
    name: "FuFuFuFu",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/FuFuFuFu/pic01.jpg"),
                require("@/assets/works/program/game/FuFuFuFu/pic02.jpg"),
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
    