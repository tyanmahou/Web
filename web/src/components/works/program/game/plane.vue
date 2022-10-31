<template>
    <workbase>
        <h2>くうこう</h2>
        <div>
            <img src="@/assets/works/program/game/plane/pic99.gif" width ="600"/>
            <slideshow width ="900" :slide="slide"/>
        </div>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="text">
        8時間ハッカソンで作成したものです。<br/><br/>

        燃料と残機を維持しながら時間内にゴールを目指します<br/>
        </div>
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2015 (8時間)<br/><br/>

            担当：プログラマ
        </div>
    </workbase>
</template>
    
<script>
import workbase from "@/components/works/program/WorkBase.vue"
import autolink from "@/components/AutoLink.vue"
import skillicon from "@/components/SkillIconAutoCategory.vue"
import slideshow from "@/components/Slideshow.vue"

export default {
    name: "FishGame",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/plane/pic01.png"),
                require("@/assets/works/program/game/plane/pic02.png"),
                require("@/assets/works/program/game/plane/pic03.png"),                
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
    