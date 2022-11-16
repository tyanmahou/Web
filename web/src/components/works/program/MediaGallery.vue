<template>
    <div>
        <ul class="media">
            <li v-for="(path, index) in slide" :class="portrait ? 'portrait' : 'landscape'">
                <a @click="open(true, index)" class="modal-button">
                    <img :src="path">
                </a>
            </li>
        </ul>
        <modalbase :el="self" :isOpen="isOpen" @close="open(false)">
            <div class="slide">
                <slideshow :width="width" :slide="slide" :auto-paging="false" :init-page="pageNo" />
            </div>
        </modalbase>
    </div>
</template>
    
<script>
import modal from "@/components/Modal.vue"
import modalbase from "@/components/ModalBase.vue"
import slideshow from "@/components/Slideshow.vue"

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
        },
    },
    data() {
        return {
            self: null,
            isOpen: false,
            pageNo: 0,
        };
    },
    components: {
        modal,
        modalbase,
        slideshow,
    },
    mounted() {
        this.self = this.$el;
    },
    methods: {
        open(isOpen, pageNo) {
            this.isOpen = isOpen;
            this.pageNo = pageNo;
        },
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

        background: #fff;

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
            vertical-align: middle;

            transition: .3s;

            &:hover {
                opacity: 0.7;
                scale: 105%;
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

.modal-button {
    cursor: pointer;
}
</style>
    