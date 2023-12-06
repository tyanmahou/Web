<template>
    <workbase>

        <h2>チャンマホウのHP</h2>
        <img src="@/assets/commons/web_logo.png">
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="text">
            このホームページです。
        </div>
        <div class="to-left">
            <h3>URL</h3>
        </div>
        <div class="text">
            <autolink url="https://tyanmahou.com"/>
        </div>
        <div class="to-left">
            <h3>REPOSITORY</h3>
        </div>
        <div class="text">
            <autolink url="https://github.com/tyanmahou/Web"/>
        </div>
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2007～<br>
            (※リニューアルの度に使用スキルなどは変わってます)
        </div>
        <div class="to-left">
            <h3>HISTORY</h3>
        </div>
        <ul>
            <li>
                <h4>2007~</h4>
                <img src="@/assets/works/program/web/HomePage/history1.png" width="200">
                <p class="text">
                    小学生のころに立ち上げた、初めて作ったデザインのホームページ。<br />
                    当時はツールで自作した「スーパー正男」「WWA」などのJavaアプレットゲームや、<br />
                    「箱庭ノベルス」「あんこはうす」等のサービスで作成したゲーム。<br />
                    「＠パーティII」「FFアドベンチャー」などのフリー配布されていたCGIゲームを配置した<br />
                    ゲーム集サイトでした。
                </p>
                <!-- http://www.geocities.jp/akkatomodati/ -->
            </li>
            <li>
                <h4>2014~</h4>
                <img src="@/assets/works/program/web/HomePage/history2.png" width="200">
                <p class="text">
                    cssを学習してデザインを一新。<br />
                    コンテンツ自体は変わりませんが、phpなども活用しました。
                </p>
                <!-- http://www11.atpages.jp/tyanmahou/ -->
            </li>
            <li>
                <h4>2016~</h4>
                <img src="@/assets/works/program/web/HomePage/history3.png" width="200">
                <p class="text">
                    デザインとコンテンツを一新。<br />
                    過去のゲームは闇に葬り、「ColorfulTone」をはじめとした本格的にプログラミングを学んでから作成したゲームを公開していました。<br />
                    2020年頃からVueを使った実装に切り替えました。<br />
                </p>
                <!-- https:tyanmahou.com -->
            </li>
            <li>
                <h4>2022~</h4>
                <img src="@/assets/works/program/web/HomePage/history4.png" width="200">
                <p class="text">
                    デザインを一新。<br />
                    サイトの目的として、ポートフォリオ的な一面も強めるようにコンテンツを整理しました。
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
    name: "HomePage",
    data() {
        return {
            skills: [
                "HTML",
                "css",
                "sass",
                "JavaScript",
                "Vue.js",
                "Git",
                "GitHub",
                "VS Code",                
                "Docker",
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
    