<template>
    <ul class="media">
        <li v-for="(path, index) in slide" :class="portrait ? 'portrait' : 'landscape'">
            <a @click="open(true, index)" class="modal-button">
                <img :src="path">
            </a>
        </li>
    </ul>
    <teleport to="body">
        <transition name="fade" @before-enter="beforeEnter" @after-leave="afterLeave">
            <div v-if="isOpen" class="modal-window" @click.self="open(false)">
                <div class="modal-content">
                    <div class="slide">
                        <slideshow :width="width" :slide="slide" :auto-paging="false" :init-page="pageNo" />
                    </div>
                </div>
                <div class="close-btn" @click="open(false)">
                    <span /><span />
                </div>
            </div>
        </transition>
    </teleport>
</template>
    
<script>
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
        el: {
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            isOpen: false,
            pageNo: 0,
        };
    },
    components: {
        slideshow,
    },
    mounted() {
    },
    methods: {
        open(isOpen, pageNo) {
            this.isOpen = isOpen;
            this.pageNo = pageNo;
        },
        beforeEnter(el) {
            if (this.el) {
                this.el.setAttribute("style", `overflow: hidden`);
            } else {
                document.body.setAttribute("style", `overflow: hidden`);
            }
        },
        afterLeave(el) {
            if (this.el) {
                this.el.setAttribute("style", `overflow: auto`);
            } else {
                document.body.setAttribute("style", `overflow: auto`);
            }
        }
    }
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

// Modal

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.modal-button {
    cursor: pointer;
}

.modal-window {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    overflow: auto;
    text-align: center;

    & .modal-content {
        display: inline-block;
        margin: 60px 20px 60px 20px;
    }
}

.close-btn {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background: $color-text-light;

        span {
            background: $color-theme;
        }
    }

    span {
        display: inline-block;

        position: absolute;
        height: 7px;
        border-radius: 2px;
        background: #A0A0A0;
        width: 70%;

        &:nth-of-type(1) {
            top: 22.5px;
            left: 7.5px;
            transform: rotate(-45deg);
        }

        &:nth-of-type(2) {
            top: 22.5px;
            left: 7.5px;
            transform: rotate(45deg);
        }
    }
}
</style>
    