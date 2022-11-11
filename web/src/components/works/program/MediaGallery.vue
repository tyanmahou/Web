<template>
    <ul class="media">
        <li v-for="(path, index) in slide" :class="portrait ? 'portrait' : 'landscape'">
            <modal :el="self">
                <template #title>
                    <img :src="path">
                </template>
                <template #contents>
                    <div class="slide">
                        <slideshow :width="width" :slide="slide" :auto-paging="false" :init-page="index" />
                    </div>
                </template>
            </modal>
        </li>
    </ul>
</template>
    
<script>
import slideshow from "@/components/Slideshow.vue"
import modal from "@/components/Modal.vue"

export default {
    name: "MediaGallery",
    props: {
        slide: Array,
        width: {
            type: Number,
            default: 900
        },
        portrait: {
            type: Boolean,
            default: false            
        }
    },
    data() {
        return {
            self: null
        };
    },
    components: {
        slideshow,
        modal,
    },
    mounted() {
        this.self = this.$el;
    },
};
</script>
    
<style lang="scss" scoped>
@import "@/scss/common";

ul.media {
    clear: both;
    list-style: none;
    background: $color-containerbg;

    li {
        display: inline-block;
        margin: 5px;

        &.portrait {
            width: calc(100% / 5 - 5px * 2);

            @media only screen and (max-width: $layout-mid-width) {
                width: calc(100% / 4 - 5px * 2);
            }

            @media only screen and (max-width: $layout-min-width) {
                width: calc(100% / 3 - 5px * 2);
            }

            @media only screen and (max-width: $layout-mobile) {
                width: calc(100% / 2 - 5px * 2);
            }            
        }
        &.landscape {
            width: calc(100% / 4 - 5px * 2);

            @media only screen and (max-width: $layout-mid-width) {
                width: calc(100% / 3 - 5px * 2);
            }

            @media only screen and (max-width: $layout-min-width) {
                width: calc(100% / 2 - 5px * 2);
            }

            @media only screen and (max-width: $layout-mobile) {
                width: calc(100% - 5px * 2);
            }
        }

        overflow: hidden;

        img {
            transition: .3s;

            &:hover {
                scale: 110%;
            }
        }
    }
}

.slide {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
}
</style>
    