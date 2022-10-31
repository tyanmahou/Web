<template>
    <workbase>
        <h2>SoldGrow</h2>
        <div>
        <slideshow width ="900" :slide="slide"/>
        </div>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="text">
        未完成作品です。<br/><br/>

        WindowsAPIのダイアログの実験や、リアルタイム取得による連動などを計画していました。<br/>
        リアルタイムの時間に連動して背景画像が変わります。
        </div>
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2014 (数日)
        </div>
    </workbase>
</template>
    
<script>
import workbase from "@/components/works/program/WorkBase.vue"
import autolink from "@/components/AutoLink.vue"
import skillicon from "@/components/SkillIconAutoCategory.vue"
import slideshow from "@/components/Slideshow.vue"

export default {
    name: "SoldGrow",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/SoldGrow/pic01.png"),
                require("@/assets/works/program/game/SoldGrow/pic02.png"),
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
        workbase
    },
    
};
</script>
    
<style lang="scss" scoped>

</style>
    