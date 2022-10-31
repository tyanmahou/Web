<template>
    <workbase>
        <h2>GoatGhost</h2>
        <div>
            <youtube url="https://www.youtube.com/embed/d0p3fi5PX08" />
            <slideshow width="900" :slide="slide" />
        </div>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="text">
            「めちゃくちゃ簡単なんだけど、なんかやってて楽しい横スクロールアクション」をコンセプトにした<br />
            ボス1ステージ分の横スクロールアクションゲームです。<br /><br />

            攻撃は発射ボタンをあらかじめ押しておくだけで自動で敵に飛んでいくので<br />
            プレイヤーは敵の攻撃を避けることだけに集中できます。<br /><br />
            部活動で学祭に展示した作品です。<br />
            その際の評価として以下を得ています。
            <ul>
            <li>満足度ランキング1位</li>
            </ul>
        </div>
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2016 (数ヵ月)<br /><br />
            プログラマー：mahou<br />
            デザイン：mahou<br />
            音楽：rebel<br />
        </div>
    </workbase>
</template>
    
<script>
import workbase from "@/components/works/program/WorkBase.vue"
import autolink from "@/components/AutoLink.vue"
import skillicon from "@/components/SkillIconAutoCategory.vue"
import youtube from "@/components/widgets/Youtube/Embed.vue"
import slideshow from "@/components/Slideshow.vue"

export default {
    name: "GoatGhost",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/GoatGhost/pic01.jpg"),
                require("@/assets/works/program/game/GoatGhost/pic02.jpg"),
                require("@/assets/works/program/game/GoatGhost/pic03.jpg"),
                require("@/assets/works/program/game/GoatGhost/pic04.jpg"),
            ],
            skills: [
                "C++",
                "DirectX",
            ],
        };
    },
    components: {
        autolink,
        skillicon,
        slideshow,
        youtube,
        workbase
    },

};
</script>
    
<style lang="scss" scoped>

</style>
    