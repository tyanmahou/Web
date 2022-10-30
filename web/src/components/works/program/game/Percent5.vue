<template>
    <workbase>
        <h2>%5</h2>
        <div>
            <img src="@/assets/works/program/game/%5/pic99.gif" width="600" />
            <slideshow width="900" :slide="slide" />
        </div>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="text">
            落ちものパズルゲームです。<br /><br />

            十字型に数字の和が5の倍数になったら消えます。<br />
            同じ数字を5つや、1～5すべてを揃えて消すと高得点です。
        </div>
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
import slideshow from "@/components/Slideshow.vue"

export default {
    name: "Percent5",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/%5/pic01.png"),
                require("@/assets/works/program/game/%5/pic02.png"),
                require("@/assets/works/program/game/%5/pic03.png"),
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
        slideshow,
        workbase
    },

};
</script>
    
<style lang="scss" scoped>

</style>
    