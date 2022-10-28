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
        <autolink url="https://colorfultone.tyanmahou.com/web/" />
        </div>
        <div class="to-left">
            <h3>PLAY</h3>
        </div>
        <div class="text">
            <autolink url="https://www.freem.ne.jp/win/game/14167" />
        </div>
        <div class="to-left">
            <h3>REPOSITORY</h3>
        </div>
        <div class="text">
        <ul>
        <li><autolink url="https://github.com/tyanmahou/ColorfulTone" /></li>
        <li><autolink url="https://github.com/tyanmahou/ColorfulTone_API" /></li>
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
import autolink from "@/components/AutoLink.vue"
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
        autolink,
        skillicon,
        workbase
    }
};
</script>
    
<style lang="scss" scoped>

</style>
    