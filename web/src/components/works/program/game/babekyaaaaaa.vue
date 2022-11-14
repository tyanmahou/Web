<template>
    <workbase>
        <h2>バーベきゃ～</h2>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="desc">
                <div class="to-left">
                    <h3>DESCRIPTION</h3>
                </div>
                <div class="text">
                    串を飛ばして食い物だけを上手くねらって刺していくゲームです。<br>
                    <br />
                    企業開催の1dayハッカソンで制作した作品です。<br />
                    6人くらいのチームだっと思います。<br />
                </div>
            </div>
            <div class="top-media">
                <img src="@/assets/works/program/game/babekyaaaaaa/pic99.gif" width="600" />
            </div>
        </div>
        <media :slide="slide" />
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2016 (1日)<br />
            <br />
            担当：Prefabデータの作成<br />
            ※私はデータ作成のみの担当になります。
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
    name: "babekyaaaaaa",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/babekyaaaaaa/pic01.png"),
                require("@/assets/works/program/game/babekyaaaaaa/pic02.png"),
                require("@/assets/works/program/game/babekyaaaaaa/pic03.png"),
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
    