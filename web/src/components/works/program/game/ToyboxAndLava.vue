<template>
    <workbase>
        <h2>おもちゃ箱と溶岩</h2>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="desc">
                <div class="to-left">
                    <h3>DESCRIPTION</h3>
                </div>
                <div class="text">
                    上からふってくるおもちゃを上手くキャッチするゲームです。<br />
                    溶岩にあたらないように注意。<br />

                    <br />
                    8時間ハッカソンで作成したものです。<br />
                </div>
            </div>
            <div class="top-media">
                <img src="@/assets/works/program/game/ToyboxAndLava/pic01.png" width="600" />
            </div>
        </div>
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2016 (8時間)<br /><br />
            プログラマー：siguma, direct<br>
            デザイン：mahou<br>
            ※私はデザインのみの担当です。
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
    name: "ToyboxAndLava",
    data() {
        return {
            slide: [
            ],
            skills: [
                "C++",
                "Siv3D",
                "Visual Studio",
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
    