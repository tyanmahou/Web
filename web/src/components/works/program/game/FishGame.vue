<template>
    <workbase>
        <h2>FishGame</h2>
        <div>
            <img src="@/assets/works/program/game/FishGame/pic99.gif" width ="600"/>
        </div>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="text">
        8時間ハッカソンで作成したものです。<br/><br/>

        障害物にあたると減速するので避けていきます。<br/>
        制限時間内にどれだけ進めるかスコアを競います。<br/>
        プログラマ3人のチームで初めてのハッカソンでした。
        </div>
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2014 (8時間)<br/><br/>
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
            ],            
            skills: [
                "C++",
                "Windows API",
                "DirectX",
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
    