<template>
    <workbase>
        <h2>ゆでたまごとさめ</h2>
        <div>
            <img src="@/assets/works/program/game/EggAndShark/pic99.gif" width ="600"/>
            <slideshow width="900" :slide="slide" />
        </div>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="text">
            お客さんの要望どおりのゆでぐあいのたまごをクリックするゲームです。<br/><br/>

			ゆでたまごはゆですぎると死んでしまうし完熟たまごとはいえゆですぎてもダメ。<br>
			自分の中でたまごのゆでぐあいを覚えていこう。<br>
			サメはゆでたまごを食べてしまうのでクリックで攻撃して倒そう。<br>
            <br/>
            「第1回Siv3DGameJam」投稿作品です。<br/>
        </div>
        <div class="to-left">
            <h3>PLAY</h3>
        </div>
        <div class="text">
            <a href="http://ux.getuploader.com/tyanmahou_game/download/3/egg_and_shark.zip" target="blank">ダウンロード</a> 
        </div>
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2017 (1日)<br /><br/>
            プログラマー：mahou<br>
            デザイン：udon<br>
            サウンド：naotit
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
    name: "EggAndShark",
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
    