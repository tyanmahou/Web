<template>
    <workbase>
        <h2>Siv3Dくん版深夜のお絵かき10秒一本勝負</h2>
        <div class="skill" v-if="detailed">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="desc">
                <div class="to-left">
                    <h3>DESCRIPTION</h3>
                </div>
                <div v-if="detailed" class="text">
                    10秒でどれだけうまくかけるか！<br />
                    ※Twitter連携を利用します。<br /><br />
                    10秒で「Siv3Dくん」を描いて類似度で点数を付けます。<br>
                    <br />
                    「第10回Siv3dGameJam」投稿作品です。<br />
                </div>
                <div v-else class="text">
                    10秒でどれだけうまくかけるか！<br />
                    ※Twitter連携を利用します。<br /><br />
                    10秒で「Siv3Dくん」を描いて類似度で点数を付けます。                
                </div>
            </div>
            <div class="top-media">
                <img src="@/assets/works/program/game/10secDraw/pic99.gif" width="600" />
            </div>
        </div>
        <media :slide="slide" />
        <div>
            <div class="to-left">
                <h3>PLAY</h3>
            </div>
            <div class="text">
                <a href="http://ux.getuploader.com/tyanmahou_game/download/4/10secDraw.zip" target="blank">ダウンロード</a>
            </div>
        </div>
        <div v-if="detailed">
            <div class="to-left">
                <h3>REPOSITORY</h3>
            </div>
            <div class="text">
                <autolink url="https://github.com/tyanmahou/Siv3dGameJam10" />
            </div>
        </div>
        <div v-if="detailed">
            <div class="to-left">
                <h3>DEVELOP</h3>
            </div>
            <div class="text">
                2016 (1日)<br /><br />
                プログラマー：mahou<br>
                サウンド：mahou<br />
                スペシャルサンクス：Siv3D
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
    name: "10secDraw",
    props: {
        detailed: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/10secDraw/pic01.png"),
                require("@/assets/works/program/game/10secDraw/pic02.png"),
                require("@/assets/works/program/game/10secDraw/pic03.png"),
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
        media,
        youtube,
        workbase
    },

};
</script>
    
<style lang="scss" scoped>

</style>
    