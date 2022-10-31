<template>
    <workbase>
        <h2>saがsuタイピング</h2>
        <div>
            <img src="@/assets/works/program/game/SAGASUTyping/pic99.gif" width="600" />
            <slideshow width="900" :slide="slide" />
        </div>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="text">
            脳トレ要素のあるタイピングゲームです。<br/><br/>

            「sa」と入力する場面では、キーボードを「su」と入力しないといけません。<br/>
            例えば「usagi」の場合は「usugi」と入力しないとミスになります。<br/>
        </div>
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2017 (1日)
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
    name: "SAGASUTyping",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/SAGASUTyping/pic01.png"),
                require("@/assets/works/program/game/SAGASUTyping/pic02.png"),
                require("@/assets/works/program/game/SAGASUTyping/pic03.png"),
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
    