<template>
    <workbase>
        <h2>もぐもぐSTG</h2>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="desc">
                <div class="to-left">
                    <h3>DESCRIPTION</h3>
                </div>
                <div class="text">
                    未完成作品です。<br /><br />

                    STGゲームの動きなどを実装してみてました。
                </div>
            </div>
            <div class="top-media">
                <youtube url="https://www.youtube.com/embed/A94zoT6p80k" />
            </div>
        </div>
        <media :slide="slide" />
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2015 (数日)
        </div>
    </workbase>
</template>
    
<script>
import workbase from "@/components/works/program/WorkBase.vue"
import autolink from "@/components/AutoLink.vue"
import skillicon from "@/components/SkillIconAutoCategory.vue"
import media from "@/components/works/program/MediaGallery.vue"
import youtube from "@/components/widgets/Youtube/Embed.vue"

export default {
    name: "MoguMoguSTG",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/MoguMoguSTG/pic01.png"),
                require("@/assets/works/program/game/MoguMoguSTG/pic02.png"),
                require("@/assets/works/program/game/MoguMoguSTG/pic03.png"),
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
        media,
        youtube,
        workbase
    },

};
</script>
    
<style lang="scss" scoped>
iframe {
    aspect-ratio: 560 / 315;
    width: 100%;
    height: 100%
}
</style>
    