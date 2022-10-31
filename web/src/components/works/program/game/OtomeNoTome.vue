<template>
    <workbase>
        <h2>乙女のトメ</h2>
        <div>
            <slideshow width="900" :slide="slide" />
        </div>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="text">
            おばあちゃんの「トメ」をタイムマシンで時空を移動することで若返らせるゲームです。<br/>
            部活動の48時間ゲームジャムでプログラマ3人、サウンド2人の5人チームで作成しました。<br/><br/>

            最初にどの時期まで若返らせるかステージを選びます。<br/>
            時空ではタイムマシンがどんどん加速するので、目標の年齢でうまくタイムマシンを止めれるように、<br/>
            スピード変化アイテムを取得しましょう。<br/>
            また、爆弾にあたるとダメージを受けるので避けましょう。<br/>
            上手く目標成功した場合は、到達時間がランキングに登録されます。<br/>

            サウンドが2人いたのを活かして、各年代ごとにクリアジングルをわけています。
        </div>
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2016 (3日)<br /><br />

            プログラマ：mahou, hayashi, yukke<br />
            デザイナ：チーム全員<br />
            サウンド：naotit, aruma<br />
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
    name: "OtomeNoTome",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/OtomeNoTome/pic01.png"),
                require("@/assets/works/program/game/OtomeNoTome/pic02.png"),
                require("@/assets/works/program/game/OtomeNoTome/pic03.png"),
                require("@/assets/works/program/game/OtomeNoTome/pic04.png"),
                require("@/assets/works/program/game/OtomeNoTome/pic05.png"),
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
    