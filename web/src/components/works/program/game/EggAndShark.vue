<template>
    <workbase>
        <h2>ゆでたまごとさめ</h2>
        <div class="skill" v-if="detailed">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="desc">
                <div class="to-left">
                    <h3>DESCRIPTION</h3>
                </div>
                <div class="text" v-if="detailed">
                    お客さんの要望どおりのゆでぐあいのたまごをクリックするゲームです。<br /><br />

                    ゆでたまごはゆですぎると死んでしまうし完熟たまごとはいえゆですぎてもダメ。<br>
                    自分の中でたまごのゆでぐあいを覚えていこう。<br>
                    サメはゆでたまごを食べてしまうのでクリックで攻撃して倒そう。<br>
                    <br />
                    「第1回Siv3DGameJam」投稿作品です。<br />
                </div>
                <div class="text" v-else>
                    お客さんの要望どおりのゆでぐあいのたまごをクリックするゲームです。<br /><br />

                    ゆでたまごはゆですぎると死んでしまうし完熟たまごとはいえゆですぎてもダメ。<br>
                    自分の中でたまごのゆでぐあいを覚えていこう。<br>
                    サメはゆでたまごを食べてしまうのでクリックで攻撃して倒そう。
                </div>                
            </div>
            <div class="top-media">
                <img src="@/assets/works/program/game/EggAndShark/pic99.gif" width="600" />
            </div>
        </div>
        <media :slide="slide" />
        <div>
            <div class="to-left">
                <h3>PLAY</h3>
            </div>
            <div class="text">
                <a href="http://ux.getuploader.com/tyanmahou_game/download/3/egg_and_shark.zip"
                    target="blank">ダウンロード</a>
            </div>
        </div>
        <div v-if="detailed">
            <div class="to-left">
                <h3>DEVELOP</h3>
            </div>
            <div class="text">
                2016 (1日)<br /><br />
                プログラマー：mahou<br>
                デザイン：udon<br>
                サウンド：naotit
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
    name: "EggAndShark",
    props: {
        detailed: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/EggAndShark/pic01.png"),
                require("@/assets/works/program/game/EggAndShark/pic02.png"),
                require("@/assets/works/program/game/EggAndShark/pic03.png"),
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
        media,
        youtube,
        workbase
    },

};
</script>
    
<style lang="scss" scoped>

</style>
    