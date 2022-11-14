<template>
    <workbase>
        <h2>OdinCard</h2>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="desc">
                <div class="to-left">
                    <h3>DESCRIPTION</h3>
                </div>
                <div class="text">
                    1つのPCで2人対戦するじゃんけん系の心理戦テーブルゲームです。<br /><br />

                    毎ターン互いに手持ちのカードから1枚選んで勝負します。<br />
                    各カードに強さがあり、相手の王のカードを倒すと勝利になります。<br />
                    また、プレイヤーが任意で特殊能力を持ったカードを1枚選ぶことができます。<br />
                    こちらの作品は、部活動として「U-22 プログラミング・コンテスト2014」に提出しています。
                </div>
            </div>
            <div class="top-media">
                <img src="@/assets/works/program/game/OdinCard/pic99.gif" width="600" />
            </div>
        </div>
        <media :slide="slide" />
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2014 (数ヵ月)<br /><br />
            プログラマー：mahou<br />
            デザイン：weed<br />
            カードデザイン：weed, nobu, arisan<br />
            音楽：rekku<br />
        </div>
    </workbase>
</template>
    
<script>
import workbase from "@/components/works/program/WorkBase.vue"
import autolink from "@/components/AutoLink.vue"
import skillicon from "@/components/SkillIconAutoCategory.vue"
import media from "@/components/works/program/MediaGallery.vue"
import imageModal from "@/components/ImageModal.vue"

export default {
    name: "OdinCard",
    data() {
        return {
            self: null,
            slide: [
                require("@/assets/works/program/game/OdinCard/pic01.png"),
                require("@/assets/works/program/game/OdinCard/pic02.png"),
                require("@/assets/works/program/game/OdinCard/pic03.png"),
                require("@/assets/works/program/game/OdinCard/pic04.png"),
                require("@/assets/works/program/game/OdinCard/pic05.png"),
                require("@/assets/works/program/game/OdinCard/pic06.png"),
                require("@/assets/works/program/game/OdinCard/pic07.png"),
            ],
            skills: [
                "C",
                "Windows API",
            ],
        };
    },
    components: {
        autolink,
        skillicon,
        media,
        workbase,
        imageModal
    }
};
</script>
    
<style lang="scss" scoped>

</style>
    