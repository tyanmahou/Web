<template>
    <workbase>
        <h2>不可を見るな(仮)</h2>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="desc">
                <div class="to-left">
                    <h3>DESCRIPTION</h3>
                </div>
                <div class="text">
                    アイトラッキング「TobiiEyeX」を使用して視線操作で遊ぶゲームです。<br><br>
                    成績表の「不可」の単位からはなるべく目をそらして、良い単位だけ見るようにします。<br>
                    ハッカソンでプログラマ3人チ―ムで実装しました。<br>
                    なお、作品名は決まっていなかったので仮名になります。
                </div>
            </div>
            <div class="top-media">
                <img src="@/assets/works/program/game/Seiseki/pic99.gif" width="600" />
            </div>
        </div>
        <media :slide="slide" />
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2015 (8時間)<br /><br />

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
    name: "Seiseki",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/Seiseki/pic01.png"),
                require("@/assets/works/program/game/Seiseki/pic02.png"),
                require("@/assets/works/program/game/Seiseki/pic03.png"),
                require("@/assets/works/program/game/Seiseki/pic04.png"),
                require("@/assets/works/program/game/Seiseki/pic05.png"),
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
        media,
        youtube,
        workbase
    },

};
</script>
    
<style lang="scss" scoped>

</style>
    