<template>
    <workbase>

        <h2>ColorfulTone 公式サイト</h2>
        <img src="@/assets/works/program/web/ColorfulTone/logo.png">
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="text">
            音楽ゲーム「ColorfulTone」の公式サイトです。<br>
            楽曲視聴や、コンテンツダウンロードなど可能。
        </div>
        <div class="to-left">
            <h3>URL</h3>
        </div>
        <div class="text">
            <autolink url="https://colorfultone.tyanmahou.com/web/" />
        </div>
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2020 (1ヵ月程度)
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
                "PHP",
                "Git",
                "GitHub",
                "VS Code",
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
    