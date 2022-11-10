<template>
    <div class="playable-icon">
        <img src="@/assets/commons/icon/playable.png" width="30" />
    </div>
</template>
    
<script>
import icon from "@/components/ServiceIcon.vue"

export default {
    name: "PlayableIcon",
    data() {
        return {
        };
    },
    components: {
    },
};
</script>
    
<style lang="scss" scoped>
@import "@/scss/common";

.playable-icon {
    display: inline-block;
    background: $color-theme; //rgba($color-theme, 1);
    padding: 4px;
    border-radius: 50%;
    outline: #fff solid 2px;
    img {
        vertical-align: middle;
    }
}
</style>
    