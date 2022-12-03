<template>
    <workbase>
        <h2>箱にア</h2>
        <div class="skill" v-if="detailed">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="desc">
                <div class="to-left">
                    <h3>DESCRIPTION</h3>
                </div>
                <div class="text" v-if="detailed">
                    箱いっぱいに「ア」を詰めよう！！<br>
                    <br />
                    「Unity1week」投稿作品です。<br />
                </div>
                <div class="text" v-else>
                    箱いっぱいに「ア」を詰めよう！！
                </div>
            </div>
            <div class="top-media">
                <img src="@/assets/works/program/game/HakoniA/pic99.gif" width="600" />
            </div>
        </div>
        <media :slide="slide" />
        <div>
            <div class="to-left">
                <h3>PLAY</h3>
            </div>
            <div class="text">
                <a href="https://unityroom.com/games/hakoniA" target="blank">UnityRoomへ</a>
            </div>
        </div>
        <div v-if="detailed">
            <div class="to-left">
                <h3>DEVELOP</h3>
            </div>
            <div class="text">
                2019 (1週間)
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
    name: "HakoniA",
    props: {
        detailed: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/HakoniA/pic01.png"),
                require("@/assets/works/program/game/HakoniA/pic02.png"),
                require("@/assets/works/program/game/HakoniA/pic03.png"),
            ],
            skills: [
                "C#",
                "Unity",
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
    