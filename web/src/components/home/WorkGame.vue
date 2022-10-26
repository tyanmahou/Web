<template>
    <mycaption title="ColorfulTone" caption="音楽ゲーム">
        <mylink url="https://colorfultone.tyanmahou.com/web/" absolute target="_blank">
            <img src="https://colorfultone.tyanmahou.com/web/img/slide/Screenshot1.png" width="400">
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

</style>
  