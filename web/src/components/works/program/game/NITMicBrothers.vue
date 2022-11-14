<template>
    <workbase>
        <h2>NITMicじゃんぷばとらーず</h2>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="to-left">
                <h3>DESCRIPTION</h3>
            </div>
            <div class="text">
                最大4人プレイの乱闘アクションゲームです。<br />
                使用キャラクターは部内の作品で生まれたキャラクターを集結しています。<br /><br />

                じゃんぷして相手の頭を踏みつぶせば倒せてスコアが入ります。一番スコアを稼いだ人の勝ちです。<br />
                一度やられてもリスポーンするので、最後まで諦めず遊べます。<br /><br />

                部活動で学祭に展示した作品です。<br />
                その際の評価として以下を得ています。
                <ul>
                    <li>遊んでもらえたランキング1位</li>
                    <li>面白かったゲームランキング1位</li>
                </ul>
            </div>
        </div>
        <media :slide="slide" />
        ※スクリーンショットは開発中のものも含みます。
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2015 (数ヵ月)<br /><br />

            プログラマ：mahou<br />
            デザイナ：evifly, ooryase<br />
            サウンド：WoUnD<br />
            スペシャルサンクス：各過去作品の作者様
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
    name: "NITMicBrothers",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/NITMicBrothers/pic01.jpg"),
                require("@/assets/works/program/game/NITMicBrothers/pic02.jpg"),
                require("@/assets/works/program/game/NITMicBrothers/pic03.jpg"),
                require("@/assets/works/program/game/NITMicBrothers/pic04.jpg"),
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
    