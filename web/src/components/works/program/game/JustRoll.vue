<template>
    <workbase>
        <h2>JustRoll</h2>
        <div class="skill" v-if="detailed">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="desc">
                <div class="to-left">
                    <h3>DESCRIPTION</h3>
                </div>
                <div class="text" v-if="detailed">
                    〇が赤線の上で上手く止まるように線を引いて転がすカジュアルゲームです。<br>
                    どれだけ連続で成功するかハイスコアを競いましょう！！<br/>
                    <br />
                    「Unity1week」投稿作品です。<br />
                </div>
                <div class="text" v-else>
                    〇が赤線の上で上手く止まるように線を引いて転がすカジュアルゲームです。<br>
                    どれだけ連続で成功するかハイスコアを競いましょう！！
                </div>
            </div>
            <div class="top-media">
                <img src="@/assets/works/program/game/JustRoll/pic99.gif" width="600" />
            </div>
        </div>
        <media :slide="slide" />
        <div>
            <div class="to-left">
                <h3>PLAY</h3>
            </div>
            <div class="text">
                <a href="https://unityroom.com/games/just_roll" target="blank">UnityRoomへ</a>
            </div>
        </div>
        <div v-if="detailed">
            <div class="to-left">
                <h3>DEVELOP</h3>
            </div>
            <div class="text">
                2017 (1週間)
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
    name: "JustRoll",
    props: {
        detailed: {
            type: Boolean,
            default: true
        }
    },    
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/JustRoll/pic01.png"),
                require("@/assets/works/program/game/JustRoll/pic02.png"),
                require("@/assets/works/program/game/JustRoll/pic03.png"),
            ],
            skills: [
                "C#",
                "Unity",
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
    