<template>
    <workbase>
        <h2>AbyssDream</h2>
        <div class="skill" v-if="detailed">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="desc">
                <div class="to-left">
                    <h3>DESCRIPTION</h3>
                </div>
                <div class="text">
                    王道横スクロール水中アクションを開発中。<br/><br/>
                    2014年に開発した「AbyssDream」を完全リニューアルします。
                </div>
            </div>
            <div class="top-media">
                <img src="@/assets/works/program/game/ReAbyss/pic01.png" width="600" />
            </div>
        </div>
        <media :slide="slide" />
        ※スクリーンショットは開発中のものも含みます。
        <div v-if="detailed">
            <div class="to-left">
                <h3>DEVELOP</h3>
            </div>
            <div class="text">
                2018～<br />
            </div>
        </div>
    </workbase>
</template>
    
<script>
import workbase from "@/components/works/program/WorkBase.vue"
import autolink from "@/components/AutoLink.vue"
import skillicon from "@/components/SkillIconAutoCategory.vue"
import youtube from "@/components/widgets/Youtube/Embed.vue"
import media from "@/components/works/program/MediaGallery.vue"

export default {
    name: "ReAbyss",
    props: {
        detailed: {
            type: Boolean,
            default: true
        }
    },    
    data() {
        return {
            slide: [
                // require("@/assets/works/program/game/ReAbyss/pic01.png"),
                require("@/assets/works/program/game/ReAbyss/pic02.png"),
                require("@/assets/works/program/game/ReAbyss/pic03.png"),
            ],
            skills: [
                "C++",
                "HLSL",
                "OpenSiv3D",
                "SQLite",
                "Git",
                "GitHub",
                "Visual Studio",
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

</style>
    