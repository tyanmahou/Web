<template>
    <workbase>
        <h2>イジンデン 権利カウンター</h2>
        <img src="@/assets/works/program/web/IjinKenriCounter/screenshot.png">
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="text">
            トレーディングカードゲーム「イジンデン」のプレイをサポートする非公認Webアプリです。<br>
            「イジン召喚権」「マリョク配置権」をカウントできます。<br>
            Androidアプリ版もあります。(CapacitorでWebを表示)<br>
            ※非公認アプリのため問題がある場合、公開を停止する可能性はあります。
        </div>
        <div class="to-left">
            <h3>Web URL</h3>
        </div>
        <div class="text">
            <autolink url="https://ijin-kenri-counter.tyanmahou.com" />
        </div>
        <div class="to-left">
            <h3>Android</h3>
        </div>
        <div class="text">
            <autolink url="https://ijin-kenri-counter.tyanmahou.com/ijin-kenri-counter-release.apk" />
        </div>
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2024 (1日)
        </div>
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
                "HTML",
                "css",
                "JavaScript",
                "Vue.js",
                "Capacitor",
                "Git",
                "GitHub",
                "VS Code",                
                "Docker",
                "Android",
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
    