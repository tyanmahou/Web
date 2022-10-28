<template>
    <mycaption title="ColorfulTone" caption="音楽ゲーム">
        <mylink url="https://colorfultone.tyanmahou.com/web/" absolute target="_blank">
            <img src="@/assets/works/program/game/ColorfulTone/Screenshot1.png" width="400">
        </mylink>
    </mycaption>
</template>
  
<script>
import mylink from "@/components/Link.vue";
import mycaption from "@/components/FigCaption.vue";

export default {
    name: "WorkGame",
    props: {},
    components: {
        mylink,
        mycaption,
    },
    data() {
        return {};
    },
};
</script>
  
<style lang="scss" scoped>
@import "@/scss/common";
@media only screen and (max-width: $layout-min-width) {
    img {
        width: 100%;
    }
}
</style>
  