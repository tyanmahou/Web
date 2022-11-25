<template>
    <workbase>
        <h2>ColorfulTone</h2>
        <div class="skill" v-if="detailed">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="desc">
                <div class="to-left">
                    <h3>DESCRIPTION</h3>
                </div>
                <div v-if="detailed" class="text">
                    色をテーマにした音楽ゲームが登場！<br /><br />
                    Siv3DでWindows向けの音楽ゲームを制作<br />
                    数年にわたり楽曲追加や機能改善の運営を実施しました。<br />(※現在は非定期更新)
                </div>
                <div v-else class="text">
                    色をテーマにした音楽ゲームが登場！<br /><br />
                    赤、青、黄に対応した3つのボタンで遊べます。<br />
                    オレンジは赤と黄の同時押し<br />
                    白は押してはいけない<br />
                    のように色の合成をテーマにしたゲームです。<br />
                </div>
            </div>
            <div class="top-media">
                <youtube url="https://www.youtube.com/embed/JRdIV9unlnw" />
            </div>
        </div>
        <media :slide="slide" />
        <div>
            <div class="to-left">
                <h3>WEB</h3>
            </div>
            <div class="text">
                <autolink url="https://colorfultone.tyanmahou.com/web/" />
            </div>
        </div>
        <div>
            <div class="to-left">
                <h3>PLAY</h3>
            </div>
            <div class="text">
                <autolink url="https://www.freem.ne.jp/win/game/14167" />
            </div>
        </div>
        <div v-if="detailed">
            <div class="to-left">
                <h3>REPOSITORY</h3>
            </div>
            <div class="text">
                <ul>
                    <li>
                        <autolink url="https://github.com/tyanmahou/ColorfulTone" />
                    </li>
                    <li>
                        <autolink url="https://github.com/tyanmahou/ColorfulTone_API" />
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="detailed">
            <div class="to-left">
                <h3>DEVELOP</h3>
            </div>
            <div class="text">
                2016～2022<br /><br />
                プログラマー：mahou<br />
                デザイン：mahou, CIWS<br />
                音楽：ShinaLi, arisan<br />
                譜面：mahou, arisan, kotobuki<br />
                スペシャルサンクス： チルゴロウ, ショウタ
            </div>
        </div>
        <div v-if="detailed">
            <div class="to-left">
                <h3>HISTORY</h3>
            </div>
            <ul>
                <li>
                    <h4>2016~</h4>
                    <p class="text">
                        ゲームリリース。<br />
                        当時のグラフィックはCIWS、音楽をarisanが担当。
                    </p>
                </li>
                <li>
                    <h4>2019~</h4>
                    <p class="text">
                        大型アップデートによりデザインをキャンバス風に一新。<br />
                        新規グラフィックをmahou、音楽をShinaLiが担当。
                    </p>
                </li>
            </ul>
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
    name: "ColorfulTone",
    props: {
        detailed: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/ColorfulTone/Screenshot1.png"),
                require("@/assets/works/program/game/ColorfulTone/Screenshot2.png"),
                require("@/assets/works/program/game/ColorfulTone/Screenshot3.png"),
                require("@/assets/works/program/game/ColorfulTone/Screenshot4.png"),
                require("@/assets/works/program/game/ColorfulTone/Screenshot5.png"),
                require("@/assets/works/program/game/ColorfulTone/Screenshot6.png"),
            ],
            skills: [
                "C++",
                "Siv3D",
                "PHP",
            ],
        };
    },
    components: {
        autolink,
        skillicon,
        workbase,
        youtube,
        media,
    },
    mounted() {
    }
};
</script>
    
<style lang="scss" scoped>

</style>
    