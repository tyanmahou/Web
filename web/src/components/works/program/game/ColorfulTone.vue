<template>
    <workbase>
        <h2>ColorfulTone</h2>
        <div>
        <img src="@/assets/works/program/game/ColorfulTone/logo.png" width="300">
        </div>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="text">
            色をテーマにした音楽ゲームが登場！<br/><br/>
            Siv3DでWindows向けの音楽ゲームを制作<br/>
            数年にわたり楽曲追加や機能改善の運営を実施しました。<br/>(※現在は非定期更新)
        </div>
        <div class="to-left">
            <h3>WEB</h3>
        </div>
        <div class="text">
            <a href="https://colorfultone.tyanmahou.com/web/"
                target="_blank">https://colorfultone.tyanmahou.com/web/</a>
        </div>
        <div class="to-left">
            <h3>PLAY</h3>
        </div>
        <div class="text">
            <a href="https://www.freem.ne.jp/win/game/14167" target="_blank">https://www.freem.ne.jp/win/game/14167</a>
        </div>
        <div class="to-left">
            <h3>REPOSITORY</h3>
        </div>
        <div class="text">
        <ul>
        <li><a href="https://github.com/tyanmahou/ColorfulTone" target="_blank">https://github.com/tyanmahou/ColorfulTone</a></li>
        <li><a href="https://github.com/tyanmahou/ColorfulTone_API" target="_blank">https://github.com/tyanmahou/ColorfulTone_API</a></li>
        </ul>
        </div>        
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2016～2022<br /><br />
            プログラマー:mahou<br />
            デザイン：mahou, CIWS<br />
            音楽：ShinaLi, arisan<br />
            譜面：mahou, arisan, kotobuki<br />
            スペシャルサンクス： チルゴロウ, ショウタ
        </div>
        <div class="to-left">
            <h3>HISTORY</h3>
        </div>
        <ul>
            <li>
                <h4>2016~</h4>
                <p class="text">
                    ゲームリリース。<br />
                    当時のグラフィックはCIWS、音楽をarisanが担当。
                </p>
            </li>
            <li>
                <h4>2019~</h4>
                <p class="text">
                    大型アップデートによりデザインをキャンバス風に一新。<br />
                    新規グラフィックをmahou、音楽をShinaLiが担当。
                </p>
            </li>
        </ul>
    </workbase>
</template>
    
<script>
import workbase from "@/components/works/program/WorkBase.vue"
import skillicon from "@/components/SkillIconAutoCategory.vue"

export default {
    name: "ColorfulTone",
    data() {
        return {
            skills: [
                "C++",
                "Siv3D",
                "PHP",
            ],
        };
    },
    components: {
        skillicon,
        workbase
    }
};
</script>
    
<style lang="scss" scoped>

</style>
    