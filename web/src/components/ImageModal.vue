<template>
    <modal :el="el">
        <template #title>
            <img :src="src" :width="width" :height="height" class="image-modal" />
        </template>
        <template #contents>
            <img :src="src" class="wrap" />
        </template>
    </modal>
</template>

<script>
import modal from "@/components/Modal.vue"

export default {
    name: "ImageModal",
    props: {
        src: String,
        el: {
            type: Object,
            default: null,
        },
        width: {
            type: String,
            default: null
        },
        height: {
            type: String,
            default: null
        }
    },
    components: {
        modal
    }
};
</script>

<style lang="scss" scoped>
img.image-modal {
    transition: all 0.3s;

    &:hover {
        transform: scale(0.95);
    }
}

img.wrap {
    max-width: 97%;
    max-height: 97%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
}
</style>
