<template>
    <workbase>
        <h2>伊19VS伊8</h2>
        <div class="skill">
            <skillicon v-for="s in skills" :name="s" />
        </div>
        <div class="about">
            <div class="desc">
                <div class="to-left">
                    <h3>DESCRIPTION</h3>
                </div>
                <div class="text">
                    プログラミングを学んで1ヵ月ちょっとくらいの時に、C言語で初めて作ったゲームです。<br /><br />

                    艦これの二次創作ゲームという事にはなります。(絵はてきとーですが)<br />
                    たった数時間で初めて作ったゲームですが

                    <ul>
                        <li>入力してキャラクターを動かす</li>
                        <li>弾の発射</li>
                        <li>交差判定</li>
                        <li>ゲームシーケンス</li>
                    </ul>

                    といった基本的な要素をしっかり詰め込んでいます。
                </div>
            </div>
            <div class="top-media">
                <img src="@/assets/works/program/game/i19vsi8/pic99.gif" width="600" />
            </div>
        </div>
        <media :slide="slide" />
        <div class="to-left">
            <h3>DEVELOP</h3>
        </div>
        <div class="text">
            2014 (数時間程度)
        </div>
    </workbase>
</template>
    
<script>
import workbase from "@/components/works/program/WorkBase.vue"
import autolink from "@/components/AutoLink.vue"
import skillicon from "@/components/SkillIconAutoCategory.vue"
import media from "@/components/works/program/MediaGallery.vue"

export default {
    name: "i19vsi8",
    data() {
        return {
            slide: [
                require("@/assets/works/program/game/i19vsi8/pic01.png"),
                require("@/assets/works/program/game/i19vsi8/pic02.png"),
                require("@/assets/works/program/game/i19vsi8/pic03.png"),
                require("@/assets/works/program/game/i19vsi8/pic04.png"),
                require("@/assets/works/program/game/i19vsi8/pic05.png"),
            ],
            skills: [
                "C",
                "Windows API",
            ],
        };
    },
    components: {
        autolink,
        skillicon,
        media,
        workbase
    },

};
</script>
    
<style lang="scss" scoped>

</style>
    