<template>
    <workbase>
        <h2>DiceDeveloper</h2>
        <div>
            <slideshow width="450" :slide="slide" />
        </div>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="text">
            サイコロの展開図をテーマにしたパズルゲーム
            <br /><br/>
            初めて作ったスマホアプリです。<br/>
            マスの目を指で動かして他のマスにもっていくと数字が足されます。<br/>(6を越えたら余剰の値になります)<br/>
            展開図の形で1~6の数字を揃えるとマスが消えてスコアが加算されます。<br/>
            Twitterなどへのスコアシェアの機能もいれてみました。<br/>
            部活動で作った作品です。
        </div>
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2015 (数ヵ月)<br /><br />
            プログラマー：mahou, sim, udon<br />
            デザイン：udon<br />
            音楽：mahou
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
    name: "DiceDeveloper",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/DiceDeveloper/pic01.png"),
                require("@/assets/works/program/game/DiceDeveloper/pic02.png"),
                require("@/assets/works/program/game/DiceDeveloper/pic03.png"),
                require("@/assets/works/program/game/DiceDeveloper/pic04.png"),
            ],
            skills: [
                "Java",
                "Android Studio",
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
    