<template>
    <workbase>
        <h2>AbyssDream</h2>
        <div>
            <youtube url="https://www.youtube.com/embed/gjLLiPjvWPs" />
            <slideshow width="900" :slide="slide" />
        </div>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="text">
            さらわれた女の子を救い出せ！！<br />
            ボス1ステージ分の横スクロールアクションゲームです。<br />
            (※追加ステージやボスなども後から追加したりしています。)
            <br /><br />
            技術的にはここからC++に触れており、クラス、ポリモーフィズムやSTLなどを使用しています。<br />
            部活動で学祭に展示しました。
        </div>
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2014 (数ヵ月)<br /><br />
            プログラマー：mahou<br />
            キャラクター原案：mahou<br />
            デザイン：mahou, weed<br />
            音楽：ShinaLi<br />
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
    name: "AbyssDream",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/AbyssDream/pic01.png"),
                require("@/assets/works/program/game/AbyssDream/pic02.png"),
                require("@/assets/works/program/game/AbyssDream/pic03.png"),
            ],
            skills: [
                "C++",
                "Windows API",
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
    