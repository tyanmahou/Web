<template>
    <workbase>
        <h2>お年玉うぉーず</h2>
        <div>
            <img src="@/assets/works/program/game/MoneyWars/pic99.gif" width ="600"/>
            <slideshow width="900" :slide="slide" />
        </div>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="text">
            お年玉をテーマにしたタワーディフェンスのゲームです。<br/><br/>


            おじいちゃん、おばちゃんは家に迎え入れてお年玉をいっぱい貰いましょう。<br/>
            おかあさんはお年玉を回収していくので家に入れないようにしよう。<br/>
            家の前に便利なユニットを置くことで様々な効果を得られます。
        </div>
        <div class="to-left">
            <h3>PLAY</h3>
        </div>
        <div class="text">
        <a href="http://ux.getuploader.com/tyanmahou_game/download/2/MoneyWars.zip" target="blank">ダウンロード</a>   
        </div>
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2017 (数日)<br /><br/>
            プログラマー：mahou<br>
            デザイン：udon<br>
            サウンド：フリー素材
            <ul>
            <li>【BGM/SE】ニコニ・コモンズ</li>
            <li>【SE】<a href="http://www.369musiq.com/index.html" target="blank">369様</a></li>
            <li>【SE】<a href="http://www.kurage-kosho.info/" target="blank">くらげ工匠様</a>  </li>
            </ul>
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
    name: "MoneyWars",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/MoneyWars/pic01.png"),
                require("@/assets/works/program/game/MoneyWars/pic02.png"),
                require("@/assets/works/program/game/MoneyWars/pic03.png"),
                require("@/assets/works/program/game/MoneyWars/pic04.png"),
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
    