<template>
    <workbase>
        <h2>タイムトラベラー歩兵</h2>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="desc">
                <div class="to-left">
                    <h3>DESCRIPTION</h3>
                </div>
                <div class="text">
                    縦スクロールのタイムアタックゲームです。<br /><br />

                    スピードアップアイテムで加速したり、タイムダウンアイテムで時間操作することでタイム0の理論値スコアを目指します。<br />
                    難易度が上がると、ブラックホールに吸い寄せられたり、何が起こるかわからない「時の旅人」と遭遇したりします。<br />
                    技術的にはセーブデータのread/writeを初めて実装しています。
                </div>
            </div>
            <div class="top-media">
                <img src="@/assets/works/program/game/TimeTravelerHohei/pic99.gif" width="600" />
            </div>
        </div>
        <media :slide="slide" />
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2014 (数日程度)
        </div>
    </workbase>
</template>
    
<script>
import workbase from "@/components/works/program/WorkBase.vue"
import autolink from "@/components/AutoLink.vue"
import skillicon from "@/components/SkillIconAutoCategory.vue"
import media from "@/components/works/program/MediaGallery.vue"

export default {
    name: "TimeTravelerHohei",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/TimeTravelerHohei/pic01.png"),
                require("@/assets/works/program/game/TimeTravelerHohei/pic02.png"),
                require("@/assets/works/program/game/TimeTravelerHohei/pic03.png"),
                require("@/assets/works/program/game/TimeTravelerHohei/pic04.png"),
            ],
            skills: [
                "C",
                "Windows API",
                "Visual Studio",
            ],
        };
    },
    components: {
        autolink,
        skillicon,
        media,
        workbase
    },

};
</script>
    
<style lang="scss" scoped>

</style>
    