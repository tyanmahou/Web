<template>
    <workbase>
        <h2>レイマーチング 初作</h2>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="desc">
                <div class="to-left">
                    <h3>DESCRIPTION</h3>
                </div>
                <div class="text">
                    始めてレイマーチングで遊んでみた作品です。<br>
                    てきとーです。
                </div>
            </div>
            <div class="top-media">
                <img src="@/assets/works/program/other/RayMarching00/pic99.gif" width="600" />
            </div>
        </div>
        <div class="to-left">
            <h3>URL</h3>
        </div>
        <div class="text">
            <autolink url="https://glslsandbox.com/e#73105.4" />
        </div>
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2021 (1日)
        </div>
    </workbase>
</template>
    
<script>
import workbase from "@/components/works/program/WorkBase.vue"
import autolink from "@/components/AutoLink.vue"
import skillicon from "@/components/SkillIconAutoCategory.vue"

export default {
    name: "RayMarching00",
    data() {
        return {
            skills: [
                "GLSL",
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
    